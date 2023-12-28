//Escreva uma função que receba um objeto contaBancaria com propriedades como saldo e taxa de juros. A função deve simular um mês de juros e retornar o novo saldo.

const funcao = (contaBancaria) => {
    let valorFinal = contaBancaria.saldo + (contaBancaria.saldo*contaBancaria.taxaDeJuros)
    return valorFinal
}

let contaBancaria = {
    saldo: 122,
    taxaDeJuros: 0.1
}

console.log(funcao(contaBancaria))