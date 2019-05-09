const tecnologias = new Map()
tecnologias.set('react', {framework : false})
tecnologias.set('angular',{framework : true})

console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123)) // esta presente no Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
