//Crie uma função que utilize o operador spread para criar uma cópia profunda de um objeto.

const funcao = (objeto) => {
  let copia = {...objeto};
  return copia
}

const objeto = {
  massa: "1kg",
  volume: "1m"
}

console.log(funcao(objeto))