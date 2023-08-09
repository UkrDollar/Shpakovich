const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

console.log(typeof(usdCurr));

function convert (amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
  
}

const res = convert(500, usdCurr); 

promotion(res);
convert(500, eurCurr);

function test (){
	for (let i = 0; i < 5; i++){
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done');
}

test();

function doNothing (){}
console.log(doNothing());

// function returnNeighboringNumbers(number) {
// 	number =[number-1, number, number+1];
// 	console.log(number);
// }

// returnNeighboringNumbers(5);


// function getMathResult(number, scale) {
// 	// first_step: while (number <= number * scale){
// 	// 	if(number === number * scale){
// 	// 		console.log(`${number}`);
// 	// 		break;
// 	// 	} else {
// 	// 		console.log(`${number}---`);
// 	// 		for(let i = 0; i < scale; i++){
// 	// 			number = number + (number * i);
// 	// 			continue first_step;
// 	// 		}
// 	// 	}	
// 	// }
// 	for(let i = 1; i <= scale; i ++){
// 		number = number * i;
// 		if (i === scale){
// 			console.log(`${number}`);
// 			break;
// 		} else{
// 			console.log(`${number}---`);
// 			continue;
// 		}
// 	}
// }
// getMathResult(5,3);

function getMathResult(num, times) {
	if (typeof(times) !== 'number' || times <= 0) {
		return num;
	}
	let str = '';
	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}

	return str;
}

getMathResult(5, 3);


// PRACTICE №7

// function calculateVolumeAndArea(value) {
// 	if(typeof (value) !== 'number' || value < 0 || !Number.isInteger(value)){
// 		console.log('Error!');
// 	} else {	
// 		const volume = value * value * value;
// 		const square = 6 * value * value;
// 		console.log(`Cube volume: ${volume}.\nTotal surface area: ${square}`);
// 	}
// }
// calculateVolumeAndArea('dsa');

// function getCoupeNumber(seatNumber) {
// 	if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
// 		console.log( 'Ошибка. Проверьте правильность введенного номера места');
// 	}

// 	if (seatNumber === 0 || seatNumber > 36) {
// 		console.log('Таких мест в вагоне не существует'); 
// 	}

// 	console.log(Math.ceil(seatNumber / 4)); 

// }

// getCoupeNumber(33);

// PRACTICE №8

// function getTimeFromMinutes(minutesTotal) {
// 	if(typeof(minutesTotal) == 'number' && minutesTotal >=0 && Number.isInteger(minutesTotal)){

// 		const hours = Math.floor(minutesTotal / 60);
// 		const minutes = minutesTotal % 60;

// 		let hoursStr = '';

// 		switch (hours) {
// 		case 0: 
// 			hoursStr = 'часов';
// 			break;
// 		case 1:
// 			hoursStr = 'час';
// 			break;
// 		case 2:
// 		case 3:
// 		case 4:
// 			hoursStr = 'часа';
// 			break;
// 		default:
// 			hoursStr = 'часов';
// 		}

// 		return(`Это ${hours} ${hoursStr} и ${minutes} минут`); 

// 	} else {
// 		return ('Ошибка, проверьте данные');
// 	}
// }

// getTimeFromMinutes(50.4);


////////////////////////////////////////////////////////////

// function findMaxNumber(a, b, c, d) {
// 	if (typeof(a) == 'number' &&
//         typeof(b) == 'number' &&
//         typeof(c) == 'number' &&
//         typeof(d) == 'number'){
// 		console.log(Math.max(a,b,c,d));
// 	} else {
// 		console.log('0');
// 	}
// }

// findMaxNumber(1, 24, 12, 11);

// PRACTICE №9

function fib(quantity) {
	if (typeof(quantity) == 'number' && Number.isInteger(quantity) && quantity >= 0){
		let result = '';
		let first = 0;
		let second = 1;

		for (let i = 0; i < quantity; i++) {
			if (i + 1 === quantity) {
				result += `${first}`;
				// Без пробела в конце
			} else {
				result += `${first} `;
			}

			let third = first + second;
			first = second;
			second = third;
		}
		return(result);
		
	} else {
		return('');
	}
}

fib(4);

