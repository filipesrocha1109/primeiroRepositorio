const prod1 ={
    nome: '...',
    preco: 45
}

const prod2 ={
    nome: '...',
    preco: 45
}

// ou uma factory

// simples

function criarPessoa(){
    return{
        nome : 'Ana',
        sobrenome : 'silva'
    }
}

console.log(criarPessoa())

