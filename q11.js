//Crie uma função que aceite um objeto endereco com propriedades como rua, cidade e país, e retorne uma string formatada com essas informações.

const funcao = (endereco) => {
    let {pais, estado, cidade, bairro, rua, numero} = endereco;
    return `Oi, esse  o meu endereço: ${pais}, ${estado}, ${cidade}, ${bairro}, ${rua}, ${numero}`;
}

const endereco = {
    pais: "Brasil",
    estado: "RN",
    cidade: "natal",
    bairro: "cohabinal",
    rua: "Capim Santo",
    numero: 123
};

console.log(funcao(endereco));