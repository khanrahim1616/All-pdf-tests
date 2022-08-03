// FUNCTIONS|
// 18 is not done yet  

// 1. Create a block of code that you can use several times.

// function sum(a,b=5) {
// var total=a+b
//     console.log(total);
// }
// sum(6);

// 2. Write a function that displays current date & time in your
// browser.

// var date=new Date()
// function datetime(a) {
// document.write(a)
// }
// datetime(date)

// 3. Write a function that takes first & last name and then it greets
// the user using his full name.

// var Fname=prompt("First name")
// var Lname=prompt("Last name")
// function names(a,b) {
//     alert(`Hello ${a} ${b}` )
// }
// names(Fname,Lname)

// 4. Write a function that adds two numbers (input by user) and
// returns the sum of two numbers.

// var firstNum=+prompt("firstNum")
// var secondNum=+prompt("secondNum")
// function sum(a,b) {
//     var plus=a+b
//     alert(`${a} + ${b} =  ${plus}`)
// };
// sum(firstNum,secondNum)

// 5. Calculator:
// Write a function that takes three arguments num1, num2 &
// operator & compute the desired operation. Return and show
// the desired result in your browser.

// var firstNum = +prompt("firstNum");
// var operator = prompt("operator");
// var secondNum = +prompt("secondNum");

// function Calculator(a, b, c) {
//   if (operator === "+") {
//     alert(`${a} ${b} ${c} = ${a + c}`);
//   } else if (b === "-") {
//     alert(`${a} ${b} ${c} = ${a - c}`);
//   } else if (b === "*") {
//     alert(`${a} ${b} ${c} = ${a * c}`);
//   } else if (b === "%") {
//     alert(`${a} ${b} ${c} = ${a % c}`);
//   } else if (b === "/") {
//     alert(`${a} ${b} ${c} = ${a / c}`);
//   }
// };
// Calculator(firstNum, operator,secondNum);

// 6. Write a function that squares its argument.

// function square(a=5) {
// console.log("Result squares a number "+Math.pow(a,2));
// };
// square(9);

// 7. Write a function that take start and end number as inputs &amp;
// display counting in your browser.

// var startNum=prompt("Start number")
// var endNum=prompt("End number")
// function counting(a,b) {
//     for (let index = a; index <= b; index++) {
//     document.write(index + "<br/>" );
// }
// };
// counting(startNum,endNum);

// 8. Write a function that writes variable length arguments list in
// your browser.

// function checkLength(a) {
//   console.log(`length of ${a} is ${a.length}`);
// }
// checkLength("Hello");

// 9. Write a function that accepts any number of arguments & find
// largest of the number.

// function maxNum(...number) {
//     console.log(Math.max(...number));
// }
// maxNum(1,22,3,99,13,4,10);

// 10. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a. Arguments as values
// b. Arguments as variables

// var varaibeNmae1 = prompt("Name (height or width)");
// var value1 = prompt("value");
// var varaibeNmae2 = prompt("Name (height or width)");
// var value2 = prompt("value");

// function area(a, b, c, d) {
//   var area = a * c;
//   alert(
//     `${b} of rectangle is ${a}  ${d} of rectangle is ${c}  Area of rectangle is : ${area}`
//   );
// }
// area(value1, varaibeNmae1, value2, varaibeNmae2);

// 11. Write a function that receives an array & returns the sorted
// array.

// function sorting(array) {
//   console.log(array.sort());
// }
// sorting([4,3,2,1,9]);

// 12. Write a function that takes numbers array, sums its elements
// & returns the sum.

// function Sum(number) {
//     var reduces=number.reduce((accumulator,curelem)=>{
//     return accumulator+=curelem
//     })
//     console.log(reduces)
// }
// Sum([1,2,3,5,6,8,8,9,5]);

// 14. Write a function that computes power of a number. E.g. 2 3 is 8.

// var cubes=+prompt("Enter a number")
// function cube(a) {
// alert("Result multiply by its power "+Math.pow(a,3));
// };
// cube(cubes);

// 15. Write a function that simulates a dice &amp; returns a random
// dice value.

// function diceValue(diceNum) {
//     console.log(diceNum);
// }
// diceValue(Math.ceil(Math.random()*6))

// 16. Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223

// function reversingNum(num) {
//     var array= num.split("")
//     var reverse= array.reverse()
//     for (let index = 0; index <reverse.length; index++) {
//         console.log(reverse[index]);
//     }
// }
// reversingNum("32243")

// 17. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING  : 'the quick brown fox' ;
// EXPECTED OUTPUT :'The Quick Brown Fox'  ;

// function upperCase(string) {
//   var array = string.split(" ");
//   for (let index = 0; index < array.length; index++) {
//     array[index]=array[index].charAt(0).toUpperCase()+ array[index].slice(1)
// }
// document.write(array.join(" "));
// }
// upperCase("the quick brown fox");

// 18. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : ;Web Development Tutorial;.
// EXPECTED OUTPUT : ;Development;.

// function checkLW(string) {
//   var array = string.split(" ");
//   for (let index = 0; index < array.length; index++) {
//     if (array[index].length>=11) {
//         console.log(array[index]);
//     }
// }
// }   
// checkLW("Web Development Tutorial");

// 19. Write a JavaScript function that accepts a string as a
// parameter and counts the number of vowels within the string.
// EXAMPLE STRING ;The quick brown fox;
// EXPECTED OUTPUT ;5

// var vowels = ["a", "e", "i", "o", "u"];
// var str = "The quick brown fox".toLocaleLowerCase();
// var count = 0;
// function countVowels() {
//   for (let i = 0; i < vowels.length; i++) {
//     for (let index = 0; index < str.length; index++) {
//       if (str[index] === vowels[i]) {
//         count += 1;
//       }
//     }
//   }
//   alert(`Vowels in '${str}' : ${count}`);
// }
// countVowels();