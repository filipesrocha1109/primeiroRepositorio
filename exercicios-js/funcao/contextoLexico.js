const valor = 'Global'

function minhaFucao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFucao()
}

exec()