
const pessoa = {
    nome : 'ana',
    idade : 5,
    endereco : {
        logradouro : ' rua abc',
        numero : 100
    }

}

// retirara variaveis do escopo
const { nome, idade, endereco} = pessoa 


/*console.log(nome, idade )
console.log(endereco)
*/
const { nome: n, idade: i, endereco : e} = pessoa

console.log('nome :',n,'idade: ',i,'endereco: ',e)

const {sobrenome, bemHumorada = 'amanda'} = pessoa

console.log(sobrenome, bemHumorada)



const [a] = [10]

console.log(a)


const [n1,n2,n3,n4 = 0] = [10,9,8]

console.log(n1,n2,n3,n4)


function rand({min = 0, max = 100}){

    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor)
}
const obj = { max:50, min:40}

console.log(rand(obj))   

console.log(rand({min: 955}))
//console.log(rand({}))


function rand1([min = 0 , max = 1000]){
    if (min>max) [min, max] = [max, min]
      const valor1 = Math.random() * (max - min) + min
        return Math.floor(valor1)

 
}

console.log(rand1([50,40])) 
console.log(rand1([922])) 











