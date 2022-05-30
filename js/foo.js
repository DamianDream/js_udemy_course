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

//Функция 1 из примера про замыкание
// let a = 3;
// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b);

//Функция 2 из примера про замыкание
// let val1 = 2;
// function multiplyThis(n) {
//     let ret = n * val1;
//     return ret;
// }
// let multiplied = multiplyThis(6);
// console.log('example of scope:', multiplied);

//Функция 3 из примера про замыкание (очень важно!)
// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

//Функция 4 из примера про замыкание

//Мой опыт по телу функции
// let sum = 0;
// const sumNew = function() {
//     sum = sum + 1;
//     return sum;
// };

// const sampleOne = sumNew();
// const sampleTwo = sumNew();
// const sampleThree = sumNew();
// console.log(sumNew(), sampleOne, sampleTwo, sampleThree);

//Функция 4 из примера про замыкание (авторский пример)
// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// } //8

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log(c1, c2, c3, increment());

// Дополнительный пример замыкания
// let c = 4;
// const addX = x => n => n + x;
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

//пример той же функции без стрелок
// let c = 4;
// function addX(x) {
//     return function (n) {
//         return n + x;
//     };
// }
// const addThree = addX(3); //Записываем в рюкзак 3
// let d = addThree(c); //работаем с телом функции им рюкзаком
// console.log('example partial application', d);


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
    
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
//     }
// }

// // start();

// const personalMovieDB = { //Главный обьект программы 
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Какой последний фильм вы посмотрели?", ""),
//             b = prompt("Как вы оцените фильм");
//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("Done");
//         } else {
//             console.log("Error");
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// // detectPersonalLevel();

// //мой вариант
// // function showMyDB() {
// //     if (personalMovieDB.private == false) {
// //         console.log(personalMovieDB); 
// //     }   
// // }
// // showMyDB();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB); 
//     }   
// }

// showMyDB(personalMovieDB.private);

// //мой вариант ответа
// // function writeYourGenres() {
// //     for (let i = 0; i < 3; i++) {
// //         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i +1}?`, "");
// //     }
// // }
// // writeYourGenres();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
//     }
// }

// writeYourGenres();

//функция вычесляет обьем и площадь полной поверхности куба 'Обьем куба: 125, площадь всей поверхности: 150'

//My answer
// function calculateVolumeArea(a) {
//     if (a == '' || a > -1) {
//     let volume = a * a * a;
//     let area = 6 * (a * a);
//     return `Обьем куба: ${volume}, Площадь всей поверхности: ${area}`;
//     } else {
//         return 'При вычислении произошла ошыбка';
//     }        
// }
// console.log(calculateVolumeArea(15));

//correct answer
// function calculateVolumeArea(length) {
//     if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
//         return 'При вычислении произошла ошыбка';
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     area = 6 * (length * length);
//     return `Обьем куба: ${volume}, Площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeArea(5));

//my answer
// function getCupeNumber(seat) {
//     if (typeof(seat) !== 'number' || !Number.isInteger(seat)) {
//         return 'Ошыбка. Проверте правильность введенного места';
//     } else if (seat <= 0 || seat > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     let cupe;
    
//     if (seat <= 4) {
//         cupe = 1;
//         return `Ваше купе номер: ${cupe}`;
//     } else if (seat <= 8) {
//         cupe = 2;
//         return `Ваше купе номер: ${cupe}`;        
//     }
// }
// console.log(getCupeNumber(4));

//correct answer
// function getCupeNumber(seat) {
//     if (typeof(seat) !== 'number' || !Number.isInteger(seat)) {
//         return 'Ошыбка. Проверте правильность введенного места';
//     } else if (seat <= 0 || seat > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     for (let i = 4; i <= 36; i = i+ 4) {
//         if (seat <= i) {
//             return `Ваше купе номер: ${Math.ceil(i / 4)}`;
//         }
//     }
// }
// console.log(getCupeNumber(1));

//Practice part two
// Место для первой задачи

//My answer (time sample)
// function getTimeFromMinutes(minutes) {
//     if (minutes <= 0 || typeof(minutes) != 'number') {
//         return 'Ошибка ввода';
//     }

//     let hoursText = 'часа';
//     let time = Math.trunc(minutes / 60);    

//     if (time === 1) {
//         hoursText = 'час';
//     } else if (time >= 5) {
//         hoursText = 'часов';
//     }

//     let hoursMinutes = minutes - (60 * time);
//     if (hoursMinutes == 0) {
//         return `Это ${time} ${hoursText}`;
//     }

//     return `Это ${time} ${hoursText} и ${hoursMinutes} минут`;
// }

// console.log(getTimeFromMinutes(180));

//Time answer Autor 
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }
//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
// console.log(getTimeFromMinutes(180));


// Место для второй задачи (max Numer of four)
//my answer number 1
// function findMaxNumber(a, b, c, d) {
//     if (typeof (a, b, c, d) != 'number'|| a, b, c, d == undefined) {
//         return 'Ошибка ввода';
//     }
//     if (b > a && b > c && b > d) {
//         return b;
//     } else if (c > a && c > b && c > d) {
//         return c;
//     } else if (d > a && d > b && d > c) {
//         return d;
//     } 
//     return a; 
// }
// console.log(findMaxNumber(2, 67, 6, 8));

// my update method with arrey
//sample with uniq numbers in arrey
// const array = [1, 2, 3, 1, 1, '1', '2', '1', true, false, true, null, undefined, null, null, undefined];
// const makeUniq = (arr) => {
//   const uniqSet = new Set(arr);
//   return [...uniqSet];
// }
// console.log(makeUniq(array));

//sample 2
// const array = [1, 2, 3, 1, 1, '1', '2', '1', true, false, true, null, undefined, null, null, undefined];
// const makeUniq = (arr) => [...new Set(arr)];
// console.log(makeUniq(array));

//my second variant NOT COMPLEAT
// function findMaxNumber() {
//     const arr = [...arguments]; 
//     // let argumentsLength = arguments.length;
//     // for (let i = 0; i < argumentsLength; i++) {
//     //     arr[i] = arguments[i];
//     // }
//     let maxNumber = [];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arr[i] <= arr[i + 1]) {
//         } for (let j = 0; j > i; j++) {
            
//         }
//         maxNumber[i] = arr[i];
//     }
//     return maxNumber;
// }
// console.log(findMaxNumber(2, 6, 8, 8));

//true answer
// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }
// console.log(findMaxNumber(1, 11, 6, 10.5));
// console.log(findMaxNumber(1, 5, '6', '10'));

//TASK with Fibonachi NUMBERS
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return '';
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }
// console.log(fib(10));


//Timeout of the function
// function first() {
//     //do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

//Callback sample 2

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//   console.log('Я прошел этот урок');
// };

// learnJS('JavaScript', done);

