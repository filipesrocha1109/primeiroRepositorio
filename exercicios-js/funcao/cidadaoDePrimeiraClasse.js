// Função em JS é First-Class Object (citizens)
// higth order function 

// criar de forma literal

function f1(){

}

/// armazenar em uma variavel

const f2 = function(){

}

// armazenar dentro de um array

const array = [function(a,b) {return a + b}, f1, f2 ]
console.log(array[0](2,3))

// armazenar em atrubutos de objeto
const obj = {}

obj.falar = function() { return 'opaa' }
console.log(obj.falar())

// passa ruma funçaõ com parametro

function run (fun){
    fun()
}

run(function(){console.log('executando')})

// uma função pode retornar/ conter uma função

function soma (a,b){
    return function (c){
        console.log( a + b + c)
    }
}
soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)
 
