// pessoa - > 123 -> {...}
const pessoa = {
nome: 'joao'
}

pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa <- 456 -> {...} 

//pessoa = {nome: 'ana'}

Object.freeze(pessoa) /// não consegue mais mexer nele

pessoa.nome = 'maria'

console.log(pessoa)


// OU

const pessoaConstante = Object.freeze({nome: 'JOAO'})
pessoaConstante.nome = 'maria' // não atribui por causa do FREEZE
console.log(pessoaConstante)