const cars =['Mazda', 'Ford', 'BMW','Mercedes']


const fib = [1,1,2,3,5,8,13]


console.log(cars)

//Function
function addItemToEnd(){

}

//Method
/*
cars.push('Renault')

console.log(cars)

cars.unshift('Volga')

console.log(cars)

const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars)
*/

//console.log(cars.reverse())
//console.log(cars)


//const index = cars.indexOf('BMW')
//cars[index] = 'Porshe'
//console.log(cars)
/*
let findedPerson
for ( const person of people) {
    if (person.budget === 3500){
        findedPerson = person
    }

}

console.log(findedPerson)
*/
/*
const index = people.findIndex(function(person){
return person.budget === 3500
})

const person = people.find(function(person){
    return person.budget === 3500
})
*/

/*
const person = people.find(person => person.budget ===3500)
console.log(person)

const upperCaseCars = cars.map( car => car.toUpperCase())
console.log(upperCaseCars);

const pow2 = num => num ** 2

const sqrt = num => Math.sqrt(num)


const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(typeof pow2Fib)

console.log(pow2Fib)

*/
//console.log(cars.includes('Mazda'))
// Task 1

/*
const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)
*/

/*
const pow2 = num => num ** 2

const pow2Fib = fib.map(pow2)

const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(pow2Fib)
console.log(filteredNumbers)
*/

const people = [ {name:'Vlad',budget:4200},{name:'Elena',budget:3500},{name:'Vliktoria',budget:1700}]


const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {

        acc += person.budget

    return acc
},0)

console.log(allBudget)