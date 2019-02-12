const valores = [7.7,6.3,8.9,8]

console.log(valores[0], valores[3])

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o ultimo

delete valores.pop()