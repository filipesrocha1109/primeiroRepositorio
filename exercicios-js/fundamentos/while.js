function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0



//while(opcao != -1){

 //   opcao = getInteiroAleatorioEntre(-1,10)

   // console.log(` opção escolhida foi ${opcao} . `)


//}

//for (let i = 0; i <= 10; i++){
   // console.log(`i = ${i}`)
//}

const notas = [6.7, 7.4,8.3,9.1]

for (let i = 0; i < notas.length; i++){
    console.log(`i = ${notas[i]}`)
}