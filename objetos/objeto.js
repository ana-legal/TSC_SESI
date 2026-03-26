const aluno = {
    nome: "Ana",
    idade: 16,
    curso:"Desenvolvimento de Sistemas"

}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);


aluno.matricula = "2025A"; // Adicionar
aluno.idade = 18; // Alterar

delete aluno.curso; // Remover
console.log(aluno);