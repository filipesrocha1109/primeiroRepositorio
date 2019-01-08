const peso1 = 1.0
const peso2 = ('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliaçao1 = 9.871
const avaliaçao2 = 6.671

const total = avaliaçao1 * peso1 * avaliaçao2 * peso2

const media = total / (peso1 * peso2)

console.log(media.toFixed(2))
console.log(media.toFixed(2))  // em binario
console.log(typeof media)
console.log(typeof Number)