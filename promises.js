let newPromise = new Promise((resolve, reject) => {
    let num = 0;
    setTimeout(() => {
        num === 0 ? resolve("Successfully resolved!") : reject("There happend some inner ERROR!")
    }, 2000)
})

newPromise.then((value) =>{
    console.log(value);
}).catch((error) => {
    console.log(error);
})