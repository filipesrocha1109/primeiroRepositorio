const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome": "caderno", "preco":13.9}',
    '{"nome": "kit lapis", "preco":41.22}',
    '{"nome": "caneta", "preco":7.5}'
]

// retornar apenas preços

const paraObj = json => JSON.parse(json)

const resultado = carrinho.map(paraObj) // map para buscar ARRAY
console.log(resultado)

const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map(paraObj).map(apenasPreco) 
console.log('Apenas preco: '+resultado1) 