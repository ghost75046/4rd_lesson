
/*
const name = 'Влад'
//console.log(typeof name)

const age=23

function getAge(){
    return age
}

*/
//const output = 'Привет, меня зовут '+ name + ' и мой возраст ' + age + ' лет'
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A':'B'} лет`
//console.log(output)

/*
const output =`
<div>This is div</div>
<p>this is p</p>
`
console.log(output)
*/

/*
const name = 'Влад'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('ла')) //показывает позицию символов начиная с нуля
console.log(name.toLowerCase().startsWith('вл'))
console.log(name.endsWith('д'))
const string= '       pass        word        '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())
*/

function logPerson(s, name, age){
    console.log(s,name,age)
    if (age < 0){
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Vlad'
const personName2 = 'Sergey'
const personAge = 23
const personAge2 = -23
const output = logPerson`Имя: ${personName} Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2} Возраст: ${personAge2}!`
console.log(output)
console.log(output2)

