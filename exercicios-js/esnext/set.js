// não aceita repetição, não idexada
const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corintias')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(`vasco existe ? ${times.has('vasco')}`)
times.delete('palmeiras')
console.log(times.has('palmeiras'))

const nomes = ['raquel','lucas', 'julia','lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)