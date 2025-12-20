class carrinhoDeCompras {
    buscarElemento(elemento) {
        const clicar = (condicao, valor) => cy.get(elemento).should(condicao, valor).click()
        return clicar;
    };
    validarElemento(elemento) {
        const validar = (condicao, assercoes) => cy.get(elemento).should(condicao, assercoes);
        return validar;
    }
    digitarElemento(elemento) {
        const digitar = (digitar) => cy.get(elemento).type(digitar);
        return digitar;
    };
    selecionarElemento(elemento) {
        const selecionar = (valor) => cy.get(elemento).select(valor)
        return selecionar;
    };
};

describe('Carrinho de compras', () => {

    beforeEach(() => cy.visit("/"));

    it('Deve adicionar produto no carrinho', () => {
        const carrinho  = new carrinhoDeCompras();

        cy.get('img[src="/get_product_picture/1"]').should("be.visible");
        carrinho.buscarElemento('a[href="/product_details/1"]')("contain.text", "View Product");
        cy.get('.product-information').within(() => {
            carrinho.validarElemento('h2')("contain.text", "Blue Top");
            carrinho.validarElemento('p')("contain.text", "Category: Women > Tops");
            carrinho.validarElemento('Span')("contain.text", "Rs. 500");
            carrinho.validarElemento('p')("contain.text", "Availability: In Stock");
            carrinho.validarElemento('p')("contain.text", "Condition: New");
            carrinho.validarElemento('p')("contain.text", "Brand: Polo");
          });
        carrinho.buscarElemento('.btn.btn-default.cart')("contain", "Add to cart");
        cy.get('.modal-content').within(() => {
            carrinho.validarElemento('h4')("be.visible", "Added!");
            carrinho.validarElemento('p')("contain.text", "Your product has been added to cart.");
            cy.get('a[href="/view_cart"]').should("contain", "View Cart").click();
        });
        carrinho.validarElemento('.active')("contain", "Shopping Cart");
        cy.get('.table-responsive.cart_info').within(() => {
            const Seletor = ["Item", "Description", "Price", "Quantity", ]
            carrinho.validarElemento('a[href="/product_details/1"]')("contain.text", "Blue Top");
            carrinho.validarElemento('p')("contain.text", "Women > Tops");
            carrinho.validarElemento('p')("contain.text", "Rs. 500");  
        });
        cy.get('.cart_quantity').within(() => {
            carrinho.validarElemento('.disabled')("contain", "1");
        });
    });
});