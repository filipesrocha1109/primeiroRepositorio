console.log(soma(4,5))// carreda função depois roda
console.log(sub(4,5)) // le-se conforme o codigo vai rodando
console.log(mult(4,5))// le-se conforme o codigo vai rodando

// function declaration

function soma(x,y){ 
    return x+y                        // COMUM
}

// function expression
const sub = function (x,y){          
    return x-y                        // COMUM
}

// named function expression

const mult = function mult (x,y){
    return x*y
}