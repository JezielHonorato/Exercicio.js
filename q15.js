//Escreva uma função que aceite um número variável de argumentos e retorne a média.

const funcao = (...numeros) => {
  media = 0;
  a = 0;
  for (i = 0; i < numeros.length; i++){
    media += numeros[i];
    a++
  };
  return media/a;
}

console.log(funcao(1, 2, 7, 9, 10, 23)); 