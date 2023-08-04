const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

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