const soma  = function(x,y){
    return x + y
}

const imprimirResitado = function(a,b, operecao = soma){
    console.log(operecao(a,b))
}

imprimirResitado(3,4)

imprimirResitado(3,4, function(x,y){
    return x - y
})     

imprimirResitado(3,4 , (x,y) => x * y)

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}

pessoa.falar()