/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/                    
//Creating a Date object for current date & time.
d=new Date()
console.log(d)
console.log(d.toString())
//Extracting and displaying
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours(),d.getMinutes(),d.getSeconds())
//Displaying the date in this format: DD-MM-YYYY HH:mm:ss  
console.log(d.getDate(),'-',d.getMonth(),'-',d.getYear(),' ',d.getHours(),':',d.getMinutes(),':',d.getSeconds())

