//Utilize destructuring para extrair as coordenadas x e y de um ponto representado por um objeto.

const funcao = (ponto) => {
  let {x, y} = ponto;
  return `(${x} ; ${y})`;
}

const ponto = {
  x: 10,
  y: -7
}

console.log(funcao(ponto));