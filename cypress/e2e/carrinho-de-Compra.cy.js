class carrinhoDeCompras {
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

describe("Carrinho de compras", () => {
  beforeEach(() => cy.visit("/"));

  it("Deve adicionar produto no carrinho", () => {
    const carrinho = new carrinhoDeCompras();

    cy.get('img[src="/get_product_picture/1"]').should("be.visible");
    carrinho.buscarElemento('a[href="/product_details/1"]')(
      "contain.text",
      "View Product"
    );
    cy.get(".product-information").within(() => {
      carrinho.validarElemento("h2")("contain.text", "Blue Top");
      carrinho.validarElemento("p")("contain.text", "Category: Women > Tops");
      carrinho.validarElemento("Span")("contain.text", "Rs. 500");
      carrinho.validarElemento("p")("contain.text", "Availability: In Stock");
      carrinho.validarElemento("p")("contain.text", "Condition: New");
      carrinho.validarElemento("p")("contain.text", "Brand: Polo");
    });

    carrinho.buscarElemento(".btn.btn-default.cart")("contain", "Add to cart");
    cy.get(".modal-content").within(() => {
      carrinho.validarElemento("h4")("be.visible", "Added!");
      carrinho.validarElemento("p")(
        "contain.text",
        "Your product has been added to cart."
      );
      cy.get('a[href="/view_cart"]').should("contain", "View Cart").click();
    });

    carrinho.validarElemento(".active")("contain", "Shopping Cart");
    cy.get(".table-responsive.cart_info").within(() => {
      carrinho.validarElemento('a[href="/product_details/1"]')(
        "contain.text",
        "Blue Top"
      );
      carrinho.validarElemento("p")("contain.text", "Women > Tops");
      carrinho.validarElemento("p")("contain.text", "Rs. 500");
    });

    cy.get(".cart_quantity").within(() => {
      carrinho.validarElemento(".disabled")("contain", "1");
    });
  });

  it("Deve adicionar produto no carrinho com um produto ja existente", () => {
    cy.adicionarProdutoAoCarrinho();

    const carrinho = new carrinhoDeCompras();
    cy.get(".fa.fa-home").click();

    cy.get('img[src="/get_product_picture/3"]').should("be.visible");
    carrinho.buscarElemento('a[href="/product_details/3"]')(
      "contain.text",
      "View Product"
    );

    cy.get(".product-information").within(() => {
      carrinho.validarElemento("h2")("contain.text", "Sleeveless Dress");
      carrinho.validarElemento("p")("contain.text", "Category: Women > Dress");
      carrinho.validarElemento("Span")("contain.text", "Rs. 1000");
      carrinho.validarElemento("p")("contain.text", "Availability: In Stock");
      carrinho.validarElemento("p")("contain.text", "Condition: New");
      carrinho.validarElemento("p")("contain.text", "Brand: Madame");
    });

    carrinho.buscarElemento(".btn.btn-default.cart")("contain", "Add to cart");
    cy.get(".modal-content").within(() => {
      carrinho.validarElemento("h4")("be.visible", "Added!");
      carrinho.validarElemento("p")(
        "contain.text",
        "Your product has been added to cart."
      );
      cy.get('a[href="/view_cart"]').should("contain", "View Cart").click();
    });

    carrinho.validarElemento(".active")("contain", "Shopping Cart");
    cy.get(".table-responsive.cart_info").within(() => {
      carrinho.validarElemento('a[href="/product_details/3"]')(
        "contain.text",
        "Sleeveless Dress"
      );
      carrinho.validarElemento("p")("contain.text", "Women > Dress");
      carrinho.validarElemento("p")("contain.text", "Rs. 1000");
    });

    cy.get(".cart_quantity .disabled")
      .should("have.length", 2)
      .each(($btn) => {
        cy.wrap($btn).should("have.text", "1");
      });

    cy.get("tbody").within(() => {
      cy.get("#product-2").should("be.visible");
      cy.get("#product-3").should("be.visible");
    });
  });

  it("Deve deletar um produto do carrinho", () => {
    cy.adicionarProdutoAoCarrinho();

    const carrinho = new carrinhoDeCompras();

    cy.get(".cart_quantity_delete").trigger("mouseover");
    cy.get(".cart_quantity_delete").click();

    carrinho.validarElemento("p")(
      "contain.text",
      "Cart is empty! Click here to buy products."
    );
  });
});
