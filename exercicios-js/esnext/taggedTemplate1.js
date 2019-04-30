// tagged temaplate - preocessar um template dentro de um função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situação = 'aprovado'
console.log(tag `${aluno} esta ${situação}.`)

