class Carro {
    constructor (nome, modelo, ano, gasolinaRestante, cosumo, gasolinaGasta) {
        this.nome = nome;
        this.modelo = modelo;
        this.ano = ano;
        this.gasolinaRestante = gasolinaRestante;
        this.cosumo = cosumo;
        this.gasolinaGasta = gasolinaGasta;
    }

    dirigir(km){
        let litrosConsumidos = km / this.cosumo;
        this.gasolinaGasta = litrosConsumidos;
        this.gasolinaRestante -= litrosConsumidos;
    }

    getGasolinaRestante(){
        return this.gasolinaRestante;
    }

    getGasolinaGasta () {
        return this.gasolinaGasta;
    }

    setGasolina(gasolina){
        this.gasolinaRestante =+ gasolina;
    }

}

let c = new Carro("Fox", "1.0", "2021", 100, 7.5);

let gasolinaGasta = c.getGasolinaGasta();
let gasolinaRestante = c.getGasolinaRestante();

class PostoDeGasolina {
    
    constructor (precoGasolina, litroParaAbastecer, gasolinaAtualizada){
        this.precoGasolina = precoGasolina;
        this.litroParaAbastecer = litroParaAbastecer;
        this.gasolinaAtualizada = gasolinaAtualizada;
    }
    
    setLitroParaAbastecer (l){
        this.litroParaAbastecer = l;
    }

    getLitroParaAbastecer () {
        return this.litroParaAbastecer;
    }


    abasteceCarro(gasolinaResante){
        this.gasolinaAtualizada = gasolinaResante + this.litroParaAbastecer;
    }

    cobraAbastecimento(){
        let precoTotal = this.litroParaAbastecer * this.precoGasolina;
        return precoTotal;
    }


    atualizaGasolina(){
        let gasolinaAtualizada = this.gasolinaAtualizada;
        return gasolinaAtualizada;
    }
}

class DonoCarro {
    constructor(nome, snome, dinheiroCarteira) {
        this.nome = nome;
        this.snome = snome;
        this.dinheiroCarteira = dinheiroCarteira;
    }

    setDinheiroCarteira(dinheiro){
        this.dinheiroCarteira = dinheiro;
    }

    pagaAbastecimento(valorAbastecimento){
        this.dinheiroCarteira -= valorAbastecimento;
    }

    getDinheiroCarteiraAtualizado(){
        return this.dinheiroCarteira;
    }
}

let p = new PostoDeGasolina(5.75, 10);
let d = new DonoCarro("Caio", "Costa", "");
console.log(c);
d.setDinheiroCarteira(100);
console.log(d.getDinheiroCarteiraAtualizado());

c.dirigir(100);
console.log(c); 

p.abasteceCarro(gasolinaRestante);
console.log(p.cobraAbastecimento());

if (d.getDinheiroCarteiraAtualizado() < p.cobraAbastecimento()) {
    console.log("Você não tem dinheiro suficiente para abastecer seu veículo!");
} else {
    d.pagaAbastecimento(p.cobraAbastecimento());
}

c.setGasolina(p.atualizaGasolina());
console.log(c);

console.log(d.getDinheiroCarteiraAtualizado());



