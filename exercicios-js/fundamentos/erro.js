function tratarErroELancar(erro){
    throw {
        nome : erro.name,
        msg: erro.msg,
        date: new Date,
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log('--------final--------')
    }
}


const obj = { name: 'roberto' }

imprimirNomeGritado(obj)
