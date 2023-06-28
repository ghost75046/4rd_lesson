//Number
/*
const num =13 //integer
const float =13.13 //float
const pow =10e3
console.log(pow)

console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER )
console.log('Math.pow 53',Math.pow(2,53)-1)
console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER )
console.log('MAX_VALUE',Number.MAX_VALUE)
console.log('MIN_VALUE',Number.MIN_VALUE)
console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
console.log('2 / 0',2 / 0)
console.log(Number.NaN)
console.log(typeof NaN)
const weird = 2 / undefined
console.log(isNaN(weird))
console.log(isNaN(13))
console.log(isFinite(Infinity))
console.log(isFinite(13))

const stringInt = '13'
const stringFloat = '13.13'
console.log(Number.parseInt(stringInt)+2)
console.log(Number(stringInt)+2)
console.log(+stringInt+2)
console.log(Number.parseFloat(stringFloat)+2)

console.log(0.4+0.2)
console.log(2/5+1/5)
console.log(parseFloat((0.4+0.2).toFixed(1)))

*/
//BigInt
/*
console.log( -9007199254740991999999n - 900719925474099199999n)
//console.log( 9007199254740991999999.124124n) // error
//console.log(10n -4)// error
console.log(parseInt(10n) -4)
console.log(10n - BigInt(4))
console.log(5n /2n)

*/
// 3 Math

console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5,3))
console.log(Math.abs(-42))
console.log(Math.max(1,2,24,4,5))
console.log(Math.min(1,2,24,4,5))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))
console.log(Math.random())


// 4 Example

function getRandomBetween(min,max){
    return Math.floor(Math.random()*(max - min+1) + min)
}

console.log(getRandomBetween(10, 42));

