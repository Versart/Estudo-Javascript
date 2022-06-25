class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this._agencia = agencia
    this._numero = numero
    this._tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  get numero() {
    return this._numero
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this._saldo -= valor
    } else {
      console.log('Você não possui esse valor na conta')
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor
      return this._saldo
    } else {
      console.log('Valor inválido')
    }
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupanca'
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitaria'
  }

  sacar(valor) {
    if (this._saldo >= valor && valor <= 500) {
      this._saldo -= valor
    } else {
      console.log('Operação Inválida')
    }
  }
}
let contaCorrente = new ContaCorrente(1, 2, 0)

console.log(contaCorrente.depositar(1000))
contaCorrente.sacar(500)
contaCorrente.sacar(600)
console.log(contaCorrente.saldo)

console.log(contaCorrente.numero)
