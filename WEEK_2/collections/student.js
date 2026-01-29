const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Kiran", marks: [60, 55, 70] },
  { name: "Meena", marks: [95, 92, 88] }
];


 //Calculate average marks per student
 let avg=students.map(s=>{
    let sa=s.marks.reduce((sum,sobj)=>sum+sobj,0)/s.marks.length
    return {name:s.name,average:sa}
 })
 console.log(avg)

 //Create a new array with { name, average }
 let arr=students.map(s=>({name:s.name,avg:s.marks.reduce((a,b)=>a+b,0)/s.marks.length})
 )
 console.log(arr)

 //Find students with average > 80
 let fa=avg.find(s=>s.average>80)
console.log(fa)

 //Check if any student failed (average < 40)
 let fail=avg.some(s=>s.average<40)
 console.log(fail)

 //Extract only student names who passed
 let pass=avg.filter(s=>s.average>40).map(s=>s.name)
 console.log(pass)