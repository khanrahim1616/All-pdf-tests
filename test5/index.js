// remaining 9,19,20

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var promp = +prompt("Enter a number(decimal-value) ");
// alert(
//   `Number ${promp}
//   roud off value ${Math.round(promp)}
//   floor value ${Math.floor(promp)}
//   ceil value ${Math.ceil(promp)}
//   `
// );

// 2. Write a program that takes a negative integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var promp = +prompt("Enter a number(decimal-value) ");
// alert(
//   `Number ${promp}
//   roud off value ${Math.round(promp)}
//   floor value ${Math.floor(promp)}
//   ceil value ${Math.ceil(promp)}
//   `
// );

// 3. Write a program that takes a positive floating point number
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var promp = +prompt("Enter a number(decimal-value) ");
// alert(
//   `Number ${promp}
//   roud off value ${Math.round(promp)}
//   floor value ${Math.floor(promp)}
//   ceil value ${Math.ceil(promp)}
//   `
// );

// 4. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var promp = +prompt("Enter a number(decimal-value) ");
// alert(
//   `Number ${promp}
//   roud off value ${Math.round(promp)}
//   floor value ${Math.floor(promp)}
//   ceil value ${Math.ceil(promp)}
//   `
// );

// 5. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number=prompt("Enter a negative number (absolute answer)");
// if (isNaN(number)) {
// alert("plz enter a valid number")
// }else(
//     alert(Math.abs(number))
// );

// 6. Write a program that simulates a dice using random() method
// of JS Math class. Display the value of dice in your browser.

// document.write(`Random dice value : ${Math.ceil(Math.random()*6)}`)

// 7. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.

// var random =Math.ceil(Math.random()*2)
// if (random===2) {
//     document.write( random +" Random coin value: Heads" );
// }else if (random===1) {
//     document.write( random + " Random coin value: Tails" );
// }

// 8. Write a program that shows a random number between 1 and
// 100 in your browser.

// document.write( "Random muber between 1 and 100: " + Math.ceil(Math.random()*100));

// 9. Write a program that asks the user about his weight. Parse the
// user input and display his weight in your browser. Possible user
// inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// 10. Write a program that stores a random secret number from 1
// to 10 in a variable. Ask the user to input a number between 1
// and 10. If the user input equals the secret number, congratulate
// the user.

// var promp=+prompt("Enter a number (1 to 10)")
// var random = Math.ceil(Math.random()*10)
// if (promp===random) {
//     alert("congratulation you won the game")
// }else(
//     alert("Try again")
// );

// 11. Write a program that displays current date and time in your
// browser.

// document.write(new Date());

// 12. Write a program that alerts the current month in words. For
// example December.

// var months=["January","February","March","Aprail","May","June","July","August","September","October","November","December"]
// var currMOnth=new Date().getMonth();
// document.write(`Current month: ${months[currMOnth]}`)

// 13. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var day =new Date().getDay()
// var daysArray=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write("Today is : "+ daysArray[day]);

// 14. Write a program that displays a message “It’s Fun day” if its
// Saturday or Sunday today.

// var day =new Date().getDay()
// var daysArray=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// if (daysArray[day]==="saturday" || daysArray[day]==="sunday") {
//     document.write("It’s Fun day ;")
// }else{
//     document.write("Boring working day ;")
// }

// 15. Write a program that shows the message “First fifteen days of the
// month” if the date is less than 16th of the month else shows “Last
// days of the month”.

// var date=new Date().getDate()
// if (date < 16) {
//     alert("First fifteen days of the month")
// }else if(date > 15){
//     alert("Last days of the month")
// }

// 16. Write a program that determines the minutes since midnight, Jan.
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object.

// setup in 1 document.write()
// document.write(
//     `Current Date: ${new Date()} <br/> Elapsed millisecond since january 1,1970: ${Date.now()} <br/> Elapsed minutes since january 1,1970: ${
//       Date.now() / 60000
//     }`
//   )
// document.write(`Current Date: ${new Date()} <br/>`)
// document.write(`Elapsed millisecond since january 1,1970: ${Date.now()} <br/>`)
// document.write(`Elapsed minutes since january 1,1970: ${Date.now()/60000} <br/>`)

// 17. Write a program that tests whether it's before noon and alert “Its
// AM” else “its PM”.

// var time= new Date().getHours()
// console.log(time);
// if (time>12) {
//     document.write(`Its: PM`);
// }else if (time<12) {
//     document.write(`Its: PM`);
// };

// 18. Write a program that creates a Date object for the last day of the
// last month of 2020 and assigns it to variable named laterDate

// var laterdate= new Date();
// laterdate.setMonth(11)
// laterdate.setFullYear(2020)
// laterdate.setDate(31)
// laterdate.setHours(0)
// laterdate.setMinutes(0)
// laterdate.setSeconds(0)
// document.write(laterdate);

// 19.Create a date object of the starting date of this Ramadan and alert
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var Ramzan= new Date();
// Ramzan.setMonth(3)
// Ramzan.setFullYear(2022)
// Ramzan.setDate(2)
// Ramzan.setHours(0)
// Ramzan.setMinutes(0)
// Ramzan.setSeconds(0)
// document.write(Ramzan + "<br/>");
// var ramzan1=Ramzan.getDate()

// var currentDate=new Date()
// var newdays=currentDate.getDate()

// var minus=newdays-ramzan1
// document.write(minus);

// 20. Write a program that displays in your browser the seconds that
// elapsed between the reference date and the beginning of 2015.

// var date=new Date().getMilliseconds()
// console.log(date);


// 21. Create a Date object for the current date and time. Extract the
// hours, reset the date object an hour ahead and finally display the
// date object in your browser.

// var currentDate=new Date()
// document.write(`Current date: <br/>${currentDate} <br/>`)
// currentDate.setHours(currentDate.getHours()-1)
// document.write("1 hour ago it was: <br/> " + currentDate)

// 22. Write a program that creates a date object and show the date
// in an alert box that is reset to 100 years back?

// var currentDate=new Date()
// document.write(`Current date: <br/> ${currentDate} <br/>`)
// currentDate.setFullYear(currentDate.getFullYear()-100)
// document.write(`100 years back it was: <br/> ${currentDate} <br/>`)

// 23. Write a program to ask the user about his age. Calculate and
// show his birth year in your browser.

// var ageInput = +prompt("Enter your age you will get birth year");
// var birthYear = new Date().getFullYear() - ageInput;
// if (ageInput=="" || isNaN(ageInput)) {
//     alert("plz enter a number")
// }
// document.write(`Your age is: ${ageInput} <br/> Your birth year is: ${birthYear}`);

// 24. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal
// places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var months=["january","february","march","aprail","may","june","july","august","september","october","november","december"]
// var currMOnth=new Date().getMonth();
// var cNAME=prompt("Customer name")
// var units=prompt("Number of units")
// var Charges=14;
// var netAmount=units*Charges
// var latePayment=500
// var grossAmount=netAmount+latePayment
// document.write(`K-Electric Bill <br/> <br/> Customer name: ${cNAME} <br/> Month: ${months[currMOnth]} <br/> Number of units: ${units} <br/> Charges per unit: ${Charges} <br/> <br/> Net amount payable (within due date): ${netAmount} <br/> Late payment surcharge: ${latePayment} <br/> Gross amount payable (after due date): ${grossAmount}`)

// var promp=prompt("Enter your city").trim().toLowerCase();
// if (promp==="karachi") {
//     alert("city of lights")
// }
