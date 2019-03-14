const pilotos = ['vetel', 'alonço','raiconei', 'massa']
pilotos.pop() // retira o utimo elemento
console.log(pilotos)

pilotos.push('vestapen') // insere no array
console.log(pilotos)

pilotos.shift() // remove primeiro elemento 
console.log(pilotos) 

pilotos.unshift('hamilton') // insere no inicio
console.log(pilotos)

// splice pode adicionar ou remover elementos

pilotos.splice(2,0,'bottas','massa') // adicionar indice 2 (0 não remove)
console.log(pilotos)

pilotos.splice(3,1) // remover indice 3 (1, remove)
console.log(pilotos)

// slice novo array gerado

const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1 ,4) 
console.log(algunsPilotos2)




