let num = 20;

function showFirstMassage (text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMassage('Hello World!');
console.log(num);

// console.log(calc(4,5));

// // сначала код ищет функции и var
// function calc(a, b){
// 	return (a + b);
// }


function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);


//можно вызвать только после объявления
const logger = function () {
	console.log('Hello!');
};

logger();


//не имее контекста вызова
const calc = (a, b) =>{
	console.log('1');
	return a + b;
};

