const arr = [1,26,31,6,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
	return a-b;
}

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} inside array ${arr}`);
// });

// удаляет последний элемент из масива
// arr.pop();
// добавляет  элемент в конец масива
// arr.push(10);


// console.log(arr);

// for (let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// for (of) работает только с масивоподобными сущностями
// for (let value of arr){
// 	console.log(value);
// }

// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));