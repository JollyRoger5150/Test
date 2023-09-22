/*-----------83-1-2--(Два задания в одном массиве)-------*/

const ilya = {
    name : `Ilya`,
    age : 23,
    isAdmin : true,
    sayHello(name){
        console.log(`Hello ${name}`)
    }
}
ilya.sayHello(`Ilya`)

console.log(`Следующее задание`)
/*-----------83-3---------*/

const users = [
    {
        name: `alex`,
        age: 20,
        isAdmin: false,
    },
    {
        name: `john`,
        age: 25,
        isAdmin: true,
    },
    {
        name: `ann`,
        age: 21,
        isAdmin: false,
    },
    {
        name: `max`,
        age: 14,
        isAdmin: true,
    },
    {
        name: `george`,
        age: 18,
        isAdmin: false,
    }
]
let admins = 0
for (let i = 0; i < users.length;i++){
    if (users[i].isAdmin === true){
        admins = admins + 1;
        console.log (`There is ${admins} admins`)
    }
}
