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