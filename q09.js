//Crie uma função que aceite um objeto config como parâmetro, onde config tempropriedades como largura e altura, e retorne a área.

const funcao = (config) => {
    let {largura, altura} = config;
    return largura * altura;
};

let config = {
    largura: 14,
    altura: 45
};

console.log(funcao(config));