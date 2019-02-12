for(var i = 1; i<10; i++){
   // console.log(i)
}

/// loop var

console.log('var vale:', i)

for(let i = 1; i<10; i++){
    //console.log(i)
}

console.log('let vale:', i)
// loop let 

const funcs =[]

for(let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()