// remaining  8 
// IF...ELSE & ELSE IF STATEMENTS | TESTING SET OF CONDITIONS |
// | SWITCH STATEMENTS |

// 1.Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
// var input = prompt("check number is divisibe by 3 ");
// if (input % 3 == 0) {
//   document.write(`${input} is  divisible by 3`);
// } else {
//   document.write(`${input} is not divisible by 3`);
// };

//  2. Write a program that checks whether the given input is an even
//  number or an odd number.
//  var input = prompt("write a Number you will get a answer that number is even or odd");
//  if (input % 2 == 0) {
//  document.write(`${input}  is a even number`);
//  } else {
//  document.write(`${input}  is a odd number`);
//  }

// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
// var age=19
// if (age>18) {
//     console.log("Old enough");
// }else{
//     console.log("Too young");
// }

// 4. Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.
// var myName="rahim";
// var input=prompt(" Enter name ").toLowerCase();
// if (input===myName) {
//     alert("Hello " + input)
// }else(
//     alert("its not matchingh with my name")
// );

// 5. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.
// var number = +prompt("check number is divisible by 3 or not");
// switch (number % 3 === 0) {
//   case true:
//     alert(`${number} is divisible by 3`);
//     break;
//   case false:
//     alert(`${number} is not divisible by 3`);
//     break;
// }

// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)


// var uppercase="ABC"
// var flag=false;
// for (let i = 0; i < uppercase.length; i++) {
// if (uppercase.charCodeAt(i)>65 && uppercase.charCodeAt(i)<90) {
//  console.log("upperCase true");   
//  flag=true;
//  break;
// }
// }
// if (flag==false) {
//     console.log("upperCase false");       
// }

// var lowercase="abc"
// var flag=false;
// for (let i = 0; i < lowercase.length; i++) {
// if (lowercase.charCodeAt(i)>97 && lowercase.charCodeAt(i)<122) {
//  console.log("lowercase true");   
//  flag=true;
//  break;
// }
// }
// if (flag==false) {
//     console.log("lowercase false");       
// };

// var number="123"
// var flag=false;
// for (let i = 0; i < number.length; i++) {
// if (number.charCodeAt(i)>48 && number.charCodeAt(i)<57) {
//  console.log("number true");   
//  flag=true;
//  break;
// }
// }
// if (flag==false) {
//     console.log("number false");       
// };


// username.charCodeAt(i)>48 && username.charCodeAt(i)<57 ||  || username.charCodeAt(i)>97 && username.charCodeAt(i)<122



// 7. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// var promp1=+prompt("first number")
// var promp2=+prompt("second number")
// var promp3=prompt("operator (+, -, *, /, %)")
// if (isNaN(promp1) || isNaN(promp1) ) {
// alert("plz enter a number")
// }
// switch (promp3) {
//     case "+":
//   alert(`${promp1} ${promp3} ${promp2} = ${promp1+promp2}`)
//         break;
//         case "-":
//             alert(`${promp1} ${promp3} ${promp2} = ${promp1-promp2}`)
//         break;
//         case "*":
//             alert(`${promp1} ${promp3} ${promp2} = ${promp1*promp2}`)
//         break;
//         case "%":
//             alert(`${promp1} ${promp3} ${promp2} = ${promp1%promp2}`)
//         break;
//         case "/":
//             alert(`${promp1} ${promp3} ${promp2} = ${promp1/promp2}`)
//         break;
//     };

// 8. Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

// 9. Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.
// var leapyear=prompt("Enter a year check leap yaer ")
// if (leapyear=="" || isNaN(leapyear)) {
//     alert("plz enter a number")
//     } else if (leapyear%4===0) {
//     alert(leapyear + "  is a leap year");
// }else{
//     alert(leapyear + "  is not a leap year");
// }

// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

// var pwd=12345;
// var pwdbyUser=prompt("Enter a password");
// if (pwdbyUser=="") {
//     alert("Please enter your password")
// }else if(pwdbyUser==pwd){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect password")
// };

//  11. Write a program that adds an else statement to the following
//  script to display “You are not Fahad”
//  var firstName = "ali";
//  if (firstName === "Fahad") {
//  console.log("Hello Fahad");
//  } else {
//  console.log("You are not Fahad");
//  }

// 12. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// // ANSWER
// var hour = 18;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// };

// 13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var promp1=prompt(" Enter first number  ")
// var promp2=prompt(" Enter second number ")
// if (promp1=="" || isNaN(promp1) || promp2=="" ||  isNaN(promp2)) {
//         alert("plz enter a number")
// }else if (promp1>promp2) {
//     alert(`${promp1} and ${promp2} greater is ${promp1}   `)
// }else if (promp2>promp1) {
//     alert(`${promp1} and ${promp2} gretaer is ${promp2}   `)
// }else if(promp1==promp2){
//     alert(`${promp1} and ${promp2} are equal `)
// };

// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.
// var promp=prompt(" Enter first number  ")
// if (promp=="" || isNaN(promp)) {
//         alert("plz enter a number")
// }else if (promp==0) {
//     alert(promp)
// }else if(promp>0){
//     alert(promp + " is a positive number")
// }else if(promp<0){
//     alert(promp + " is a negative number")
// }

// 15. Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)

// var currentHour=prompt('Enter hour')
// var Breakfast=["6am","7am","8am","9am"]
// var lunch=["11am","12am","1pm"]
// var dinner=["5pm","6pm","7pm","8pm"]
// if (Breakfast.includes(currentHour)) {
//     alert("Breakfast is served")
// }else if (lunch.includes(currentHour)) {
//     alert("Time for lunch.")
// }else if (dinner.includes(currentHour)) {
//     alert("It's dinner time.")
// }else{
//     alert("Sorry, you'll have to wait, or go get a snack.")
// }

// 16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”
// var number=123;
// console.log(typeof number);

// var str="hello";
// console.log(typeof str);

// var boolean=true;
// console.log(typeof boolean);

// var undefined =
// console.log(typeof undefined);

// 17. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.

// var checkvowels = "andei".toLowerCase();
// var vowels = ["a", "e", "i", "o", "u"];
//  if (
//     vowels.includes(checkvowels.charAt(0))
// ) {
//   console.log("true");
// } else console.log("false");

// 18. Choose the correct comparison operator to display "true",
// when:
// 10 is NOT equal to 8.

// var input1=prompt("enter a number")
// var input2=prompt("enter a number")
// if (input1!==input2){
//     alert("Not equal true")
// }else if (input1 == input2) {
//     alert("Equal")
// };

// 19. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

// var month = prompt("enter a number you will  get month");
// switch (month) {
//   case "1":
//     alert("january");
//     break;
//   case "2":
//     alert("february");
//     break;
//   case "3":
//     alert("march");
//     break;
//   case "4":
//     alert("aprail");
//     break;
//   case "5":
//     alert("may");
//     break;
//   case "6":
//     alert("june");
//     break;
//   case "7":
//     alert("july");
//     break;
//   case "8":
//     alert("august");
//     break;
//   case "9":
//     alert("september");
//     break;
//   case "10":
//     alert("october");
//     break;
//   case "11":
//     alert("november");
//     break;
//   case "12":
//     alert("december");
//     break;
// }

//     20. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".
// var age=17
// var ability;
// (age < 18) ?  ability="Too young" : ability="Old enough";
// console.log(ability);