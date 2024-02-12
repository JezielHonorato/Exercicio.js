//Utilizando arrow function, escreva uma função chamada capitalizarTitulos que use o método map para transformar uma lista de títulos de livros (strings) em uma lista com cada palavra dos títulos capitalizada. Por exemplo, se a função receber o array ["o pequeno príncipe", "dom casmurro", "a metamorfose"], ela deve retornar ["O Pequeno Príncipe", "Dom Casmurro", "A Metamorfose"].

const capitalizarTitulos = (array) => {
  return array.map(titulo => titulo[0].toUpperCase() + titulo.substring(1, titulo.length));
}

const capitalizarTitulosa = (titulos) => {
  return titulos.map((titulo) => {
    const palavras = titulo.split(' ');
    const palavrasCapitalizadas = palavras.map((palavra) => {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });
  
  return palavrasCapitalizadas.join(' ');
  });
};

const titulosLivros = ["o pequeno príncipe", "dom casmurro", "a metamorfose"];
const titulosCapitalizados = capitalizarTitulos(titulosLivros);
console.log(titulosCapitalizados);