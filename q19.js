//Crie um módulo que exporte uma função para verificar se um número é primo.

const funcao = (numero) => {
    if(numero < 2){
        return `O numero ${numero} nao e primo`;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return `O numero ${numero} nao e primo`;
        }
    }
    return `O numero ${numero} e primo`;
}

console.log(funcao(11))
