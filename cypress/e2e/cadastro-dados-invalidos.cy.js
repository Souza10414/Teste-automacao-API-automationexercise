import { faker } from '@faker-js/faker'

describe('Cadastro - Criação de conta com dados inválidos (bug)', () => {

    it('Deve criar conta e exibir mensagem de sucesso', () => {

        // Página de signup
        cy.visit('/signup')

        cy.get('[data-qa="signup-name"]').type(faker.person.fullName())
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()

        // Dados da conta
        cy.get('#id_gender1').check() // Mr
        cy.get('#password').type('123456')

        cy.get('#days').select('10')
        cy.get('#months').select('May')
        cy.get('#years').select('1995')

        // Dados pessoais
        cy.get('#first_name').type(faker.person.firstName())
        cy.get('#last_name').type(faker.person.lastName())

        // Endereço (com dados inválidos propositalmente)
        cy.get('#address1').type(faker.lorem.words(5))
        cy.get('#country').select('United States')
        cy.get('#state').type(faker.lorem.words(5))
        cy.get('#city').type(faker.lorem.words(5))
        cy.get('#zipcode').type(faker.lorem.words(5)) // inválido (BUG)
        cy.get('#mobile_number').type(faker.lorem.words(5)) // inválido (BUG)

        // Criar conta
        cy.get('[data-qa="create-account"]').click()

        // Valida sucesso
        cy.url().should('include', '/account_created')

        cy.contains(
            'Congratulations! Your new account has been successfully created!'
        ).should('not.be.visible')

        cy.contains(
            'You can now take advantage of member privileges to enhance your online shopping experience with us.'
        ).should('not.be.visible')

        cy.get('[data-qa="continue-button"]')
            .should('not.be.visible')
            .and('contain.text', 'Continue')

    })

})
