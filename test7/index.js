// SWITCH STATEMENTS | WHILE... DO-WHILE LOOPS

// 25 26

// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// var age = 19;
// switch (age > 18) {
//   case true:
//     console.log("Old enough");
//     break;
//   case false:
//     console.log("Too young");
//     break;
// }

// 2. Write a program to check whether the given input number is
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

// 3. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// var promp1=+prompt("first number")
// var promp3=prompt("operator (+, -, *, /, %)")
// var promp2=+prompt("second number")
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

// 4. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// Use the weekday number to calculate weekday name.

// var date = new Date().getDay();
// console.log(date);
// switch (date) {
//   case 0:
//     alert("Sunday");
//     break;
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Tuesday");
//     break;
//   case 3:
//     alert("Wednesday");
//     break;
//   case 4:
//     alert("Thursday");
//     break;
//   case 5:
//     alert("Friday");
//     break;
//   case 6:
//     alert("Saturday");
//     break;
// }

// 5. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// If today is neither Saturday (6) nor Sunday (0), write a default
// message:

// var date = new Date().getDay();
// switch (date) {
//   case 0:
//     alert("Holiday");
//     break;
//   case 6:
//     alert("Weekend");
//     break;
//   default:
//     alert("Working day");
// }

// 6.Given the following script
// Finish the switch statement. Add the following
// cases: BMW, Ford and Peugeot.
// Set the value of the variable text to: "German car" for BMW.
// "American car" for Ford. "French car" for Peugeot.
// Also add a default case where the text value is "Unknown car
// name".

// function checkCar() {
//   var text;
//   var favCar = prompt("What is your favorite car?").toLowerCase();

//   switch (favCar) {
//     case "bmw":
//         text="German car"
//       break;
//     case "ford":
//         text="American car"
//     break;
//     case "peugeot":
//         text="French car"
//       break;
//       default:
//         text="Unknown car name"
//         }
//   document.write(text);
// }
// checkCar();

// 7. Fix the following switch statement:

// function checkFruit() {
//   var text;
//   var fruits = prompt("Enter a fruit name").toLowerCase();
//   switch (fruits) {
//     case "banana":
//       text = "Banana is good!";
//       break;
//     case "orange":
//       text = "I am not a fan of orange.";
//       break;
//     case "apple":
//       text = "How you like them apples?";
//       break;
//     default:
//       text = "I have never heard of that fruit.";
//   }
//   document.write(text);
// }
// checkFruit();

// 8. Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]

// var input = prompt("Enter garde (A+,A,B,C)").toLowerCase();
// switch (input) {
//   case "a+":
//     alert("marks : 96");
//     break;
//   case "a":
//     alert("marks : 78");
//     break;
//   case "b":
//     alert("marks : 63");
//     break;
//     case "c":
//         alert("marks : 54");
//         break;
//   default:
//     alert("Enter your grade");
// }

// 9. Use a switch statement to rewrite the following JavaScript
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
//     default:
//         alert("Enter a month");
// }

// 10. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// var age=16
// var ability;
// (age < 18) ?  ability="Too young" : ability="Old enough";
// console.log(ability);

// 11. Write a program to display the message “Hello World” 5
// times in your browser.

// var i = 0
// while (i<5) {
//     alert("Hello World")
//     i++;
// }

// 12. Write a program to print numeric counting from 1 to 10.

// var i=1
// while (i<=10) {
//     console.log(i)
//     i++;
// }

// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user.

// var table=prompt("Enetr a number to print its multiplication table ")
// var counting=prompt("Enter length of multiplication table")
// var i=1
// while (i<=counting) {
//     document.write(`${table} * ${i} = ${table*i} <br/>`)
// i++;
// }

// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.

// var A = ["Nokia", "Samsung", "Apple", "Sony","Huawei"]
// var i=0;
// while (i<A.length) {
//     document.write(`${A[i]} <br/>`)
// i++;
// }

// 15. Write a program to print items of the following array:

// fruits = ["apple","banana", "mango", "orange", "strawberry"]
// var i=0;
// while (i<fruits.length) {
//     document.write(`${fruits[i]} <br/>`)
//     document.write(`Element at index ${i} is ${fruits[i]} <br/>`)
// i++;
// }

// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// var no_ofItems = prompt("Enter number of items");
// var i = 1;
// document.write(`Number iof items:${no_ofItems} <br/> Items:<br/> <br/>`)
// while (i <= no_ofItems) {
//     var Items = prompt(`item ${i}`);
//   var emptyArray=[]
//   emptyArray.push(Items)
//   document.write(`${emptyArray} <br/>`)
//   i++;
// }

// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a)
// var i=1
// while (i<=15) {
//     document.write(i +",")
//     i++
// }

// b)
// var i=10
// while (i>0) {
//     document.write(i +",")
//     i--;
// }

// c)
// var i=0
// while (i<=20) {
//     document.write(i +",")
//     i+=2
// }

// // d)
// var i=1
// while (i<=20) {
//     document.write(i +",")
//     i+=2
// }

// // e)
// var i=0
// while (i<=20) {
//     document.write(i +"k,")
//     i+=2
// }

// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var input=prompt("Welcome to ABC Bakery.what do you want to order sir/ma'am?").toLowerCase();
// var  A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var i=0
// var flag=false;
// while (i<A.length) {
// if (input==A[i]) {
//     document.write(`${A[i]} is available at index ${[i]} in our bakery`)
//     flag=true
// }
//     i++
// }
// if (!flag) {
//     document.write(`${input} is not available in our bakery`)
// }

// 19. You have given the following arrays:
// Write a program to generate the following HTML table in your

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var i=0
// document.write("<table border='1' <br>")
// document.write(`<th>Students </th>`)
// document.write(`<th>Score </th>`)

// while (i<students.length) {
//     document.write(`<tr> <td> ${students[i]}</td> <td>${scores[i]}</td> </tr>`);
//     i++
// }
// document.write("</table>")

// 20. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// var input=prompt("Enter a score (12, 45, 3, 22, 34, 50)");
// var scores = [12, 45, 3, 22, 34, 50];
// var i=0
// while (i<scores.length) {
// if (input==scores[i]) {
//     var copy=scores.slice(0,i+1)
//     alert(copy)
// }
//     i++
// };

// 21. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested loops.

// var A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var i = 0;
// while (i < A.length) {
//   var j = 0;
//   while (j < A[i].length) {
//     document.write(A[i][j] + " ");
//     j++;
//   }
//   document.write("<br/>");
//   i++;
// }

// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

// var num=prompt("Enter a number")
//     var i=num;
//     while (i>=0) {
//         document.write(`${i}<br/>`)
//         i-=0.5;
//     };

// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").

// var i = 0;
// while (i <= 20) {
//   if (i % 2 == 0) {
//     document.write(i + " is even");
//   } else if (i % 2 !== 0) {
//     document.write(i + " is odd");
//   }
//   document.write("<br/>");
//   i++;
// }

// 24. Write a program to calculate the product of the odd integers
// from 1 to 7.

// var i=0
// var ans=1
// while (i<=7) {
//     if (i%2!==0) {
// ans*=i
// }
// i++
// }
// console.log(ans);

// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7

// *******
// ******
// *****
// ****
// ***
// **
// *

var i = 0;
var n = "*";
while (i <= 7) {
  document.write(n);
  i++;
};

// 26. Write a program to create the following patterns in your
// browser. Take number of lines as an input.

// a.
// *****
// *****
// *****
// *****

// b.
// ***
// ***
// ****
// *****

// c.
// *****
// ****
// ***
// **
// *
