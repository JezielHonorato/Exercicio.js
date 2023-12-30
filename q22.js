//Utilize async/await para fazer duas chamadas assíncronas sequenciais e exibir os resultados.

const funcao = async (a, b) => {
    return await Promise.all([a, b]).then((numeros) => numeros.reduce((resultado, numeros) => resultado ** numeros));
};

const resposta = async () => {
    const resultado = await funcao(61, 65);
    console.log("O resultado é:", resultado);
};

resposta();