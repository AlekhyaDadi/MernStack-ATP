/* 
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/ 

// checking if enrollement is open or closed
let enrollmentDeadline = new Date("2026-01-20");
today_date=new Date()
if(today_date>enrollmentDeadline){
    console.log("Enrollment Closed")
}
else{
     console.log("Enrollment Open")
}

//validating the input date
let input="2026-02-30"
let d1=new Date(input)
console.log(d1)
if (isNaN(d1.getTime()))//return NAN for invalid dates 
{
    console.log("Invalid date")
}
else{
    console.log("valid date ")
}


