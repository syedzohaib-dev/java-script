// task 1.......zakat.....

// var zakatpercentage = 0.025
// var userinput = +prompt("write your zakat contity")
// var result = (zakatpercentage*userinput)
// alert("your zakat value is "+result)


// task 2.........fitra......


// var famitymember = prompt("please type total number of family");
// var fitratype = prompt("please find your fithra: 1. barley (480), 2. dates (2800), 3. wheat-flour (320), 4. raisins (6400)");
// if (fitratype === "1") {
//     fitrarate = 480
// } else if (fitratype === "2") {
//     fitrarate = 2800
// } else if (fitratype === "3") {
//     fitrarate = 320
// } else if (fitratype === "4") {
//     fitrarate = 6400
// }
// var result = (familymember * fitrarate);
// alert("your total fitra is" + result);


// task 3......guess the number...


// var userinput = prompt("guess the number for (1 to 10)");
// if (userinput == 3) {
//     alert("you win");
// }
// else if (userinput >= 3) {
//     alert("you lose");
// }
// else if (userinput <= 3) {
//     alert("you lose");
// }


// task 4......capital format......


// var userinput = prompt("your name please")
// alert("first letter of your name is capital " + userinput[0].toUpperCase() + userinput.toLocaleLowerCase())


// task 5....array...name and num...


// var contactnumber = []
// var contactname = []
// for (var i = 0; i < 4; i++) {
//     var contactnumber = +prompt("contact number")
//     var contactname = +prompt("contactname")
//     contactnumber.push(contactnumber)
//     contactname.push(contactname)
// }
// console.log("contact number")
// for (let i = 0; < contactnumber.length; i++) {
//     console.log(contactnumber[i])
// }
// console.log("contactname")
// for (let i = 0; i < contactname.length; i++) {
//     console.log(contactname[i])
// }


// task 6.....product....

// var product = ["shoes", "t-shirt", "pants", "had", "socks", "tai", "glases"];
// var removeitem = prompt("pick your favorite item  (shoes, t-shirt, pants, had, socks, tai, glases)")
// var remove = product.splice(item)[0]
// console.log("remove product " + remove);
// console.log("total number of remaining item is " + product);
// console.log("your selected item is " + remove);



// task 7....nationality...gender...age...


// var nationality = prompt("your nationality");
// var gender = prompt("your gender");
// var age = prompt("your age");
// if (nationality.toLowerCase() == "pakistani" && gender == "male" && age >= 18)  {
//     alert("go to the voting room")
//   }
//   else if (gender === "female" && age >= 18) {
//     var married = prompt("Are you a married (yes/no)");
//     if (married === "yes") {
//       alert("You are go to vote room.");
//     } else {
//       alert("You are not eligible to vote.");
//     }
//   } else {
//     alert("You not eligible");
//   }


// task 8........world cup squade

// var worldcupsquade = ["sarfaraz ahmed ",  "babar azam ",  "fakhar zaman ",  "imam ul haq ",  "shoaib malik ",  "haris sohail ",  "asif ali ",  "shadab khan ",  "mohammad nawaz ",  "hasan ali ",  "shaheen afridi ",  "mohammad amir ",  "wahab riaz ",  "junaid khan ",  "abid ali "];

// var selectedplayer = worldcupsquade.slice(1,12)
// alert("pakistani team :" + worldcupsquade)
// alert("pakistani team selected for a world cup " + selectedplayer)

// task 9.......>check leap year

// function leapyear() {
//     var year = new Date().getFullYear()
//     console.log("current year is " + (year))
//     if (year % 4 === 0) {
//         console.log("This year is leap year")
//     }
//     else {
//         console.log("This year is not a leap year")
//     }
// }

// var thisleapyear = leapyear()
// console.log(thisleapyear)

// task 10.........>check--10--leap--year

// function newtenyear() {
//     var currentyear = new Date().getFullYear()
//     let leapyear = []
//     for (let i = 1 ; leapyear.length < 10; i++) {
//         if (i % 4 == 0) {
//             leapyear.push(i)
//         }
//     }
//     return leapyear
// }
// var leapyear = newtenyear()
// console.log(leapyear)

// task 11.........generate--otp

// function otpgen() {
//     return Math.floor(Math.random() * 4000 + 1000)
// }
// var myotp = otpgen()
// alert("Your OTP is " +myotp)

// task 12........>string into capital case 

// function capital(str){
//     str= str.toUpperCase(Str)
//     alert("string in to a capital case " +str)
// }
// var str = prompt("Enter name using double cote")
// capital(str)

// task 13.........>calculate your age 

// function yourAge(birthdate){
//     var today = new Date()
//     var difference = today.getTime() - birthdate.getTime()
//     var age = difference / (1000 * 60 * 60 * 24 * 365.2425)
//     return age
// }

// var birthdate = new Date(2002, 12, 8)
// var age = yourAge(birthdate)
// alert("My age is "+Math.floor(age))












