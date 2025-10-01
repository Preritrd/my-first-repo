// alert("Welcome to My Web Page!!");

// const { text } = require("express");

// In JavaScript The Semicolon (;) is Optional //

// < !-- || --------------------||====|> NEW Chapter: JavaScript <|====||< --------------------|| -->

// < !-- < ----------------------------------- #### JS #### -----------------------------------\> -->

// console.log("Code is running.....")

// var a = prompt("Enter Your Number")
// var isTrue=confirm("Are u sure , u want to leave this page and blast your computer ?")
// if(isTrue){
//     console.log("Computer is Blasting in 10secs")
// }
// else{
//     console.log("Computer is not Blasting")
// }
// console.log("Your Number is "+ a )

// document.title="Hey There, How are you"
// document.body.style.backgroundColor="orange"

// console.log("Hey This is tutorial of JavaScript")

// var a = 5;
// var b = 6;
// var c = "Prerit";
// // var 55a="Prerit" // Invalid , Don't start with number
// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

// {
//     let a = 66;
//     console.log(a) //This will give 66, as it it in block
// }
// console.log(a) // This will Give 5, as it is Global

// // const a1=6;
// // a1=a1+1;
// // Not Allowed

// let x = "Prerit";
// let y = 55;
// let z = 9.5;
// const p = true;
// let q = undefined;
// let r = null;

// console.log(x, y, z, p, q, r)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// let o = {
//     "name": "Prerit R Deyagond", "Job Code": 5795, "is_Intellegent": true
// }
// console.log(o);
// o.salary = "150000croces";
// console.log(o);

// <!-- ||--------------------||====|> NEW Chapter: JavaScript <|====||<--------------------|| -->

// <!-- <-------------------- #### JS Conditionals:if,else if,else #### --------------------\>-->

// console.log("Conditionls Statments")

// let age = 17;
// let grace=2
// if((age+grace)>18){
//     console.log("You Can Drive The Car")
// }
// else{
//     console.log("You Cannot Drive The Car")
// }

// <!-- ||--------------------||====|> NEW Chapter: JavaScript <|====||<--------------------|| -->

// <!-- <-------------------- #### JS Loops #### --------------------\>-->

// console.log("Loops");

// let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }

// let obj = {
//     Name: "-> Prerit R Deyagond",
//     Role: "-> Google CEO",
//     Company: "-> CodeWithPrerit AI"
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)
// }

// let i=5;
// while(i<5){

// }

// <!-- ||--------------------||====|> NEW Chapter: JavaScript <|====||<--------------------|| -->

// <!-- <-------------------- #### JS Functions #### --------------------\>-->

// function nice(name) {
//     console.log("Hey " + name + " your are Nice!");
//     console.log("Hey " + name + " your are Best!");
//     console.log("Hey " + name + " your Tshirt is Nice!");
//     console.log("Hey " + name + " your course is Best too!");
// }
// console.log("Prerit")
// nice("Prerit")

// console.log("Hey Prerit You are Nice");

// function sum(a,b){
//     console.log(a+b)
// }
// sum(5,5)

// const func1=(x)=>{
//     console.log(typeof I);
// }

// <!-- ||--------------------||====|> NEW Chapter: JavaScript <|====||<--------------------|| -->

// <!-- <-------------------- #### JS Strings #### --------------------\>-->

// console.log('This is Strings tutorial')
// let a = "PreritRD"
// console.log(a)
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// console.log(a[6])
//console.log(a[7]); //Undefined Error
// console.log(a.length)
// let Name = "Prerit.R.D"
// let friend = "Rohan"
// console.log("His Name is " + Name + " and this friend Name is " + friend)
// console.log(`His Name is ${Name} and this friend name is ${friend}`)

// let b = "Google"
// console.log(b.toUpperCase())
// console.log(b.toLowerCase())
// console.log(b.charAt(5))
// console.log(b.slice(1,5))
// console.log(b.replace("Goo","Micro"))
// console.log(b.concat(a))
// console.log(b.charCodeAt(a))
// console.log(b.split())

// console.log("Prerit");

// function businessname(num, a, b, c, d, e, f, g, h, i) {

//     if (num >= 1 && num < 3) {
//         console.log(`${a}${e}${h}`)
//     }
//     else if (num >= 3 && num < 6) {
//         console.log(`${b}${d}${g}`)
//     }
//     else if (num >= 6 && num < 9) {
//         console.log(`${c}${f}${i}`)
//     }
//     else if (num >= 9 && num < 12) {
//         console.log(`${b}${h}${e}`)
//     }
//     else if (num >= 12 && num < 15) {
//         console.log(`${b}${i}${g}`)
//     }
// }

// let num = prompt("Enter the Number : ")
// let num = Math.random();
// num = Number(num)

// let a = "Crazy"
// let b = "Amazing"
// let c = "Fire"
// let d = "Engine"
// let e = "Foods"
// let f = "Garments"
// let g = "Bros"
// let h = "Limited"
// let i = "Hub"
// businessname(num, a, b, c, d, e, f, g, h, i)

// function businessname(num, a, b, c, d, e, f, g, h, i) {
//     if (num >= 1 && num < 3) {
//         return `${a}${e}${h}`;
//     }
//     else if (num >= 3 && num < 6) {
//         return `${b}${d}${g}`;
//     }
//     else if (num >= 6 && num < 9) {
//         return `${c}${f}${i}`;
//     }
//     else if (num >= 9 && num < 12) {
//         return `${b}${h}${e}`;
//     }
//     else if (num >= 12 && num < 15) {
//         return `${b}${i}${g}`;
//     } else {
//         return "Number out of range. Please enter 1-14.";
//     }
// }

// let num = parseInt(prompt("Enter the Number : "));
// let a = "Crazy";
// let b = "Amazing";
// let c = "Fire";
// let d = "Engine";
// let e = "Foods";
// let f = "Garments";
// let g = "Bros";
// let h = "Limited";
// let i = "Hub";

// let result = businessname(num, a, b, c, d, e, f, g, h, i);
// document.body.innerHTML = `<h1>${result}</h1>`;

// let arr=[1,2,3,4,5,6,7];
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])

// let a = [1, 2, 3, 4, 5]
// let sum = 0;
// a.forEach((value, index) => {
//     sum = sum + value;
// });
// console.log(a);
// console.log(sum)
// let object = {
//     a: "Prerit",
//     "name surname": "Prerit R Deyagond",
//     b: 5

// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element);
//         console.log(Object.getPrototypeOf(object)); // Shows the prototype of object

//     }
// }

// let num = parseInt(prompt("Enter The Number : "));
// let fac = 1;
// for (let i = 1; i <= num; i++) {
//     fac *= i;
// }
// console.log(fac);

// let a = 6
// function fact(number) {
//     let arr = Array.from(Array(number + 1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1,).reduce((a, b) => {
//         return a * b
//     })
//     console.log(c);
// }
// fact(a)

// console.log("Hello World");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
// // boxes[2].style.backgroundColor = "orange";

// // document.getElementById("redbox").style.background = "red"

// //Query Selector

// // document.querySelector(".box").style.backgroundColor = "green"
// console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").forEach(element => {
//     element.style
//     .backgroundColor = "green";
// });
// // document.querySelectorAll(".box").style.backgroundColor = "green"; ===>([ERROR])
// console.log("Prerit")
// let boxes = document.getElementsByClassName("box");
// console.log(boxes)
// Array.from(boxes).forEach(e => {
//     console.log(e);
// });

// let button = document.getElementById("btn")

// button.addEventListener("dblclick", () => {
//     // alert("I was Clicked. Yayy!!!!!!!");
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

// const button = document.getElementById("btn");

// button.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//     alert("Don't hack us by Right click Please");
// });

// console.log("Prerit is Hacker!!!!");
// console.log("Rohit is a hecher");

// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 0);

// console.log("The End")

// // Define a function that logs whatever argument it receives
// const callback = (arg) => {
//     console.log(arg);
// }

// // Define a function to load a script and run a callback after it loads
// const loadScript = (src, callback) => {
//     let sc = document.createElement("script"); // Create a <script> element
//     sc.src = src;                              // Set the 'src' attribute to the script URL
//     sc.onload = () => callback("Prerit R Deyagond");       // When script loads, run callback with "Harry"
//     document.head.push(sc);                  // Add the script to <head> so it starts loading
// }

// // Example usage
// loadScript("https://example.com/myscript.js", callback);
// function createcard(title, cName, views, monthsOld, duration, thumbnail) {
//   let viewsnumber;

//   if (views < 1000) {
//     viewsnumber = views;
//   } else if (views >= 1000000) {
//     viewsnumber = (views / 1000000).toFixed(1) + "M";
//   } else {
//     viewsnumber = (views / 1000).toFixed(1) + "K";
//   }

//   let html = `
//     <div class="card">
//       <div class="image">
//         <img src="${thumbnail}" alt="image">
//         <div class="capsule">${duration}</div>
//       </div>
//       <div class="text">
//         <h1>${title}</h1>
//         <p>${cName} • ${viewsnumber} views • ${monthsOld} months ago</p>
//       </div>
//     </div>
//   `;

//   document.querySelector(".container").innerHTML += html;
// }

// // event listener for button
// document.getElementById("generateBtn").addEventListener("click", function () {
//   createcard(
//     "Introduction to Backend | Sigma Web Dev video #5",
//     "CodeWithPrerit",
//     560000,
//     7,
//     "31:05",
//     "Leetcode.png"
//   );
// });

// CallBacks

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("DataID : ", dataID);
//     if
//       (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     })
//   })
// })

// function myFunction(msg, n) {
//   console.log(msg.repeat(Number(n)));
// }

// myFunction("I Mastered DSA [Preit]\t\n", 100)

// < !-- || --------------------||====|> NEW Chapter: JavaScript <|====||< --------------------|| -->
// let btn = document.querySelector(".btn");
// let theme = "light";

// btn.addEventListener("click", () => {
//     if (theme === "light") {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         theme = "dark";
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         theme = "light";
//     }
// });


// const student = {
//     gullName: "Prerit R Deyagond",
//     rollNo: 5795,
//     isIntellegent: true,
//     marks: 98.5,
//     printmarks: function () {
//         console.log("marks =", this.marks);
//     },
// }
// console.log(student);

// const newstudent = {
//     marks: 99.9,
//     printmarks() {
//         console.log("marks =", this.marks);
//     }
// }

// newstudent.__proto__=student;


// class MyCar {
//     constructor(brand, color, milage, price) {
//         this.brand = brand;
//         this.color = color;
//         this.milage = milage;
//         this.price = price;
//     }
//     start() {
//         console.log("Car Started");
//     }
//     stop() {
//         console.log("Car Stopped");
//     }
// }

// let Car1 = new MyCar("BMW", "Blue", 20, "4.5crores");
// let Car2 = new MyCar("Mercedes", "MintOrange", 15, "5.5crores");
// let Car3 = new MyCar("RollsRoyal", "MintRed", 18, "4.5crores");
// console.log(Car1);
// console.log(Car2);
// console.log(Car3);

// Car1.start();
// Car2.stop();
// Car3.start();

// console.log(Car1.brand, Car1.color, Car1.milage, Car1.price);
// console.log(Car2.brand, Car2.color, Car2.milage, Car2.price);
// console.log(Car3.brand, Car3.color, Car3.milage, Car3.price);

//----> Super Keyword is used to call the parent class constructor or methods in a child class.

// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     hello() {
//         console.log("Hello from Parent Class");
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class Engineer extends Person {
//     constructor(branch) {
//         super(); //In a subclass, this doesn’t exist until the parent constructor runs. Calling super() sets up the parent part of the object. If you try to use this before super(), JavaScript doesn’t know what this is yet, so it throws an error.
//         //Think of it as: “You must build the base before adding extensions.”
//         this.branch = branch;
//     }
//     work() {
//         super.eat();
//         console.log("Work in Google");
//     }
// }

// let engobj = new Engineer("Computer Engineering");
// const URL = "https://catfact.ninja/fact";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getfacts = async () => {
//     console.log("getting data…");
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     factpara.innerText = data.fact;  // fixed: API returns { fact: "...", length: ... }
// };

// btn.addEventListener("click", getfacts);

// // Promise Chaining //
// function getfacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         document.getElementById("fact").innerText = data.fact;
//     })
// }
// Define countryList first
// const countryList = {
//     AED: "AE",
//     AFN: "AF",
//     ALL: "AL",
//     AMD: "AM",
//     ANG: "AO",
//     AOA: "AO",
//     ARS: "AR",
//     AUD: "AU",
//     AWG: "AW",
//     AZN: "AZ",
//     BAM: "BA",
//     BBD: "BB",
//     BDT: "BD",
//     BGN: "BG",
//     BHD: "BH",
//     BIF: "BI",
//     BMD: "BM",
//     BND: "BN",
//     BOB: "BO",
//     BRL: "BR",
//     BSD: "BS",
//     BTN: "BT",
//     BWP: "BW",
//     BYN: "BY",
//     BZD: "BZ",
//     CAD: "CA",
//     CDF: "CD",
//     CHF: "CH",
//     CLP: "CL",
//     CNY: "CN",
//     COP: "CO",
//     CRC: "CR",
//     CUC: "CU",
//     CUP: "CU",
//     CVE: "CV",
//     CZK: "CZ",
//     DJF: "DJ",
//     DKK: "DK",
//     DOP: "DO",
//     DZD: "DZ",
//     EGP: "EG",
//     ERN: "ER",
//     ETB: "ET",
//     EUR: "EU",
//     FJD: "FJ",
//     FKP: "FK",
//     GBP: "GB",
//     GEL: "GE",
//     GHS: "GH",
//     GIP: "GI",
//     GMD: "GM",
//     GNF: "GN",
//     GTQ: "GT",
//     GYD: "GY",
//     HKD: "HK",
//     HNL: "HN",
//     HRK: "HR",
//     HTG: "HT",
//     HUF: "HU",
//     IDR: "ID",
//     ILS: "IL",
//     INR: "IN",
//     IQD: "IQ",
//     IRR: "IR",
//     ISK: "IS",
//     JMD: "JM",
//     JOD: "JO",
//     JPY: "JP",
//     USD: "US",
//     KES: "KE",
//     KGS: "KG",
//     KHR: "KH",
//     KMF: "KM",
//     KPW: "KP",
//     KRW: "KR",
//     KWD: "KW",
//     KYD: "KY",
//     KZT: "KZ",
//     LAK: "LA",
//     LBP: "LB",
//     LKR: "LK",
//     LRD: "LR",
//     LSL: "LS",
//     LYD: "LY",
//     MAD: "MA",
//     MDL: "MD",
//     MGA: "MG",
//     MKD: "MK",
//     MMK: "MM",
//     MNT: "MN",
//     MOP: "MO",
//     MRU: "MR",
//     MUR: "MU",
//     MVR: "MV",
//     MWK: "MW",
//     MXN: "MX",
//     MYR: "MY",
//     MZN: "MZ",
//     NAD: "NA",
//     NGN: "NG",
//     NIO: "NI",
//     NOK: "NO",
//     NPR: "NP",
//     NZD: "NZ",
//     OMR: "OM",
//     PAB: "PA",
//     PEN: "PE",
//     PGK: "PG",
//     PHP: "PH",
//     PKR: "PK",
//     PLN: "PL",
//     PYG: "PY",
//     QAR: "QA",
//     RON: "RO",
//     RSD: "RS",
//     RUB: "RU",
//     RWF: "RW",
//     SAR: "SA",
//     SBD: "SB",
//     SCR: "SC",
//     SDG: "SD",
//     SEK: "SE",
//     SGD: "SG",
//     SHP: "SH",
//     SLL: "SL",
//     SOS: "SO",
//     SRD: "SR",
//     SSP: "SS",
//     STN: "ST",
//     SVC: "SV",
//     SYP: "SY",
//     SZL: "SZ",
//     THB: "TH",
//     TJS: "TJ",
//     TMT: "TM",
//     TND: "TN",
//     TOP: "TO",
//     TRY: "TR",
//     TTD: "TT",
//     TWD: "TW",
//     TZS: "TZ",
//     UAH: "UA",
//     UGX: "UG",
//     UYU: "UY",
//     UZS: "UZ",
//     VES: "VE",
//     VND: "VN",
//     VUV: "VU",
//     WST: "WS",
//     XAF: "CM",
//     ZWL: "ZW"
// };

// let access = document.querySelector(".container");
// let boxes = document.querySelectorAll(".box");

// let text = boxes[2].innerText = "Jai Shri Ram";
// console.log(text);
// setTimeout(() => {
//     access.style.backgroundColor = "lightblue";
// }, 2000);

// const helloWorldAsync = async function () {
//     let val = 2 * 2
//     let ans = boxes[5].innerText = val;
//     console.log(ans);
//     let num = 5 * 5
//     let result = boxes[3].innerText = num;
//     console.log(result);
// };

// helloWorldAsync();

// const github_api = "https://api.github.com/users/akshaymarch7"

// const user = fetch(github_api)
// console.log(user);


// async function sleep(params) {
//     return new Promise((resolve, reject) => {
//     })
// }

//---------------------------------------------> Promise in JavaScript <---------------------------------------------//
// // Promise in JavaScript

// const cart = ["shoes", "T-Shirt", "Jeans", "Hoodies"];
// // // const promise = createOrder(cart);
// // // console.log(promise);


// // // Promise Chaining
// // // promise.then(function (orderId) {
// // //     // console.log(orderId);
// // //     proceedToPayment(orderId);
// // // }).catch((err) => {
// // //     console.log(err.message);
// // // })


// // // Promise Chaining
// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     }).then(function (orderId) {
//         return proceedToPayment(orderId);
//     }).then(function (paymentInfo) {
//         console.log(paymentInfo);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     }).then(() => {
//         console.log('If .then exist after the .catch,then it will be executed regardless where the error has occurred or not');
//     })

// // // Creation of Promise Status[pending,fulfilled,rejected];

// function createOrder(cart) {

//     const pr = new Promise(function (resolve, reject) { // This is way to Create Promises
//         //CreateOrder
//         //ValidateCart
//         //OrderId

//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err);   // ✅ Pass the error object here
//         }
//         // logic got createOrder
//         const orderId = "587565";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId);
//             }, 5000);
//         }
//     })
//     return pr;
// }

// function proceedToPayment(orderId) {
//     //some logic to proceedToPayment
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successful");
//     })
// }

// function validateCart(cart) {
//     return true;
// }

//<!-- ||---------------||===|> { Advance JavaScript } <|===||---------------|| -->

//--------------------------------> IIFE Syntax <--------------------------------//

// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(555);
//         }, 5000);
//     })
// }

// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()

//-------------------------------> Destructuring <-------------------------------//

// (async function main() {
//     // let x, y = [1, 5];
//     // let [x, y] = [1, 5, 7];
//     // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
//     // console.log(x, y, rest);

//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }

//     let { a, b } = obj
//     console.log(a, b);

// })()

//-------------------------------> Spread Syntax <-------------------------------//

// function sum(a, b, c) {
//     return a + b + c;

//     let arr = [1, 4, 5];
//     console.log(arr[0] + arr[1], arr[2]);
// }
// (async function main() {
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }

//     let { a, b } = obj
//     console.log(a, b);

//     let arr = [1, 4, 6];
//     // console.log(arr[0] + arr[1] + arr[2]);
//     console.log(sum(...arr)) // here it spreads the array.

//     //Special Case
//     const sparr = [3, 4, 5, 6, 8];
//     const objvariable = { ...sparr };
//     // {0:3,
//     // 1:4,
//     // 2:5,
//     // 3:6,
//     // 4:8};
// })()

//---------------------------> Problems for Sigma Developers <---------------------------//

// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school.
//    Implement a JavaScript function that takes an array of student names and
//    assigns them to one of the four houses(Gryffindor(length less than 6),
//    Hufflepuff(length less than 8), Ravenclaw(length less than 12),
//    or Slytherin(length greater than or equal to 12)) based on the length
//    of their names.

// let students = ["Shiva", "Vishnu", "Ganesh", "Krishna", "Hanuman",
// "Saraswati", "Lakshmi", "Buddha", "Rahul", "Ram", "Rohit"];

// let houses = []

// for (const student of students) {
//     if (student.length < 4) {
//         houses.push("blue");
//     }
//     else if (student.length < 5) {
//         houses.push("Orange");
//     }
//     else if (student.length < 6) {
//         houses.push("Red");
//     }
//     else if (student.length < 8) {
//         houses.push("Yellow");
//     } else {
//         houses.push("Green");
//     }
// }
// console.log(houses)


// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each
//    element in an array.However, there's a catch: if the
//    array contains consecutive duplicate elements, only 
//    double one of them.

// const DoubleTrouble = function (arr) {
//     const result = [];
//     let prev = null;

//     arr.forEach(e => {
//         if (e === prev) {
//             // If this is a duplicate of the previous, just keep it as-is
//             result.push(e);
//         } else {
//             // If it's not a duplicate, double it
//             result.push(e * 2);
//         }
//         prev = e;
//     });

//     return result;
// };

// const arr = [1, 2, 3, 5, 5, 6, 8, 8, 9, 4, 4];
// console.log("The Double Trouble array is :", DoubleTrouble(arr));
// Output: [2, 4, 6, 10, 5, 12, 16, 8, 18, 8]

// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create
//    a new string that is a mirror image of the original.
//    Write a function that appends the reversed version of
//    the original string to itself.

// const mirrorString = function (str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }
// const text = prompt("Enter a String : ");
// console.log("The reversed of text is : ", mirrorString(text));



//---------------------------> Practice {Promises} <---------------------------//

// const p = new Promise((resolve, reject) => {
//     resolve("Hello Promise!!");
// });

// p.then((msg) => {
//     console.log(msg);  // prints "Hello Promise!!"
//     return msg + " How are you?";  // pass new value to next then
// }).then((text) => {
//     console.log(text);  // prints "Hello Promise!! How are you?"
// });



// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(data => console.log("Post:", data))
//     .catch(err => console.error(err));


// const step1 = () => {
//     return new Promise(resolve => setTimeout(() => resolve("Step 1 Completed"), 2000));
// }
// const step2 = prev => {
//     return new Promise(resolve => setTimeout(() => resolve(`${prev}-> Step 2 Completed`), 5000));
// }

// const runsteps = async () => {
//     try {
//         const result1 = await step1();
//         console.log(result1);

//         const result2 = await step2(result1);
//         console.log(result2);
//     } catch (err) {
//         console.log(err);
//     }
// };

// runsteps();

// Note:
// 1. With curly braces { ... } → block body
//     👉 You must explicitly use return if you want to send something back.

// const step1 = () => {
//     return new Promise(resolve => setTimeout(() => resolve("Step 1 Completed"), 2000));
// };

// 2. Without curly braces → implicit return
//     👉 Whatever expression you write is returned automatically.

// const step1 = () => new Promise(resolve => setTimeout(() => resolve("Step 1 Completed"), 2000));

//---------------------------> Async Await <---------------------------//

// const getData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Successful Data Retrieved BY USING ASYNC AWAIT")
//         }, 3000);
//     });
// };

// async function showData() {
//     const data = await getData();
//     console.log(data);
// }
// showData();


// // Simulate calling a real API
// const fetchUserData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const user = await response.blob();
//         console.log("User Data:", user);
//     } catch (error) {
//         console.error("Failed to fetch user:", error.message);
//     }
// };

// fetchUserData();


// const box = document.querySelectorAll(".box");
// box.forEach((elem) => {
//     elem.addEventListener("click", () => {
//         elem.textContent = "Car";
//     })
// })

// const getData = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject("Error Data Not found");
//         }, 3000);
//     })
// }

// const text = async () => {
//     const data = await getData();
//     console.log(data);
// }
// text();


// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error Data Not found");
//         }, 3000);
//     });
// };

// const text = async () => {
//     try {
//         const data = await getData();
//         console.log(data);
//     } catch (error) {
//         console.error("Caught Error:", error);
//     }
// };

// text();

