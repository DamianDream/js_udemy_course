"use strict";

// let i = 0;
// while (i < 3) {
//   alert( i );
//   i++;
// }

// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }

// let i = 3;
// while (i) alert(i--); //Фигурные скобки не требуются для тела цикла из одной строки

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3); //тело цикла выполнилось хотя бы один раз

// for (let i = 0; i < 3; i++) alert(i);

// let i = 0; // мы уже имеем объявленную i с присвоенным значением
// for (; i < 3; i++) { // нет необходимости в "начале"
//   alert( i ); // 0, 1, 2
// }

// let i = 0;
// for (; i < 3;) { //Можно убрать и шаг
//   alert( i++ );
// }

// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;
//   console.log(i); // 1, затем 3, 5, 7, 9
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// outer: for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//     }
// }
// alert('Готово!');

// let i = 2;
// for (; i <= 10; i++) {
//     if (i % 2 == !0) { // чет и нечет
//         console.log(i);
//     }
// }

//Заменить for на while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

// outer: for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     }
// }
// console.log('Готово!');

//Мое решение задачи
// outer: for (; ;) {
//     let input = +prompt("Введите число больше 100", "");
//     if (!input || input >= 100) break outer;
//     alert(`${input} не то число`);
// }

//Верный альтернативный ответ
// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

//Вывод просстых чисе!
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log(i); // простое число
// }

// "use strict";

//мой ответ
// let num = 5;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

//Ответ
//  for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

//мой ответ
// for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
// }

//Задача на четные числа
//Вариант первый
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i); // Пропускать сисло если остаток есть
// }

//Вариант второй
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) { //если остатка при делении не будет
//         console.log(i);
//     }
// }

//Переделать цыкл for в другой
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

//ответ из задания
// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) { //если остатка нету то мы +1 и пропускаем
//         i++;
//         continue;
//     } else { // если остаток был (нечет) выводим и +1
//         console.log(i);
//     }
//     i++;
// }

//Мой вариант с использованием переменной let
// let arr = [];
// for (i = 5; i <= 10; i++) {
//     arr +=i;
// }
// console.log(arr);

//Ответ из задания
// const arrayOfNumbers = [];
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

//Задания второго этапа!!!

// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//      for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     // Не трогаем
//     return result;
// }

// Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     // Не трогаем
//     return data;
// }

// Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }
    
//     // Не трогаем
//     return result;
// }

// Задача из предыдущего урока
//задачка 
// *
// **
// ***
// ****
// *****

// let result = "";
// const lengthNumber = 7;

// for (let i = 1; i < lengthNumber; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//Задания третьего этапа!!!
//1      *
//2     ***
//3    *****
//4   *******
//5  *********
//6 ***********

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

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