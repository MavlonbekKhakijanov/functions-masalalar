// masalalar

// const counter = (num1, num2) => {
//   console.log(`${num1 + num2}`);
// };

// counter(84, 96);

// 2-masala
// const toSecund = (minute) => {
//   console.log(`${minute * 60}`);
// };

// toSecund(5);

// 3-masala
// const nextNumber = (number) => {
//   return number + 1;
// };
// console.log(nextNumber(2));

// 4-masala;
// const triangle = (asos, balandlik) => {
//   return `${(asos * balandlik) / 2}`;
// };
// console.log(triangle(7, 4));

// 5-masala
// const ageToDays = (year) => {
//   return `${year * 365}`;
// };
// console.log(ageToDays(65));

// 6-masala;
// const kub = (number) => {
//   return number ** 3;
// };

// console.log(kub(10));

// 7-masla first element
// const numbers = [258, 25, 83];
// const firstElement = (first) => {
//   return first[0];
// };
// console.log(firstElement(numbers));

// 8-masala ko'paytma
// const counter = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(counter(5, 5));

// 9-masala
// const words = ["mavlon", "bunyod", "anvarjon", "farxodbek", "kompuyuter"];
// const wordNumber = [];
// const wordLength = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     wordNumber.push(word[i].length);
//   }
// };
// wordLength(words);

// 10-masala
// console.log(wordNumber);
// const numbers = [5000, 500, 300, 85475, 1000, 1];
// let result = [];
// const counter = (number) => {
//   result.unshift(Math.max(...number));
//   result.push(Math.min(...number));
// };
// counter(numbers);
// console.log(result);

// 11-masala
// const number = 7800;
// let h;
// let m;
// let s;

// function counter(data) {
//   h = parseInt(data / 3600);
//   //   h = (data - (data % 3600)) / 3600;
//   m = parseInt((data - h * 3600) / 60);
//   s = parseInt(data - (h * 3600 + m * 60));
//   //   m = ((data % 3600) - ((data % 3600) % 60)) / 60;
// }

// counter(number);
// console.log(`${h}:${m}:${s}`);

// 12-masala tortburchak yuzi
// let a = 5;
// let b = 10;
// function counter(value1, value2) {
//   return value1 * value2;
// }
// console.log(counter(a, b));

// 13-masala;
// let word = "mavlon";
// function wordPlus(a) {
//   return `salom ${a}`;
// }

// console.log(wordPlus(word));

// 14-masla
// const kvadrat = (number) => {
//   return number ** 2;
// };

// console.log(kvadrat(9));

// 15-masala;
// function counter(number) {
//   if (number <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// counter(0);

// 16-masala;
// function counter(num) {
//   return (num - 2) * 180;
// }

// console.log(counter(6));

// 17-masla;
// let result;
// function basketBall(a, b) {
//   return (result = a * 2 + b * 3);
// }
// console.log(basketBall(7, 5));

// 18-masala
// function nameString(data) {
//   return `" ${data}Edabit "`;
// }
// console.log(nameString("Mavlon"));

// 19-masala;
// const counter = (x, y) => {
//   if (x + y < 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// counter(30, 60);

//20-masla;
// let newArray = [];
// const counterArray = function (x) {
//   for (let i = 1; i <= x; i++) {
//     newArray.push(i);
//   }
// };

// counterArray(5);
// console.log(newArray);

// 21-masla;
// let result;
// const counter = function (tovuq, qoy, sigr) {
//   result = tovuq * 2 + qoy * 4 + sigr * 4;
// };
// counter(2, 3, 5);
// console.log(result);

// 22-masala;
// const boolenCounter = function (a, b) {
//   if (a == true && b == false) {
//     console.log(false);
//   } else if (a == true && b == true) {
//     console.log(true);
//   } else if (a == false && b == true) {
//     console.log(false);
//   } else {
//     a == false && b == false;
//     console.log(false);
//   }
// };

// boolenCounter(false, false);

// 23-masala

// const equla = (x, y) => {
//   if (x === y) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// equla(4, 4);

// 24-masala
// let result;
// const point = (a, b, c) => {
//   return (result = a * 3 + b * 1 + c * 0);
// };

// console.log(point(5, 0, 2));

// 25-masala;
// let result;
// function seconds(h, m) {
//   return (result = `${h * 3600 + m * 60}`);
// }
// console.log(seconds(2, 0));

// 26-masala;
// function fun(a) {
//   if (a != 7) {
//     console.log(false);
//   } else if (a != 7) {
//     console.log(false);
//   } else if (a == 7) {
//     console.log(true);
//   }
// }
// fun(7);

// 27-masala;
// function typCompare(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// typCompare(5, "5");

// 28-masala
// function boolen(data1) {
//   if (data1 == true) {
//     console.log(`"true"`);
//   } else {
//     console.log(`"false"`);
//   }
// }
// boolen(false);

// 29-masala
// const arrow = (data) => {
//   return data;
// };
// console.log(arrow("mavlonbek"));

// 30-masala;

// const frame = (minute, frame) => {
//   return minute * 60 * frame;
// };
// console.log(frame(10, 25));

// 31-masala;

// const calc = (number) => {
//   for (let i = 0; i < number.length; i++) {
//     if (Number(number[i]) === NaN) {
//       console.log(number[i]);
//     } else {
//       console.log(number[i]);
//     }
//   }
// };
// calc("2+5");

// const calc = (number)=>{

//     let operand = number.split("+")
//     let operand1 = operand[0];
//     let operand2 = operand[1]
//     let result =operand
// }

// console.log(calc("2+5"))

// 32-masala
// function counter(n1, n2) {
//   if (n1 == 10 || n2 == 10 || n1 + n2 == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// counter(10, 7);

// 33-masala;

// function litrMasofa(m) {
//   return m * 10;
// }

// console.log(litrMasofa(23.5));

// 34-masala;
// const counter = function (a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// };
// counter(0, -1);

// 35-masala;
// let array = [];
// const newMassiv = function (a, b) {
//   return array.push(a, b);
// };
// newMassiv(1, 2);
// console.log(array);

// 36-masala
// const tengStrings = (str1, str2) => {
//   if (str1.length == str2.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// tengStrings("mavlon", "sumaya");

// 37-masala;
// const emptyStrings = (str) => {
//   if (str.length == "") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// emptyStrings(" ");

// 38-masala;
// const bolinsin = (number) => {
//   if (number % 5 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// bolinsin(37);

// 39-masala
// const bolinsin100 = (number) => {
//   if (number % 100 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// bolinsin100(37);

// 40-masala;
// let counter;
// const uzunlik = (str) => {
//   for (let i = 5; i < str.length; i++) {
//     counter = i;
//   }
// };
// uzunlik("mavlonbek");
// console.log(counter);

// 41-masala
// const bolinsa = (n1, n2) => {
//   if (n1 / n2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// bolinsa(98, 7);

// 42-masala
// const number = (str) => {
//   console.log(Number(str));
// };

// number("5");

// // 43-masala;
// const tortburchakYuzi = (x, y) => {
//   if (x > 0 && y > 0) {
//     console.log(x * y);
//   } else {
//     console.log(-1);
//   }
// };
// tortburchakYuzi(0, 5);

// 44-masala;
// const ismFam = (ism, fam) => {
//   console.log(fam, ism);
// };
// ismFam("Mavlon", "Xaijonov");

// 45-masala
// const bug = (data) => {
//   if (data) {
//     console.log("sad day");
//   } else {
//     console.log("it's a good day");
//   }
// };

// bug(false);

// 46-masala

// function removeElement(array, num) {
//   for (let i = 1; i <= num; i++) {
//     array.shift();
//   }
//   console.log(array);
// }
// removeElement([1, 2, 3], 1);
// removeElement([1, 2, 3], 3);
// removeElement([1, 2, 3], 0);

// 47-masala

// let voteCount = {
//   upvotes: 0,
//   downvotes: 0,
// };

// function calculateVotes() {
//   return voteCount.upvotes - voteCount.downvotes;
// }
// voteCount.upvotes = 10;
// voteCount.downvotes = 5;
// console.log(calculateVotes());
// voteCount.upvotes = 10;
// voteCount.downvotes = 15;
// console.log(calculateVotes());

// 48-masala

// function negativeOfnumber(n) {
//   if (n > 0) {
//     console.log(-n);
//   } else {
//     console.log(n);
//   }
// }
// negativeOfnumber(4);
// negativeOfnumber(-4);
