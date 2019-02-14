function notas(nota) {

    //try{
    if (nota >= 7 & nota < 11) {
        console.log('parabens, voce foi aprovado, sua nota foi : ' + nota)
    } else if (nota < 7) {
        console.log('desculpe, voce foi reprovado, sua nota foi : ' + nota)
    } else {
        console.log('erro, nota invalida')
    }
}

//notas(10)
//notas(4)
//notas('and')


// constructor
Number.prototype.entre = function(inicio, fim){
    return this >= inicio  && this <= fim
}

const imprimirResultado = function(nota){
        if(nota.entre(9,10) ){
            console.log('quadro de honras')
        } else if(nota.entre(7, 8.99)){
            console.log('aprovado')
        } else if(nota.entre(4,6.99)){
            console.log('recuperação')
        } else if(nota.entre(0,3.99)){
            console.log('reprovado')
        }else{
            console.log('erro')
        }
}

imprimirResultado(7)