// let e const

{
    var a = 2
    let b =3
    console.log(b) // let dentro do bloco
}
console.log(a) // var global

// Template String ---> uniao com objeto e quebra de linha

const produto = 'ipad'
console.log(`${produto}
é
caro`) 

// destructuring 

const [l, e , ...tras] = "cod3br"

console.log(l,e,tras)

const [x,y] = [1,2,3]
console.log(x,y)

const [z, ,t] = [1,2,3]
console.log(z,t)

const {idade : i, nome : n} = {nome: 'ana', idade:9}
console.log(i,n)

