//Crie uma função que use a função de array map para transformar uma lista de números em uma lista de seus quadrados.

const funcao = (numeros) =>{
    let vetor = [];
    for (let i = 0; i < numeros.length; i++){
        vetor.push(numeros[i]*numeros[i]);
    }
    return vetor
};

const funcao2 = (numeros) => numeros.map(elemento => elemento * elemento);

console.log(funcao([1,2,3]))
console.log(funcao([1,2,3]))