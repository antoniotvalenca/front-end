function Conta(nome, sobrenome, agencia, conta, saldo){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

    Object.defineProperties(this, {
        agencia: {configurable: false,
            writable: false},
        conta: {configurable: false,
            writable: false}
    });
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`)
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.sacar = function(valor) {
        if(valor > this.saldo){
            console.log(`Saldo insuficiente: R$${this.saldo}`);
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
}

const conta1 = new Conta("Antonio", "Valença", "00", "01", 100);

console.log(conta1);
conta1.sacar(50);
console.log(conta1);
conta1.depositar(500);
console.log(conta1.verSaldo());