const notas = [3.6, 3.2, 4.9, 5.3, 7.2, 7, 9.3]

// sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
    notasBaixas.push(notas[i])
    }
}

//console.log(notasBaixas)


// com callBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixa3 = notas.filter(nota => nota <7 )

console.log(` notas ${notasBaixa3}`)

