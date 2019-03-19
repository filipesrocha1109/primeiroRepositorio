const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil:true},
    {nome: 'copo de vrido', preco:12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

/* console.log(produtos.filter(function(p){
    return p.preco > 15 && p.fragil == true
}))
*/
/* console.log(produtos.filter(function(p){
    return p.preco > 15 
}).filter(function(p){
    return p.fragil == true
}))
*/
const caro = produtos => produtos.preco > 500
const fragil = produtos => produtos.fragil == true
console.log(produtos.filter(fragil).filter(caro))

