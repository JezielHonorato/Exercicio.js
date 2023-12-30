//Utilize setTimeout para criar um temporizador que exiba uma contagem regressiva no console a cada segundo, começando de 10.

const funcao = () => {
    let contagem = 10;

    function tick() {
        console.log(contagem);
        contagem = contagem -1;

        if (contagem > 0) {
            setTimeout(tick, 1000);
        } else {
            console.log("Temporizador concluído!");
        }
    }

    tick();
};

funcao();
