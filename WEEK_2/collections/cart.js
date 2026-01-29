const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];


 //Calculate total cart value
 let total=cart.reduce((sum,cobj)=>sum+cobj.price,0)
 console.log(total)

 //Increase quantity of Mouse to 3 (immutably)
 let cc=cart.map(item=>item.product==="Mouse" ? {...item,qty:3} : item)
 console.log(cart)
 console.log(cc)

 //Remove Laptop from cart
 let c=cart.filter(item=>item.product!="Laptop")
console.log(c)

// Extract only { product, totalPrice } per item
let ec=cart.map(item=>({product:item.product,
    total:item.price*item.qty}))
console.log(ec)

//Check if all items cost more than ₹300
let ic=cart.every(item=>item.price>300)
console.log(ic)