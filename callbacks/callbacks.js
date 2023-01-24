const data = [
    {
        product: "Coca cola",
        type: "Drink",
        cost: 2.47,
        money: "Dollar",
        moneyType: "Cash",
    },
    {
        product: "Fuse Tea",
        type: "Drink",
        cost: 3,
        money: "Dollar",
        moneyType: "Cash",
    },
    {
        product: "Agario",
        type: "Drink",
        cost: 4,
        money: "Dollar",
        moneyType: "Cash",
    }
]

function showData(data, callback){
    callback(data, function(){
        console.log(1)
        callback(data, function(){
            console.log(2)
            callback(data, function(){
                console.log(3)
                callback(data)
            })
        })
    })
}

function callback(data){
    data.forEach((item) => console.log(`${item.product} ${item.cost}`))
}

showData(data, callback)
