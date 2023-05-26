const concessionaria = {
  carro: 'N/A',
  marca: 'N/A',
  cor: 'N/A',
  preco: 'N/A',

  setCarro: function(carro) {
    this.carro = carro;
  },


  getCarro: function(){
    return "Nome: " + this.carro;
  },

  setMarca: function(marca) {
    this.marca = marca;
  },


  getMarca: function(){
    return "Marca: " + this.marca;
  },

  setCor: function(cor) {
    this.cor = cor;
  },


  getCor: function(){
    return "Cor: " + this.cor;
  },

  setPreco: function(preco) {
    this.preco = preco;
  },


  getPreco: function(){
    return "Preço: " + this.preco;
  },

}

concessionaria.setCarro('Rx7');
console.log(concessionaria.getCarro());

concessionaria.setMarca('Mazda');
console.log(concessionaria.getMarca());

concessionaria.setCor('Vermelho');
console.log(concessionaria.getCor());

concessionaria.setPreco('R$ 800.000.00');
console.log(concessionaria.getPreco());

