import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes // o ReadonlyArray retorna uma lista somente leitura, pois não queremos modificar negociações pq é private!
  }

}
