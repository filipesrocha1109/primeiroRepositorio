const pai = {nome: 'pedro', corCabelo: 'preto'}

const filha = Object.create(pai)

filha.nome = 'Ana'

console.log(filha.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'bia', writable: false, enumerable: true}
})

// writable -> editavel ou não
// enumerable -> pode ou não ser numerado ou escrito

console.log(filha2.nome)
filha.nome = 'carla'

console.log(`${filha2.nome} te cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for(let key in filha2){
    console.log(key)
}

for(let key in filha2){
    filha2.hasOwnProperty(key) ?  // verifica a propriedade que tem de herança
         console.log(key) : console.log(`por herança ${key}`)
}