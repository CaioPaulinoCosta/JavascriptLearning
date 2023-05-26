function Cachorro (raca,patas,cor){
  this.raca = raca;
  this.patas =patas;  
  this.cor = cor;
  this.uivar = function(){
    console.log ("Auuuuu");
  }
}


let Husky = new Cachorro('Husky', 4, 'cinza');
Husky.uivar();