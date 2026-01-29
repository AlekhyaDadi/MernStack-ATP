
let totalAmount = 0;
Tasks:
// Add ₹500 to the total
totalAmount = totalAmount + 500;
// Add ₹1200 to the total
totalAmount = totalAmount + 1200;
// Apply ₹200 discount
totalAmount = totalAmount - 200;
// Calculate 18% GST
let gst = totalAmount * 0.18;
// Add GST to total amount
totalAmount = totalAmount + gst;
// Print the final bill amount
console.log("Final Bill Amount: ₹" + totalAmount);