import exp from 'express'
import {authenticate} from '../services/authService.js'
export const commonRoute=exp.Router()

//login
commonRoute.post("/login", async (req, res) => {
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
});

//logout
commonRoute.get("/logout",async(req,res)=>{
  // Clear the cookie named 'token'
  res.clearCookie('token', {
    // Must match original  settings
    httpOnly: true, 
    secure: false,   
    sameSite: 'lax' 
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
});



// change password
commonRoute.put('/change-password', async (req, res) => {
    const reqbody = req.body
    let email=reqbody.email
    let newpassword=reqbody.newPassword
    let oldpassword=reqbody.oldPassword
    //  find user
    const userDoc = await UserTypeModel.findOne({ email })
    if (!userDoc) {
      return res.status(404).json({ message: "User not found" })
    }
    //  compare old password
    const isMatch = await bcrypt.compare(oldpassword, userDoc.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid old password" })
    }
    //  hash new password
    const hashedPassword = await bcrypt.hash(newpassword, 12)
    //  update password
    userDoc.password = hashedPassword
    await userDoc.save()
    //  response
    res.status(200).json({ message: "Password changed successfully" })
})
