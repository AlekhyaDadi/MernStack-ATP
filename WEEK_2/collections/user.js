let users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

//get active users
let activeUsers = users.filter(u => u.active === true);
console.log(activeUsers);

// Extract only names of active users
let activeUserNames = users.filter(u => u.active).map(u=>u.name);
console.log(activeUserNames);

// 3. Check if any admin exists
let hasAdmin = users.filter(u => u.role === "admin");
console.log(hasAdmin);

//Find user with id = 2
us=users.find(u=>u.id===2)
console.log(us)


//Create a new array where Ravi becomes inactive (do NOT mutate)
let usercopy = users.map(u =>
  u.id === 1 ? { ...u, active: false } : u
);
console.log(usercopy);