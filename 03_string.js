//1 String
// const name = 'Вова'
// const age = 19

// function getAge(){
//     return age
// }

//const output = 'Привет, меня зовут '+ name + ' мой возраст: ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет`

// console.log(output)
// const output = `
//     <div>This is div</div>
//     <p>This is p</p>
// `

// const name1 = 'Вова'
// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.charAt(2))
// console.log(name1.indexOf('с'))
// console.log(name1.toUpperCase().startsWith('ВОВА'))
// console.log(name1.startsWith('Вова'))
// console.log(name1.endsWith('ва'))
// console.log(name1.repeat('3'))
// const string = '   password    '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age){
    if (age < 0){
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Вова'
const personName2 = 'Максим'
const personAge = 19
const personAge2 = -19

const output = logPerson`Имя ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)