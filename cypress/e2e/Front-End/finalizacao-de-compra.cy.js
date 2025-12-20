import { faker } from '@faker-js/faker'

describe('Finalização de compra com Faker', () => {

    beforeEach(() => {
        // Login (pré-condição)
        cy.visit('/login')

        cy.get('[data-qa="login-email"]').type('well@tests.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Logged in as').should('be.visible')
    })

    it('Deve finalizar a compra com sucesso usando dados fake', () => {

        // Adiciona produto ao carrinho
        cy.contains('Add to cart').first().click()
        cy.contains('Continue Shopping').click()

        // Vai para o carrinho
        cy.contains('Cart').click()
        cy.url().should('include', '/view_cart')

        // Checkout
        cy.contains('Proceed To Checkout').click()
        cy.url().should('include', '/checkout')

        // Comentário usando Faker
        const comentario = faker.lorem.sentence()
        cy.get('textarea[name="message"]').type(comentario)

        // Finaliza pedido
        cy.contains('Place Order').click()

        // Dados de pagamento (fake)
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2028')

        cy.get('[data-qa="pay-button"]').click()

        // Validação final
        cy.contains('Order Placed!').should('be.visible')
        cy.contains('Congratulations! Your order has been confirmed!')
            .should('be.visible')
    })

})