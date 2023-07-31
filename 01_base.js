// 1 Переменные
//camelCase
// const firstName = 'Vova'
//const age = 19 //number
//const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

//const if = 'mrkef' // err
// const withNum = '5'
//const 5withNum = 5 //err

//2 Мутирование 
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите вашу фамилию: ' )
// alert(firstName + ' ' +  lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 2002

// //const age = currentYear - birthYear


// const a = 10
// const b = 5

// let c = 32
//c = c + a
// c += a
// c -= a
// c *= a
// c /= a


// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)


// 4 Типы данных
// const isProgrammer = true
// const name  = 'Vova'
// const age = 19
// let x


// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// Приоритет оператора
// const fullAge = 18
// const birthYear = 2002
// const currentYear = 2021

// // > < >=
// const isFullAge =( currentYear - birthYear )>= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'ready' //ready, fail, pending

// if (courseStatus === 'ready'){
//     console.log('Курс уже готов')
// }else if (courseStatus === 'pending'){
//     console.log('В процессе разработки')
// }else {
//     console.log('Курс не получился')
// }

const isReady = false

// if(isReady){
//     console.log('Все готово!')
// }else{
//     console.log('Все не готово!')
// }

//Тернарные выражения
isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42//number
// const num2 ='42'//string

// console.log(num1 === num2)

// 7 БУлевая логика
//https://developer.mozilla.org/uk/docs/conflicting/Web/JavaScript/Reference/Operators_f71733c8e7001a29c3ec40d8522a4aca#%d0%9b%d0%be%d0%b3%d1%96%d1%87%d0%bd%d0%b5_%d0%86


//8 Функции
// function calculateAge(year){
//     return 2021 - year
// }

// // const myAge = calculateAge(1993)
// // const myAge = calculateAge(2010)
// // const myAge = calculateAge(2002)

// function logInfoAbout(name, year){

//     const age = calculateAge(year)

//     if (age > 0){
//         console.log('Человек по имени ' + name + ' сейчас имеет ' + age)
//     }else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Vova', 8292)

//9 Массивы
// const cars = ['Мазда','Мерседес','Форд']
// console.log(cars.length)

// console.log(cars[1])

// cars[0] = 'Porshe'


// cars[cars.length] = 'Mazda'
// console.log(cars)

//10 Циклы
// const cars = ['Мазда','Мерседес','Форд','Porshe']

// for(let i = 0;i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }

// for(let car of cars){
//     console.log(car)
// }

//11 Объекты
const person = {
    firstName: 'Vova',
    lastName:'Shpak',
    year: 2002,
    languages:['Ru','En','Ukr'],
    hasWife:false,
    greet: function(){
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()
