// 12 19  is remaining
// // "ARRAYS"

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var arr=[``]

// 2. Declare an empty array using JS object notation to store
// student names in future.
// var arr=[``]

// 3. Declare and initialize a strings array.
// var string =["hello world","how are you"]
// string.forEach(function(value){
//          console.log(value)
//      })

// 5. Declare and initialize a boolean array.
// var boolean =[false, true]
// boolean.forEach(function(value){
//          console.log(value)
//      })

// 6. Declare and initialize a mixed array.
// var mixedarray =[0,-0,null,true, false ,1,2,3,4,5,"hello world","how are you"]
// mixedarray.forEach(function(value){
//          console.log(value)
//      })

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.
// var availablemobilenetworksinPakistan=['Jazz','Zong','Telenor','Warid','Ufone']
// availablemobilenetworksinPakistan.forEach(function(value){
//          console.log(value)
//      })

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browserlike:
// var availableeducationqualificationsinPakistan =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write(`qualifications: <br/>`)
// availableeducationqualificationsinPakistan.forEach(function(value,index){
//     document.write(` ${index}  )  ${value} <br/> `)
// })

// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
// var topmoviesof2015 =[]
// topmoviesof2015.push('Avengers:Age of ultron')
// topmoviesof2015.push('Spectre')
// topmoviesof2015.push('Jurassic world')
// topmoviesof2015.push('Inside out')
// document.write(`Top movies of 2015 <br/>`)
// topmoviesof2015.forEach(function(value, index){
//  document.write(` ${index}) ${value} <br/>`)
// })
// document.write(`length of the array : ${topmoviesof2015.length}`)

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array
// var car=['Audi','Volvo','Ford','Lamborghini']
// document.write(`Favorite cars <br/>`)
// car.forEach(function(value, index){
//  document.write(`${value},`)
// })
// document.write(`<br/> first index of the array:  0 <br/> Car at first index of the array  ${car[0]} <br/> Last index of the array:  ${car.length-1} <br/> Car at last index of the array  ${car[car.length-1]}`);

// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assumespec
// that total marks are 500 for each student, display the scores &
// percentages of students like;
// var students =['Michael','John','Tony'];
// var score    =[320,230,480];
// for(var i=0;i<students.length;i++)[
// document.write('score of ' + students[i] +' is '+ score[i] +'.Percentage: '+score[i]*100/500+'% <br/>')
// ];

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var colors =['red','blue','yellow'];
// colors.unshift('purple');
// console.log(colors)
// var colors =['red','blue','yellow'];
// colors.push('purple');
// console.log(colors)
// var colors =['red','blue','yellow'];
// colors.unshift('purple','green');
// console.log(colors)
// var colors =['red','blue','yellow'];
// console.log(colors)
// console.log(colors.pop())
// console.log(colors)
// var colors =['red','blue','yellow'];
// console.log(colors)
// console.log(colors.shift())
// console.log(colors)

// // 13. Write a program to store student scores in an array & sort
// // the array in ascending order using Array’s sort method.
// var studentsscore =[320,230,480,120];
// document.write(`scores of students  ${studentsscore} <br/>`);
// document.write(`ordered scores of students  ${studentsscore.sort()}`);

// 14. Write a program to sort the below mentioned array:
// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write(`Fruits list: <br/> ${fruits} <br/>`);
// document.write(`ordered Fruits list: <br/> ${fruits.sort()}`);

// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.
// var citieslist = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// document.write(`cities list: <br/> ${citieslist} <br/> selected cities list: <br/>`)
// const values = citieslist.filter((item) => {
//   if (item === "quetta" || item === "islamabad") {
//     // return item;
//   document.write(`${item} ,`)
// }
// });

// 16. Write a program to create a single string from the below
// // mentioned (Use array’s join method)
// var arr = ["This" , " is" , " my ", "cat"];
// document.write(`${arr} <br/>`)
// document.write(`${arr.join('')}`)

// 17.Create a new array. Store ues one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
// var devices=[]
// devices.push('Keyboard')
// devices.push('Mouse')
// devices.push('Printer')
// devices.push('Monitor')
// document.write(`Devices: <br/>`)
// devices.forEach(function(value){
//     document.write(`${value} ,`)

// })
// devices.forEach(function(value){
//     document.write('<br/> Out: <br/>')
//     document.write(value)
// })

// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)
// var devices=[]
// devices.push('Keyboard')
// devices.push('Mouse')
// devices.push('Printer')
// devices.push('Monitor')
// document.write(`Devices: <br/>`)
// devices.forEach(function(value){
//     document.write(`${value} ,`)
// })
// devices.reverse()
// devices.forEach(function(value){
//   document.write('<br/> Out: <br/>')
//       document.write(value)
//   })

// 19. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
//     the following dropdown/select menu in your browser using
//     document.write() method:
// let arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < arr.length; i++) {
//   document.write(`<option>${arr[i]}</option>`);
// }
// document.write("</select>");

// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var matrix=[[],[],[]]

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < matrix.length; i++) {
//     for(var j = 0; j < matrix[i].length ; j++){
//        document.write(`${matrix[i][j]} `);
//     }
//     document.write("<br />")
// }