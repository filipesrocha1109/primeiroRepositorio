const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    },{
        nome: 'ana',
        nota: 9.3
    }]
},{
    nome: 'turma m2',
    alunos:[{
        nome: 'rebeca',
        nota: 8.9
    },{
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = alunos => alunos.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)


const nota1 = escola.map(getNotaDaTurma)

console.log(nota1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flapMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flapMap(getNotaDaTurma)

console.log(notas2)