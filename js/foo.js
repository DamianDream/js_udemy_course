// 'use strict';

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('Hello World');

// //калькулятор
// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(10, 3));
// console.log(calc(12, 3));

// //возврат в внешний мир
// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// //класификация функций
// const calc0 = (a, b) => a + b;

// const calc1 = (a, b) => { return a + b };

// console.log(calc0(2, 3));
// console.log(calc1(3, 3));

// //конвертор валют
// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// //'use strict';
// //конкертер с условной скидкой
// const usdCurr = 28;
// const discount = 0.9;


// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr)
// promotion(res);
// // promotion(convert(500, usdCurr));

// //Пример работы с return
// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return // при срабатывании функция останавливается
//     }
//     console.log('done');
// }
// test();

// //Тест по работе с return
// function doNothing() { } //true
// console.log(doNothing() === undefined);

'use strict';

// Место для первой задачи //Привет, Антон
// function sayHello(user) {
//     return "Привет, " + user + "!";
// }
// const user = "Антон";
// console.log(sayHello(user));

// Место для первой задачи //Привет, Антон (ответ автора ++
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello("Alex"));

// Место для второй задачи
// function returnNeighboringNumbers(simpleNumber) {
//     const tempArr = [];
//     for (let i = 0; i < 3; i++) {
//         tempArr[i] = simpleNumber - 1;
//           simpleNumber++;
//     }
//     return tempArr;
// }

// const simpleNumber = 5;
// console.log(returnNeighboringNumbers(simpleNumber));

// Место для второй задачи //ответ атора +++++
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(5));


// Место для третьей задачи
// function getMathResult(sum, count) {
//     if (typeof(count) !== 'number' || count <= 0) {
//         return sum;
//     }

//     let str = '';

//     for (let i = 1; i <= count; i++) {
//         if (i === count) {
//             str += `${sum * i}`; // Тут без черточек в конце
//         } else {
//             str += `${sum * i}---`; // Это тоже самое, что и str = str + num * i + "---"
//         }
//     }
//     return str;
// }
// console.log(getMathResult(10, 5));

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);