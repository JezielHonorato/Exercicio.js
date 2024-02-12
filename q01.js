//Crie uma função que receba um objeto produto com propriedades como nome, preço e quantidade, e retorne o valor total (preço * quantidade).

function calcularValorTotal(produto){
  return "Valor total = " + produto.quantidade * produto.preco;
};

let produto = {
  nome: "Picanha",
  preco: 650.00,
  quantidade: 1
};

console.log(calcularValorTotal(produto));