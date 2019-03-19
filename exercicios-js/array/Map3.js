Array.prototype.map2 = function(calback){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        newArray.push(calback(this[i],i,this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome": "caderno", "preco":13.9}',
    '{"nome": "kit lapis", "preco":41.22}',
    '{"nome": "caneta", "preco":7.5}'
]

// retornar apenas preços

const paraObj = json => JSON.parse(json)

const resultado = carrinho.map2(paraObj) // map para buscar ARRAY
console.log(resultado)

const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map2(paraObj).map2(apenasPreco) 
console.log('Apenas preco: '+resultado1) 