//Crie um módulo que exporte uma função para calcular a média de um array de números.

const funcao = (numeros) => {
    let soma = 0.0;
    numeros.forEach(elemento => {
        soma += elemento;
    });
    return soma / numeros.length
};

console.log(funcao([1, 2, 3, 4, 5]));