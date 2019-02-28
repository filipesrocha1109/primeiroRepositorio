// cadeia de prototipos (prototype chain)

Object.prototype.attr0 = 'z' // tudo aponta pro objct
const avo = {attr1:'a'}
const pai = { __proto__: avo, attr2: 'b'}
const filho = {__proto__:pai, attr3: 'c'}

console.log(filho.attr0) // busca attr do avo

carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const ferrari ={
    modelo:'f40',
    velMax: 320 // shadowing

}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

