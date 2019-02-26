function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto : 0.1

    }
}

console.log(criarProduto('not', 211.22))
console.log(criarProduto('ipad', 201.22))