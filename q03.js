//Crie uma função que receba um array de objetos representando alunos, cada um com propriedades como nome, nota1 e nota2. A função deve calcular a média de cada aluno e retornar um novo array de objetos com os nomes e médias.

const funcao = (alunos) =>{
  let vetor = [];
  for (let i = 0; i < alunos.length; i++){
    vetor.push(alunos[i].nome); 
    vetor.push((alunos[i].nota1+alunos[i].nota2)/2);
  }
  return vetor
};

let aluno1 = {
  nome: "Jeziel",
  nota1: 10,
  nota2: 10
};

let aluno2 = {
  nome: "Honorato",
  nota1: 5,
  nota2: 5
};

console.log(funcao([aluno1, aluno2]));