const pessoa = {
    nome: 'ana',
    sobrenome : 'silva',
    idede : 29,
    peso : 64
}

for(atributo in pessoa){

    console.log(`${atributo} = ${pessoa[atributo]}`)
}