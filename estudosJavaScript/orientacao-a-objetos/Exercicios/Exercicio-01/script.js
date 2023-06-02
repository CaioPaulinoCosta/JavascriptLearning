class Conta {
    constructor(saldo){
        this.saldo  = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }
    saquei(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saquei(500);

console.log(conta.saldo);

