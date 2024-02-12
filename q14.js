//Crie uma função que utilize o operador spread para concatenar dois arrays.

const funcao = (...arrays) => {
  vetor = [...arrays[0], ...arrays[1]];
  return vetor
}

console.log(funcao([1, 2, 3, 4, 5], [6, 7, 8, 9, 0])); 