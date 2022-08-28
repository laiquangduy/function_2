//Bài 1

// function conghaiso() {
//   let a = Number(prompt("Enter a"));
//   let b = Number(prompt("Enter b"));
//   let sum = "";
//   sum = a + b;
//   console.log(sum);
//   return;
// }
// conghaiso();

//Bài 2

// function tongle() {
//   let array = [1, 2, 3, 4, 5, 6, 7];
//   let a = 0;
//   for (i = 0; i <= array.length - 1; i++) {
//     if (array[i] % 2 === 1) {
//       a = a + array[i];
//     }
//   }
//   console.log(a);
//   return;
// }
// tongle();

//Bài 3
// function bai3() {
//   let a = Number(prompt("Enter a"));
//   let b = Number(prompt("Enter b"));
//   if (a <= b) {
//     let sum = a + b;
//     alert(sum);
//   } else {
//     alert("a > b");
//   }
// }
// bai3();

//Bài 4
// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

//Bài 5
// function footToMeter(foot) {
//   let f = Number(prompt("Enter feet"));
//   let meter = 0.305 * f;
//   console.log(meter);
// }
// function meterToFoot(meter) {
//   let m = Number(prompt("Enter meter"));
//   let foot = 3.279 * m;
//   console.log(foot);
// }
// let choice = prompt("Enter feet or meter");
// if (choice == "meter") {
//   meterToFoot();
// } else if (choice == "feet") {
//   footToMeter();
// } else {
//   console.log("invalid command");
// }

//Bài 6
// let number = Number(prompt("Enter a number"));
// function isPrime(number) {
//   let state = true;

//   if (number < 2) {
//     state = false;
//   } else if (number === 2) {
//     state = true;
//   } else if (number % 2 === 0) {
//     state = false;
//   } else {
//     for (let i = 3; i < number - 1; i = i + 2) {
//       if (number % i === 0) {
//         state = false;
//         break;
//       }
//     }
//   }
//   if (state === true) {
//     console.log(`${number} is prime`);
//   } else {
//     console.log(`${number} is not a prime`);
//   }
//   return state;
// }

// let a = "";
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i) === true) {
//     a = a + "," + i;
//   }
// }
// console.log(a.replace(",", ""));
