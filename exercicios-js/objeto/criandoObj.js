// usando notação literal
const obj1 = {}

console.log(obj1)
console.log('------------------')

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// função construtora

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco *(1-desc)
    }
}

console.log('-----------------------------------------')
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

console.log('-----------------------------------------')

// função factory

function criarFuncionario(nome,salarioBase,faltas,sifra='R$ '){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return sifra + (salarioBase/30)*(30-faltas)
        }
    }
}


const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

// uma função famosa que retorna objeto...

const fromJSON = JSON.parse('{"info": "sou um JSON"}')

console.log(fromJSON.info)