const escola = 'Cod3r'

console.log(escola.charAt(4)) // buscar letra

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // subistitui todos numeros pela letra e
console.log(escola.replace(/\w/g, 'e')) // subistitui todos digitos pela letra e

console.log('Ana,Maria,Pedro'.split(',')) // insere e separa no Array e identifica o separador




