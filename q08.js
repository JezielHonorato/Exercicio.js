//Escreva uma função que use a função de array filter junto com uma arrow function para criar um novo array contendo apenas os números pares de um array dado.

const funcao = (array) => {
    return array.filter((numero) => numero % 2 === 0);
}

console.log(funcao([1, 2, 3, 4, 5, 6]))