"use strict";

// let num = 50;
//первый цыкл
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

//второй цыкл
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

//третий цыкл
// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

//цыкл выполняется до определенного утановленного значения
//цыкл продолжается исключая определенный заданный шаг
// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//         for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

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

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//         for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 3; k++) {
//                 if (k === 2) continue first;
//                 console.log(`Third level: ${k}`);
//         }
//     }
// }

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//         for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 3; k++) {
//                 if (k === 2) break first;
//                 console.log(`Third level: ${k}`);
//         }
//     }
// }