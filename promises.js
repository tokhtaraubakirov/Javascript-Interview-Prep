let newPromise = new Promise((resolve, reject) => { //Creating promise
    let num = 0;
    setTimeout(() => {
        num === 0 ? resolve("Successfully resolved! And I am third") : reject("There happend some inner ERROR!")
    }, 2000)
    console.log("Oups :)") //1
})

setTimeout(() => {
    console.log("I am fourth") //5
    setTimeout(() => {
        console.log("I am last") //6
    }, 400)
}, 4000)

newPromise.then((value) =>{ //Processing promise 4
    console.log(value)
}).catch((error) => {
    console.log(error)
})

setTimeout(() => console.log("I am second")) //3

console.log("I am first") //2


// Oups :)
// I am first
// I am second
// Successfully resolved! And I am third
// I am fourth
// I am last