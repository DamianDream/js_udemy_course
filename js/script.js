"use strict";

//мой ответ
// let num = 5;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

//Ответ
//  for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }

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

//ответ
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

