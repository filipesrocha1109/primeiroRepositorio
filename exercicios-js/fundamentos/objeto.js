const prod1 = {}
prod1.nome = 'celular'
prod1.preoco = 499.9
prod1['desconto legal'] = 0.4 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}