import exp from 'express'
//create server
const app=exp() //in general app is the common variable used it is not a standard one
//assign port number
app.listen(2000,()=>console.log("HTTP Server listening on port 2000..."))

//body parsing middleware
app.use(exp.json());

//create API    
let products=[];
    app.get('/products',(req,res)=>{
        //send response to client
        res.status(200).json({message:"All products",payload:products})
    })


    //post req handlling route
    app.post('/products',(req,res)=>{
        //send response
        let newProduct=req.body
        products.push(newProduct)
        res.status(201).json({message:"Products ",payload:products})
    })

    //put req handling route
    app.put('/products',(req,res)=>{
        
    })
