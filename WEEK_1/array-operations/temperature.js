let temp=[32,35,28,40,38,30,42]
let r1=temp.filter(function(ele){
    return ele>35
})
console.log(r1)

//reduce
let r2=temp.reduce((accumulator,element)=>accumulator+element)
console.log(r2/temp.length)

//find
let r3=temp.find(elem=>elem>40)
console.log(r3)

//findIndex
let r4=temp.findIndex(elem=>elem==28)
console.log(r4)

//map
let r5=temp.map(ele=>(ele*9/5)+32)
console.log(r5)