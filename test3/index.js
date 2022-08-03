//                   STRING METHODS

// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.
// var Fname=prompt("first name");
// var Lname= prompt("Last name");
// alert(`Hello ${Fname} ${Lname}`);

// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
// var mobilephone=prompt("your favorite mobile phone");
// document.write(`My favorite phone is: ${mobilephone} <br/> Length of string: ${mobilephone.length}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.
// var string="pakistani"
// document.write(`String: ${string} <br/> index of 'n':  ${string.indexOf("n")}`)

// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.
// var string="Hello World"
// document.write(`String: ${string} <br/> Last index of 'l':  ${string.lastIndexOf('l')}`);

// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.
// var string="pakistani"
// document.write(`String: ${string} <br/> Character at index 3:  ${string.charAt(3)}`)

// 6. Repeat Q1 using string concat() method.
// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.
// var Fname=prompt("first name");
// var Lname= prompt("Last name");
// var concat=Fname.concat(Lname)
// alert(`Hello ${concat}`);

// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
// var hyderabad="Hyderabad";
// var replacement=hyderabad.replace("Hyder","Islam");
// document.write(`City: ${hyderabad} <br/> After replacement:${replacement}`)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement=message.replaceAll("and","&");
// document.write(`City: ${message} <br/> After replacement: ${replacement}`)

// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// var number="472"
// document.write(`value: ${number} <br/> type:  ${typeof number} <br/>`)
// number=parseInt(number)
// document.write(`value: ${number} <br/> type:  ${typeof number} <br/>`)

// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// var input=prompt("Enter a URL result will be Domain");
// document.write(`URL: ${input}<br>`);
// var Domain=input.replace("www.","").replace("WWW.","") ;
// document.write(`Domain: ${Domain}`);

// 11. Write a program that takes user input. Convert and show the
// input in capital letters.
// var userinput= prompt("Enter a small letter convert it to capital letter");
// document.write(`User input: ${userinput} <br/>`)
// userinput=userinput.toUpperCase()
// document.write(`Upper case: ${userinput}`)

// 12. Write a program that takes user input. Convert and show the
// input in small letters.
// var userinput= prompt("Enter a capital letter convert it to small leter");
// document.write(`User input: ${userinput} <br/>`)
// userinput=userinput.toLowerCase()
// document.write(`lower case: ${userinput}`)

// 13. Write a program that takes user input. Convert and show the
// input in title case.
// var userinput= prompt("Enter a word convert a firsl letter capital");
// var first =userinput.charAt(0).toUpperCase();
// var remiannig=userinput.slice(1)
// document.write(`User input: ${first}${remiannig} `);

// 14. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36 ;
// document.write(`Number: ${num}<br/>`)
// var str=num.toString();
// var str2= str.replace(".","")
// document.write(`Result: ${str2}`)

// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?
// var a="3";
// var b="3";
// var x=a+b;
// document.write(`a is ${a} <br/> b is ${b} <br/> a+b is ${x}`)

// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?
// var a="3";
// var b="3";
// var y = a - b;
// document.write(`a is ${a} <br/> b is ${b} <br/> a-b is ${y}`)

// 17. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of [@ . , !], refer to ASCII table at the end of
// this document.

// var username=prompt("username")
// var flag=false;
// if (username=="") {
//     alert("plz enter username")
// }
// for (let i = 0; i < username.length; i++) {
//     if(username.charCodeAt(i) === 64 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 33 ) {
//         flag=true;
//         break;
//     }
// }
// if(flag === true) {
//     alert("username does not conain any special character")
// }
// else
// alert("correct username")

// 18. You have an array
// A = ["cake", "apple pie", "cookie", "chips","patties"]
// Write a proconsole.log();gram to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:

// var input=prompt("Welcome to abc Bakery. what do you want to order sir/ma'am? ").toLowerCase();
// var bakeryitems = ["cake", "apple pie", "cookie", "chips","patties"]
// var flag=false;
// for (let i = 0; i < bakeryitems.length;i++) {
//     if (bakeryitems[i] === input) {
//         document.write(`${bakeryitems[i]} is available at index ${[i]} in our bakery `)
//         flag=true
//         break;
//     };
// }
// if (flag==false) {
//     document.write(`We are sorry ! ${input} is not available in our bakery `)
// }

// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.
// var input1=prompt("enter first sring");
// var input2=prompt("enter second sring");
// if(input1>input2){
//       alert(`${input1} is greater than ${input2}`)
//     }else if(input2>input1){
//         alert(`${input2} is greater than ${input1}`)
//     }else if(input1===input2){
//         alert(`${input1} is equal to ${input2}`)
//     }

// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var pwd = prompt("password");
// var flag = false;
// for (let i = 0; i < pwd.length; i++) {
//   if (
//     !(
//       (pwd.charCodeAt(i) >= 48 && pwd.charCodeAt(i) <= 57) ||
//       (pwd.charCodeAt(i) >= 65 && pwd.charCodeAt(i) <= 90) ||
//       (pwd.charCodeAt(i) >= 97 && pwd.charCodeAt(i) <= 122)
//     )
//   ) {
//     flag = true;
//     alert("pwd does not conain any special character");
//     break;
//   }
// }
// if (flag !== true) {
//   if (!isNaN(pwd.charAt(0))) {
//     alert("pwd cannot start with number");
//   } else if (flag === false) {
//     alert("correct pwd");
//   } else if (pwd.length < 6) {
//     alert("pwd contain maximum 6 character");
//   }
// }

// 21. Write a program to convert the following string to an array
// using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// document.write(university + "<br/>")
// var arr=university.split("")
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br/>")
// };

// 22. Write a program to display the last character of a user input.

// var input1=prompt("enter string");
// document.write(`User input: ${input1} <br/>`);
// var last= input1.slice(-1)
// document.write(`Last character of input: ${last}`);

// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.


// var str="The quick brown fox jumps over the lazy dog".toLowerCase();
// var arr= str.split(" ")
// var count=0
//     for (let x = 0; x < arr.length; x++) {
//     if (arr[x]=="the") {
//          count+=1
//     }}
// alert("There are " + count + " occurence(s) of word 'the'");


// 24. Write a program to count number of vowels & consonants in
// given string

// var vowels=["a","e","i","o","u"]
// var str = "Pakistan";
// var count=0

// for (let i = 0; i < vowels.length; i++) {
//     if (str.toLowerCase().includes(vowels[i])) {
//         count+=1
//     }
// };
// alert(`Vowels in ${str}: ${count}` );
