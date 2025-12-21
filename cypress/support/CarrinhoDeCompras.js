export class CarrinhoDeCompras {
  constructor() {}
  buscarElemento(elemento) {
    const clicar = (condicao, valor) =>
      cy.get(elemento).should(condicao, valor).click();
    return clicar;
  }
  validarElemento(elemento) {
    const validar = (condicao, assercoes) =>
      cy.get(elemento).should(condicao, assercoes);
    return validar;
  }
  digitarElemento(elemento) {
    const digitar = (digitar) => cy.get(elemento).type(digitar);
    return digitar;
  }
  selecionarElemento(elemento) {
    const selecionar = (valor) => cy.get(elemento).select(valor);
    return selecionar;
  }
}
