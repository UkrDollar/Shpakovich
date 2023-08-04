const str = 'tEst';
const arr = [1,2,4];

console.log(str.length);
console.log(arr.length);

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[2]);


const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world!';

//slice - вырезать часть строки по индексам
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
// тоже самое, только первый параметр может быть больше чем второй, не принимает - значения
console.log(logg.substring(6, 11));
// substr - второй аргумент длинна
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = '12.7px';
console.log(parseInt(test));
console.log(parseFloat(test));


