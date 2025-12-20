import { faker } from '@faker-js/faker'

describe('Back-End - Login e Pesquisa de Produtos', () => {

    it('Deve realizar login com sucesso', () => {

        cy.api({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: 'teste@teste.com',
                password: '123456'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Deve pesquisar produtos com sucesso', () => {

        const produtosValidos = ['top', 'jeans', 'tshirt']
        const produto = faker.helpers.arrayElement(produtosValidos)

        cy.api({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product: produto
            }
        }).then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)

            expect(body).to.have.property('products')
            expect(body.products).to.be.an('array')
            expect(body.products.length).to.be.greaterThan(0)

        })
    })

})

