const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 9:  case 10 : console.log('quadro de honras')
            break
        case 7: case 8 : console.log('aproved')
            break
        case 4: case 5: case 6:  console.log('recuperation')
            break
        case 0: case 1: case 2: case 3: console('reproved')
            break
        default :
        console.log('nota invalida')
    }
}

imprimirResultado(10)