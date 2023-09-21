/*----------80-1----------*/
for (let c = 2; c <= 12; c = c + 2) {
    console.log(c)
}

console.log(`Пробел,следующее задание`)
/*----------80-2----------*/
for (let e = 10; e >= 1; e = e - 1) {
    console.log(e)
}


console.log(`Пробел,следующее задание`)
/*----------80-3.1----------*/

let w = 0
while (w <= 12) {
    w = w + 2
    console.log(w)
}


console.log(`Пробел,следующее задание`)
/*----------80-3.2----------*/

let z = 11
while (z < 1) {
    z = z - 1
}
console.log(z)


console.log(`Пробел,следующее задание`)
/*----------81-1----------*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,8,19,20]
    for (let b = 0; b <= numbers.length; b++ ){
        if (numbers[b] % 2 == 0 ){
            console.log (numbers[b])
        }
    }

console.log(`Пробел,следующее задание`)
/*----------81-2----------*/

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'dark blue', 'purple']

for (let i = 7; i >= 0; i = i - 1) {
    console.log(rainbow[i])
}


console.log(`Пробел,следующее задание`)
/*----------82-1----------*/
const users = ['john', 'ann', 'alex', 'max']
let name = 'alex'
function helloFunction(name) {
    return `Hello ${name}!`
}
console.log(helloFunction(name))



console.log(`Пробел,следующее задание`)
/*----------82-2----------*/
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function biggerTen(array) {
    for (let n = 0; n <= num.length; n++) {
        if (array[n] > 10) {
            console.log(array[n])
        }
    }


}
console.log(biggerTen(num))

/*----------82-3----------*/
let result = null
function calc(num1, num2, znak) {
    if (znak === `minus`) {
        result = num1 - num2
        console.log(result)
    }
    if (znak === `plus`) {
        result = num1 + num2
        console.log(result)
    }
    if (znak === `x`) {
        result = num1 * num2
        console.log(result)
    }
    if (znak === `%`) {
        result = num1 / num2
        console.log(result)
    }
} console.log(calc(10, 5, `%`))






