//Задача №1
//Конструктор Promise
//Каким будет вывод этого фрагмента кода? 

console.log('start')

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})

console.log('end')

/* 
The result is:

1. start
2. 1
3. end 
*/

//Задача №2: .then()
//Каким будет вывод этого фрагмента кода? 

console.log('start')

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})

promise1.then((data) => {
    console.log(data)
})

console.log('end')

/* 
The result is:

1. start
2. 1
3. end 
4. 2
*/

//Задача №3: .resolve()
//Каким будет вывод этого фрагмента кода? 

console.log('start')

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
})

promise1.then((data) => {
    console.log(data)
})

console.log('end')

/* 
The result is:

1. start
2. 1
3. 3 
4. end
5. 2
*/

//Задача №4: .resolve()
//Каким будет вывод этого фрагмента кода? 

console.log('start')

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})

promise1.then((data) => {
    console.log(2)
})

console.log('end')

/* 
The result is:

1. start
2. 1
3. end
*/

//Задача №5: Нечто, сбивающее с толку
//Каким будет вывод этого фрагмента кода? 

console.log('start')

const fn = () => (new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
}))

console.log('middle')

fn().then((data) => {
    console.log(data)
})

console.log('end')

/* 
The result is:

1. start
2. middle
3. 1
4. end
5. success
*/

//Задача №6: с Fulfilling Promise
//Каким будет вывод этого фрагмента кода?

console.log('start')

Promise.resolve(1).then((data) => {
    console.log(data)
})

Promise.resolve(2).then((data) => {
    console.log(data)
})

console.log('end')

/* 
The result is:

1. start
2. end
3. 1
4. 2
*/

//Задача №7: setTimeout vs Promise
//Каким будет вывод этого фрагмента кода?

console.log('start')

setTimeout(() => {
    console.log('setTimeout')
})

Promise.resolve().then(() => {
    console.log('resolve')
})

console.log('end')

/* 
The result is:

1. start
2. end
3. resolve
4. setTimeout
*/


//Задача №8: Микрозадачи смешиваются с макрозадачами
//Каким будет вывод этого фрагмента кода?

const promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log('timerStart')
        resolve('success')
        console.log('timerEnd')
    }, 0)
    console.log(2)
})

promise.then((data) => {
    console.log(data)
})

console.log(4)

/* 
The result is:

1. 1
2. 2
3. 4
4. timerStart
5. timerEnd
6. success
*/


//Задача №9: приоритезировать микрозадачи и макрозадачи
//Каким будет вывод этого фрагмента кода?

const timer1 = setTimeout(() => {
    console.log('timer1')

    const promise1 = Promise.resolve().then(() => {
        console.log('promise1')
    })
}, 0)

const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0)

/* 
The result is:

1. timer1
2. promise1
3. timer2
*/


//Задача №10: Final
//Каким будет вывод этого фрагмента кода?

console.log('start')

const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
})

const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end')

/* 
The result is:

1. start
2. end
3. promise1
4. timer1
5. promise2
6. timer2
*/