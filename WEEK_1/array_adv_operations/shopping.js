const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter to get only inStock products
let r1=cart.filter(cobj=>cobj.inStock=true)
console.log(r1)

//map to create array with name and total price
let r2=cart.map(cobj=>{
    let a=[cobj.name,cobj.price*cobj.quantity]
    return a
})
console.log(r2)

//reduce to calculate total
let r3=cart.reduce((sum,cobj)=>sum+cobj.price,0)
console.log(r3)

//find Mouse
let r4=cart.find(cobj=>cobj.name=="Mouse")
console.log(r4)

//findIndex of keyboard
let r5=cart.findIndex(cobj=>cobj.name=="Keyboard")
console.log(r5)