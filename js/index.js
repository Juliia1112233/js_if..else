/*
let x = "hello js", a = 100, h = 5.5, c = true;
console.log(x, ' ', a, ' ', h, ' ', c);
alert(`1 Results: x=${x}, a=${a}, h=${h},c=${c}`);


//const color = red;

let s = 0.5 * a * h;
console.log('Площадь треугольника ',s);

a = prompt('Enter value a');
h = prompt('Enter value h');

*/

let userValue = 123;
let lastDigit, middleDigit, firstDigit;
lastDigit = userValue % 10;
middleDigit = userValue / 2 % 100;
firstDigit = userValue %  1000;

console.log(lastDigit);
console.log(middleDigit);
console.log(firstDigit);


res = 25 ** (1/2);
console.log('корень квадратный из 25  ', res);
res = 1000 ** (1/3);
console.log('куб. корень из 1000 ', res);

// унарный минус 
let x15 = 5;
res = -x15; // -5
// res -= -x15; // res = res - 5
console.log(res);

// оператор сравнения == сравнение по значению
// оператор строгое сравнение  === сравнение по типу и значению 

// проверка на четность 

let x16 = 10;
console.log(x16 % 2 == 0);

// условный оператор if
/*
if(условие){
    // действие 1
    // действие 2
    // действие 3
    // действие 4
}
*/

let userValue1;
userValue1 = prompt('Enter some value ');

/* 
равно == 
больше > 
меньше < 
больше или равно >= 
меньше или равно <= 
неравно != или !==
*/

if(userValue1 == 100){
    console.log('=100');
}

if(userValue1 > 100){
    console.log('>100');
}
if(userValue1 <= 100){
    console.log('<=100');
}
if(userValue1 != 100){
    console.log('!=100');
}

/*
if(условие){
    // действие 1
    // действие 2
    // ...
    } else {
        // действие 3
        // действие 4
        // ...
        }
*/

if (userValue1 % 2 == 0){
    console.log('Число является четным');
} else {
    console.log('Число является нечетным');
}


// let x = 100; 100%
// x*0.01 === 1%

// 3
let n = 200, m = 120, nPr = 1.20, mPr = 3.49;
resN = n * nPr;
resM = m * mPr;
res = resN + resM;
console.log(res);
//6
if (res > 500) {
    console.log(res*0.98);
}

// 4
let z;
z = prompt('Enter some value ');

if (z < 10){
    console.log(z*30);
} else {
    console.log(z-100);
}

//5
let sum = +prompt('2+2=?');
if (sum == 4){
    console.log('Yes');
} else {
    console.log('Noooo');
}

//7
let money = prompt('Enter your money')
let secondValue = money * 100 % 100.00;
alert(Math.round(money) + ' ' + 'грн' + ' ' + secondValue + ' ' + 'коп')