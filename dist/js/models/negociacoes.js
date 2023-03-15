export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // o ReadonlyArray retorna uma lista somente leitura, pois não queremos modificar negociações pq é private!
    }
}
