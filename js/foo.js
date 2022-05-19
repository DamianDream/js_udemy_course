'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello World');

//калькулятор
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(10, 3));
console.log(calc(12, 3));

//возврат в внешний мир
function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//класификация функций
const calc0 = (a, b) => a + b;

const calc1 = (a, b) => { return a + b };

console.log(calc0(2, 3));
console.log(calc1(3, 3));

//конвертор валют
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

//'use strict';
//конкертер с условной скидкой
const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr)
promotion(res);
// promotion(convert(500, usdCurr));

//Пример работы с return
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return // при срабатывании функция останавливается
    }
    console.log('done');
}
test();

//Тест по работе с return
function doNothing() { } //true
console.log(doNothing() === undefined);

