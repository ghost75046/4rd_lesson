/* var name = 'Vladilen'
const lastName = 'Minin'
let age = 26
name = 'Vlad'
*/

const isReady = true

isReady ? console.log('success') : console.log('fail')

//console.log(isFullAge)
/*
true && false
true && true
false && true
false && false
*/
//8 Функции

function calculateAge(year){
    return 2023-year
}

//console.log(calculateAge(1999))
/*
function logInfoAbout(name, year,sex) {
    const age = calculateAge(year)
    if (age > 0 $$ sex ==='male') {
        console.log('человеку по имени ' + name + ' сейчас ' + age + ' лет(годиков)')
    }else{
        console.log('подумай еще')
    }

}

logInfoAbout('Vlad',2222)
*/
//

function logInfoAbout(name, year,sex) {
    const age = calculateAge(year)
    if (age > 0 && sex ==='male') {
        console.log(name + 'у сейчас ' + age + ' лет(годиков)')
    }else if (age > 0 && sex ==='female') {
        console.log(name + 'е сейчас ' + age + ' лет(годиков)')
    }
    else{

        console.log('подумай еще (глянь в свидетельство о рождении)')
    }

}

logInfoAbout('Влад',1999,'male')

//9 Массивы

const watches = ['Omega', 'Seiko','Casio','Audemars Piguet']
//const watches = new Array('Omega', 'Seiko','Casio')
/*
console.log(watches[2])
console.log(watches.length)

watches[0] = 'Rolex'
watches[3] = 'Vostok'
console.log(watches)
*/

//10 Циклы


/*
for (let i = 0; i < watches.length; i++){
    //console.log(i)
    const watch = watches[i]
    console.log(watch)
}
*/

for (let watch of watches){
    console.log(watch)
}

//11 Объекты

const person = {
    firstName: 'Vlad',
    lastName:'Savenkov',
    year:1999,
    languages:['Ru','En','JS'],
    hasWife: true,
    greet: function (){
        console.log('greet from person')
    }


}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
person.firstName ='Vladislav'
person.isProgrammer= true
console.log(person)
person.greet()