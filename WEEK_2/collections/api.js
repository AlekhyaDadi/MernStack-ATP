const apiResponse = {
  status: "success",
  data: [
    { id: 1, title: "JS Basics", price: 999, published: true },
    { id: 2, title: "React", price: 1499, published: false },
    { id: 3, title: "Node", price: 1299, published: true }
  ]
};

 // Extract only the data array (destructuring)
 let {data}=apiResponse
 console.log(data)

 //Get only published courses
 let pc=data.filter(course=>course.published===true)
 console.log(pc)

 //Sort courses by price (high → low)
 let sd=data.sort((a,b)=>b.price-a.price)
 console.log(sd)

 //Create a list of course titles
 let lot=data.map(names=>names.title)
 console.log(lot)

 //Calculate total price of published courses
 let total=data.reduce((sum,dobj)=>sum+dobj.price,0)
 console.log(total)