
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// Tasks:
//     1. filter() temperatures above 35
let r1=temperatures.filter(element=>element>35)
console.log(r1)
//      2. map() to convert all temperatures from Celsius → Fahrenheit
let r2=temperatures.map(element=>(element*9/5)+32)
console.log(r2)
//     3. reduce() to calculate average temperature
let r3=temperatures.reduce((acc,ele)=>acc+ele,0)/temperatures.length
console.log(r3)
//     4. find() first temperature above 40
let r4=temperatures.find(element=>element>40)
console.log(r4)
//     5. findIndex() of temperature 28
let r5=temperatures.findIndex(element=>element==28)
console.log(r5)