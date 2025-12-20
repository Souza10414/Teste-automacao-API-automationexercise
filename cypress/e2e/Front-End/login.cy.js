describe('Teste de login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('Deve logar com sucesso e redirecionar para a página correta', () => {

        cy.get('[data-qa="login-email"]').type('well@tests.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()

        // Confirma redirecionamento
        cy.url().should('eq', 'https://www.automationexercise.com/')

        // Confirma página logada
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')

    })
})
