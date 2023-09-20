/*----------80-1----------*/
for (let c = 2; c <= 12; c = c + 2){
    console.log (c)
}

console.log (`Пробел,следующее задание`)
/*----------80-2----------*/
for (let e = 10;e >= 1; e = e - 1){
    console.log (e)
}


console.log (`Пробел,следующее задание`)
/*----------80-3.1----------*/

let w = 0
while (w<=12){
    w = w + 2
    console.log (w)
}


console.log (`Пробел,следующее задание`)
/*----------80-3.2----------*/

let z = 11
while ( z < 1 ){
    z = z - 1
}
console.log (z)


console.log (`Пробел,следующее задание`)
/*----------81-1----------*/

const numbers = [1,2,3,4,5,6,7,8,9,10]
for (let a = 1;a <= numbers.length; a = a + 2){
    console.log (numbers[a])
}

console.log (`Пробел,следующее задание`)
/*----------81-2----------*/

const rainbow = ['red','orange','yellow','green','blue','dark blue','purple']

for (let i = 7;i>=0;i = i - 1){
    console.log (rainbow[i])
}


console.log (`Пробел,следующее задание`)
/*----------82-1----------*/
const users = ['john','ann','alex','max']
let name = 'alex'
function helloFunction (name) {
    return `Hello ${name}!`
}
console.log (helloFunction(name))



console.log (`Пробел,следующее задание`)
/*----------82-2----------*/
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function biggerTen (array,item) {
    for (let n = 9; n <= num.length; n++){
        if (array[n] < item) {
        return `${item} больше 10-ти `
        }
    }
    return `${item} меньше 10-ти`
    
}
console.log (biggerTen(num,11) )






