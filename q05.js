//Escreva uma arrow function que calcule o quadrado de cada elemento em um array.

const funcao = (numeros) =>{
  let vetor = [];
  for (let i = 0; i < numeros.length; i++){
      vetor.push(numeros[i]*numeros[i]);
  }
  return vetor
};

console.log(funcao([1,2,3]))