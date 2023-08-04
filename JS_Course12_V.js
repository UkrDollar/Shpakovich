for (let i = 0; i < 3; i++){
	console.log(i);
	for (let j = 0; j < 3; j++){
		console.log(j);
    
	}
}
// елка
let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++){
	for (let j = 0; j < lines - i; j++){
		result +=' ';
	}
	// 2 * в правую сторону
	for (let j = 0; j < 2 * i + 1; j++){
		result +='*';
	}
	result += '\n';
}

console.log(result);

// first: for (let i = 0; i < 3; i++){
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++){
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++){
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);   
// 		}
// 	}
// }



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }

// console.log(result);

