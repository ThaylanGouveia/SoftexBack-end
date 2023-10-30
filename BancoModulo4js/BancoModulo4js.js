/* 
Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência. Seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
-buscar saldo deve retornar o valor atual do saldo;
-para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
-para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
-o número da conta deve retornar o número da conta.
*/

class Banco {
    constructor(conta, saldo, tipoDeConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoDeConta = tipoDeConta;
        this.agencia = agencia;
    }

    buscarSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    numeroDaConta() {
        return this.conta;
    }
}

var minhaConta = new Banco('123456', 1000, 'Corrente', '001');
console.log(minhaConta.buscarSaldo());
minhaConta.deposito(500);
console.log(minhaConta.buscarSaldo());
minhaConta.saque(200);
console.log(minhaConta.buscarSaldo());
console.log(minhaConta.numeroDaConta());
