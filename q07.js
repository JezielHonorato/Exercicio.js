//Crie uma arrow function que receba um array de strings e retorne um novo array com o comprimento de cada string.

const funcao = (palavras) => {
  vetor = []
  for(let i = 0; i < palavras.length; i++){
    vetor.push(palavras[i].length)
  }
  return vetor
}
console.log(funcao(["um", "dois", "tres", "cinco"]))