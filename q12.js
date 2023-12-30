//Utilize destructuring para extrair as partes inteira e decimal de um número.

const funcao = (numero) => {
    const [inteiro = 0, decimal = 0] = numero.toString().split('.').map((numero) => parseInt(numero));
    return `Numero inteiro: ${inteiro}, numero decimal ${decimal}`;
}

const pi = 3.14

console.log(funcao(pi))