for(let letra of "Cod3r"){
    console.log(letra)
}
console.log('---------------------end--------------------')
const assuntosEcma = ['map','set','promise']

for(let i in assuntosEcma){
    console.log(i)
}
console.log('---------------------end--------------------')

for(let assunto of assuntosEcma){
    console.log(assunto)
}
console.log('---------------------end--------------------')

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set',{abordado: true}],
    ['promise',{abordado: false}]
])

//conjunto
for (let assunto of assuntosMap){
    console.log(assunto)
}
console.log('---------------------end--------------------')

// chaves
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
console.log('---------------------end--------------------')

for(let valor of assuntosMap.values()){
    console.log(valor)
}
console.log('---------------------end--------------------')

// destruct
// sai do array  e junta
for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

console.log('---------------------end--------------------')

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}

console.log('---------------------end--------------------')
