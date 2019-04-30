// operador ... rest(juntar)/spred(espalhar)
// uasr rest com parametros de função

// usar spread com objeto

const funcionarios = {nome: 'maria', salario: 123.45}
const clone = {ativo:true, ...funcionarios}

console.log(clone)

// usar spread com array
const grupoA = ['Joao','Pedro','Gloria']
const gupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(gupoFinal)





