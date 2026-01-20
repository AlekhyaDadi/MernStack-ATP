const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// Tasks:
// Use filter() to get only inStock products
let r1=cart.filter(cartobj=>cartobj.inStock==true)
console.log(r1)
// Use map() to create a new array with:  { name, totalPrice }
let r2 = cart.map(cartobj => {
    return {
        name: cartobj.name,
        totalPrice: cartobj.price * cartobj.quantity
    };
});
console.log(r2);
// Use reduce() to calculate grand total cart value
let r3=cart.reduce((a,b)=>a+b.price,0)
console.log(r3)
// Use find() to get details of "Mouse"
let r4=cart.find(cartobj=>cartobj.name=="Mouse")
console.log(r4)
// Use findIndex() to find the position of "Keyboard"
let r5=cart.findIndex(cartobj=>cartobj.name=="Keyboard")
console.log(r5)