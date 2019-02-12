function imprimirSoma(a,b){

    console.log(a+b)

}

imprimirSoma(2,3)

imprimirSoma(2)


// FUNÇÃO COM RETORNO

function soma(a, b=0){

    return a+b
}

console.log(soma(1,2))

// funçao arrow

const soma1 = (a,b) => {
    return a+b
}

console.log(soma1(1,2))

const subitracao = (a,b) => a-b 

console.log(subitracao(5,3)) 

const imprimir2 = a => console.log(a)

imprimir2('legal')