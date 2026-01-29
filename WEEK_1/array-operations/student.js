// Assignment 3: Student Marks List
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

let mark=[78,92,35,88,40,67]

//filter
let r1=mark.filter(function(ele){
    return ele>=40
})
console.log(r1)

//map
let r2=mark.map(function(ele){
    return ele+5
})
console.log(r2)

//reduce
let r3=mark.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(r3)

//find
let r4=mark.find(ele=>ele<40)
console.log(r4)

//findIndex
let r5=mark.findIndex(ele=>ele==92)
console.log(r5)