//Crie uma função que receba dois objetos pessoa1 e pessoa2 e retorne verdadeiro se elas tiverem a mesma idade e falso caso contrário.

const compararPessoas = (pessoa1, pessoa2) =>{
    return pessoa1.idade === pessoa2.idade;
};

console.log(compararPessoas(pessoa1, pessoa2));