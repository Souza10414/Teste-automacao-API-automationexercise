import { CarrinhoDeCompras } from "../support/CarrinhoDeCompras";

Cypress.Commands.add("adicionarProdutoAoCarrinho", () => {
  const carrinho = new CarrinhoDeCompras();

  cy.get('img[src="/get_product_picture/2"]').should("be.visible");
  carrinho.buscarElemento('a[href="/product_details/2"]')(
    "contain.text",
    "View Product"
  );
  cy.get(".product-information").within(() => {
    carrinho.validarElemento("h2")("contain.text", "Men Tshirt");
    carrinho.validarElemento("p")("contain.text", "Category: Men > Tshirts");
    carrinho.validarElemento("Span")("contain.text", "Rs. 400");
    carrinho.validarElemento("p")("contain.text", "Availability: In Stock");
    carrinho.validarElemento("p")("contain.text", "Condition: New");
    carrinho.validarElemento("p")("contain.text", "Brand: H&M");
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
    carrinho.validarElemento('a[href="/product_details/2"]')(
      "contain.text",
      "Men Tshirt"
    );
    carrinho.validarElemento("p")("contain.text", "Men > Tshirts");
    carrinho.validarElemento("p")("contain.text", "Rs. 400");
  });
  cy.get(".cart_quantity").within(() => {
    carrinho.validarElemento(".disabled")("contain", "1");
  });
});
