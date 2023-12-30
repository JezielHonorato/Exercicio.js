//Utilize async/await para fazer duas chamadas assíncronas sequenciais e exibir os resultados.

async function funcao() {
    console.log("Solicitando dados do servidor...");

    // Uma função que simula um atraso e depois resolve com dados simulados
    const simularAtraso = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                const dadosFicticios = { usuario: "Jeziel", idade: 18 };
                resolve(dadosFicticios);
            }, 2000); 
        });
    };

    try {
        const dados = await simularAtraso();
        console.log("Dados recebidos do servidor:", dados);
    } catch (erro) {
        console.error("Erro ao obter dados:", erro);
    }
}

funcao();