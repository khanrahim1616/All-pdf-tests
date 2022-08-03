// USER INPUT & CONDITIONAL STATEMENTS

// 1. Write a program that takes input a name from user & greet the
// user like this:
// var promp=prompt("Please enter your name")
// if (!isNaN(promp) || promp==="") {
//     alert("Please type alphabet")
// }else{
//     alert("Hi " + promp)
// }

// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.
// var promp = prompt("Please type a number", 5);
// if (isNaN(promp)) {
//     alert("Please type a number")
// }else if (promp==="") {
//     alert("plz enter something")
// }
// for (let i = 1; i <= 10; i++) {
//   document.write(`${promp}  *  ${i}  =  ${promp * i} <br/>`);
// };

// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”
// var promp = prompt("Enter your city name");
// promp=promp.toLowerCase();
// if (promp==="karachi") {
//     alert("Welcome to city of lights")
// }else if (!isNaN(promp) || promp==="") {
//     alert("plz enter alphabet")
// }else {
//     alert("Its not your city")
// }

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.
    // var promp = prompt("Enter your gender");
    // promp=promp.toLowerCase();
    // if (promp==="male") {
    //     alert("Good Morning Sir.")
    // }else if(promp==="female"){
    //     alert("Good Morning Ma,am.")
    // }else if (!isNaN(promp) || promp==="") {
    //     alert("please enter your gender")
    // }else{
    //     alert("your gender is not in our list")
    // }

//5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

// var promp = prompt("Enter color of road traffic signal");
// promp = promp.toLowerCase()
// if (!isNaN(promp) ||  promp==="") {
//         alert("please enter color of signals")
// }else if (promp==="red") {
//     alert("vehicles must stop")
// }else if (promp==="yellow" ) {
//     alert("vehicles should get ready to move")
// }else if (promp==="green") {
//     alert("vehicles can move now")
// }else{
//     alert("You can only enter signal colours")
// }

// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show
// the message “You are welcome”

// var promp1 = prompt("Enter max age");
// var promp = prompt("Enter your age");
// if (promp==="") {
//         alert("please enter age")
// }else if(isNaN(promp) || isNaN(promp1)){
//     alert("please enter a number")
// }else if (promp<=promp1) {
//     alert("You are welcome")
// }else{
//     alert("You are not able to come")
// };

// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”
// var promp = +prompt("Enter a fuel in your car");
// if (isNaN(promp) || promp=="") {
//     alert("Please enter a number")
// }else if(isNaN(promp)){
//     alert("please enter a number")
// }else if (promp<0.25) {
//     alert("Please refill the fuel in your car")
// }else{
//     alert("FUEL is enough in your car")
// };

// 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:

// var promp1 = +prompt("Enter first subject marks");
// var promp2 = +prompt("Enter second subject marks");
// var promp3 = +prompt("Enter third subject marks");
// if (promp1 == "") {
//   alert("plz enter marks");
// }
// var marksobtained = promp1 + promp2 + promp3;
// var totalmarks = 300;
// var result = marksobtained * 100 / totalmarks;
// if (isNaN(promp1) || isNaN(promp2) || isNaN(promp3)) {// promp = promp.toLowerCase()

//   alert("its not a number plz enter a number")
// }
// else if (result >= 80) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:A-one; <br/> Remarks:Excellent`
//   );
// }else if (result >= 70) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:A; <br/> Remarks:Good`
//   );
// }else if (result >= 60) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:B; <br/> Remarks:You need to improve`
//   );
// }else if (result < 60) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:Fail; <br/> Remarks:SORRY`
//   );
// };


// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.

// var item1 = prompt("item1");
// var item2 = prompt("item2");
// var Priceofitem1 = +prompt("Price of item1");
// var Priceofitem2 = +prompt("Price of item2");
// var Orderedquantityofitem1 = +prompt("Ordered quantity of item1");
// var OrderedQuantityofitem2 = +prompt("Ordered Quantity of item2");
// var Shippingcharges = +prompt("Shippingcharges");
// var totalcost =
//   Priceofitem1 * Orderedquantityofitem1 +
//   Priceofitem2 * OrderedQuantityofitem2 +
//   Shippingcharges;
// var discount=totalcost*0.9;
// if (totalcost > 2000) {
//   document.write(
//     `Price of ${item1} is ${Priceofitem1} <br/> Quantity of ${item1} is ${Orderedquantityofitem1} <br/> Price of ${item2} is ${Priceofitem2} <br/> Quantity of ${item2} is ${OrderedQuantityofitem2} <br/> Shipping charge ${Shippingcharges} <br/> Total cost of your order is ${totalcost} PKR <br/> Discounted price is ${discount} PKR `
//   );
// }else{
//     document.write(
//         `Price of ${item1} is ${Priceofitem1} <br/> Quantity of ${item1} is ${Orderedquantityofitem1} <br/> Price of ${item2} is ${Priceofitem2} <br/> Quantity of ${item2} is ${OrderedQuantityofitem2} <br/> Shipping charge ${Shippingcharges} <br/> Total cost of your order is ${totalcost} PKR `
//       );    
// }



// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// SAMAJH NAHI AYA
// b. If the guessed number +-1 is the secret number, show
// “Close enough to the correct answer”.

// var random = Math.ceil(Math.random() * 10);
// while (promp !== random) {
//     var promp =  +prompt("Enter a number  between 1 to 10");
//   if (promp > 10 || promp < 1) {
//     alert("enter a number between 1 and 10");
//   } else if (promp > random) {
//     alert("its greater than our random number");
//   } else if (promp < random) {
//     alert("its less than  our random number");
//   } else if (isNaN(promp)) {
//     alert("Not a number");
//   } else {
//     alert("Bingo! Correct answer");
//   }
// }


// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.
// var promp = +prompt("Enter a number to check that number is divisible by 3");
// if (isNaN(promp) || promp=="") {
//   alert("Plz enter a number");
// } else if (promp % 3 == 0) {
//   alert("Number is  divisible by 3");
// }  else {
//   alert("Number is not divisible by 3");
// };


// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)
// var team1=prompt("name of  Team one");
// var score1=prompt("score of  Team one")
// var team2=prompt("name of  Team two");
// var score2=prompt("score of  Team two")
// if (team1=="" || score1=="" || team2=="" || score2=="") {
//   alert("plz type something")
// }else if (score1===score2) {
//   alert(`its a tie between team ${team1} and ${team2}`)
// }else if(score1>score2){
//   alert(`team ${team1} won the game`)
// }else if(score2>score1){
//   alert(`team ${team2 } won the game`)
// }


// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

// var str="pakistan";
// alert(`${str} is ${typeof str}` )

// var num=22;
// alert(`${num} is ${typeof num}` )

// var boolean=true;
// alert(`${boolean} is ${typeof boolean}` )


// 15. Write a program that checks whether the given input is an
// even number or an odd number.
// var promp=prompt("the given number is an even number or an odd number");
// if (isNaN(promp) || promp=="") {
//   alert("plz enter a number")
// }else if (promp%2===0) {
//   alert(`${promp} is a even number`)
// } else{
//   alert(`${promp} is not a even number`)
// }

// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var promp=prompt("enter a temprature greater than 10 to check weather");
// if (isNaN(promp) || promp=="") {
//   alert("plz enter a number")
// }else if (promp>40) {
//   alert("It is too hot outside")
// }else if (promp>30) {
//   alert("The Weather today is Normal")
// }else if (promp>20) {
//   alert("Today’s Weather is cool")
// }else if (promp>10) {
//   alert("OMG! Today’s weather is so Cool")
// };


// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var promp1=+prompt("first number")
// var promp2=+prompt("second number")
// var promp3=prompt("operator (+, -, *, /, %)")
// var  mult= promp1*promp2;
// var  plus= promp1+promp2;
// var  divide= promp1/promp2;
// var  reminder= promp1%promp2;
// var  minus= promp1-promp2;
// if (isNaN(promp1) || isNaN(promp1) ) {
// alert("plz enter a number")
// }
// if (promp3==="*") {
//   alert(`${promp1} * ${promp2} is ${mult}`)
// }else if (promp3==="+") {
//   alert(`${promp1} + ${promp2} is ${plus}`)
// }else if (promp3==="/") {
//   alert(`${promp1} / ${promp2} is ${divide}`)
// }else if (promp3==="%") {
//   alert(`${promp1} % ${promp2} is ${reminder}`)
// }else if (promp3==="-") {
//   alert(`${promp1} - ${promp2} is ${minus}`)
// }



// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// var promp=prompt("day name (enter full name) ")
// promp=promp.toLowerCase()
// if (promp=="" || !isNaN(promp)) {
//     alert("plz enter a day")
// }else if (promp==="monday" || promp==="tuesday" || promp==="wednesday" || promp==="thursday" || promp==="friday"
// ) {
//   alert("It’s a week day")
// }else if(promp==="saturday"){
//   alert("It’s weekend")
// }else if(promp==="sunday"){
//   alert("Yay! It’s a holiday")
// };


// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

// var promp=prompt("Enter a score ")
// if (promp=="" || isNaN(promp)) {
//         alert("plz enter a score")
// }else if(promp>50){
//     alert("You are passed")
// }else if(promp<=50){
//     alert("Try again!")}


// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").

// var promp1=prompt(" Enter first number  ")
// var promp2=prompt(" Enter second number ")
// if (promp1=="" || isNaN(promp1) || promp2=="" ||  isNaN(promp2)) {
//         alert("plz enter a number")
// }else if (promp1>=promp2) {
//     alert(`${promp1} and ${promp2} is ${promp1}   `)
// }else if (promp2>=promp1) {
//     alert(`${promp1} and ${promp2} is ${promp2}   `)
// };


// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)
// Show the result to make sure it works.

// var promp = prompt("enter a language (e.g. 'es', 'de', 'en')","en");
// if (!isNaN(promp) || promp=="") {
//   alert("enter a language (e.g. 'es', 'de', 'en')");
// } else if (promp === "en") {
//     alert("Hello, World")
// }else if (promp === "es") {
//     alert("Hola Mundo")
// }else if (promp === "de") {
//     alert("Hallo Wereld")
// }else{
//   alert("enter a language (e.g. 'es', 'de', 'en')");
// }


// 22. Write a program to take input a number & tell whether it’s a
// // positive or negative number.
// var promp = prompt(" Enter a number");
// if (isNaN(promp) || promp=="") {
//   alert("Plz enter a number");
// }else if (promp<0) {
//     alert(`${promp} is a negative number`)
// }else if (promp>0) {
//     alert(`${promp} is a positive number`)
// }


// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".Run the program for a few different inputs and show the result
// to make sure it works.
// var promp1=prompt('Enter a number');
// if (isNaN(promp1) || promp1=="") {
//     alert('Enter a number')
// }
// var promp2=prompt('Enter a noun');
// if (!isNaN(promp2) || promp2=="") {
//     alert('Enter a noun')
// }
// alert(`${promp1} ${promp2}`);
