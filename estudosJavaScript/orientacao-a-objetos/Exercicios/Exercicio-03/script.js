class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Rua Joao Cluadino do Nascimento", "Jardim Flamboyant", "Ourinhos", "Sao Paulo");

console.log(endereco);

endereco.novaRua = "Rua Rio de Janeiro";
endereco.novoBairro = "Jardim America";
endereco.novaCidade = "Belo Horizonte";
endereco.novoEstado = "Minas Gerais";

console.log(endereco);