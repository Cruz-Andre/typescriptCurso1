import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new Negociacoes() // ou private negociacoes: Negociacoes = new Negociacoes()

  constructor() {
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  adiciona(): void { 
    const negociacao = this.criaNegociacao()
    console.log(negociacao)
    console.log(negociacao.volume)

    this.negociacoes.adiciona(negociacao)
    console.log(this.negociacoes.lista())

    this.limparFormulario()
  }

  criaNegociacao(): Negociacao {
    const regExp = /-/g
    const date = new Date(this.inputData.value.replace(regExp, ','))
    const quantidade = parseInt(this.inputQuantidade.value)
    const valor = parseFloat(this.inputValor.value)

    return new Negociacao(date, quantidade, valor)
  }

  limparFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()
  }
}

