class EstadoPacote {
  constructor(nome, proximo) {
    this.nome = nome;
    this.proximo = proximo;
  }

  acao() {
    console.log(this.nome);
    return this.proximo || this;
  }
}


const entregue = new EstadoPacote("Pacote foi entregue ao destinatário!", null);
const saiuParaEntrega = new EstadoPacote("Pacote saiu para entrega.", entregue);
const emTransporte = new EstadoPacote("Pacote está em transporte.", saiuParaEntrega);
const recebido = new EstadoPacote("Pacote foi recebido no centro de distribuição.", emTransporte);

class Pacote {
  constructor(nome) { 
    this.nome = nome;
    this.estadoAtual = recebido;
  }

  
  avancar() {
    console.log(`${this.nome}: ${this.estadoAtual.nome}`);
    
    
    if (this.estadoAtual.proximo !== null) {
      this.estadoAtual = this.estadoAtual.proximo;
  
      this.avancar();
    }
  }
}


const pacotes = [
    new Pacote("Pacote do João"),
    new Pacote("Pacote da Maria")
];

console.log("Simulação de Rastreamento com Recursividade:\n");


for (const pacote of pacotes) {
    pacote.avancar();
}