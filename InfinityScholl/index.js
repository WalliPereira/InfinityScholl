let alunos = window.Number(prompt("Quantidade de alunos"))
let soma = 0 
let maiorNota = -Infinity
let menorNota = Infinity
let controlador = 1

while (controlador <= alunos ) {
    let nota = window.parseFloat(prompt(`Digite a nota do aluno ${controlador}º`))
    soma += nota

    if (nota > maiorNota) {
        maiorNota = nota
    } 
    
    if (nota < menorNota) {
        menorNota = nota
    }

    controlador++
}

let mediaDaTurma = soma / alunos

document.writeln(`A media da turma é: ${mediaDaTurma.toFixed(2)}`);
document.writeln(`, A maior nota da turma é: ${maiorNota}`);
document.writeln(`, A menor nota da turma é: ${menorNota}`);
