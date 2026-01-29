/* 
Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/           

let order = {
                orderId: "ORD1001",
                customer: {
                    name: "Anita",
                    address: {
                        city: "Hyderabad",
                        pincode: 500085
                    }
                },
                items: [
                    { product: "Laptop", price: 70000 }
                ]
            };
// Create a deep copy of order
let copyOrder=structuredClone(order) 
//Modifing customer.address.city in copied object 
copyOrder.customer.address.city="Bangalore"  
//Modifing items[0].price in copied object  
copyOrder.items[0].price=90000

console.log(order)
console.log(copyOrder)
//Original object remains unchanged