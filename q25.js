//Crie uma função que retorne uma Promise que é resolvida após um tempo aleatório (entre 1 e 5 segundos) com a mensagem "Concluído com sucesso!".

const retornarPromise = () => {
	return new Promise((resolve, reject) => {
		let tempoAleatorio = Math.floor(Math.random() * 16);
		setTimeout(() => {
			resolve(1);
		}, tempoAleatorio*1000);
	});
};

retornarPromise().then(console.log);
