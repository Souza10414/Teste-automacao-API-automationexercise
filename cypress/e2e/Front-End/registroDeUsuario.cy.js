const { faker} = require('@faker-js/faker');

class registroUsuario {
    buscarElemento(elemento) {
        const clicar = (condicao, valor) => cy.get(elemento).should(condicao, valor).click()
        return clicar;
    };
    digitarElemento(elemento) {
        const digitar = (digitar) => cy.get(elemento).type(digitar);
        return digitar;
    };
    selecionarElemento(elemento) {
        const selecionar = (valor) => cy.get(elemento).select(valor)
        return selecionar;
    };
};

describe("Registro de usuario", () => {

    beforeEach(() => cy.visit("/login"));

    it("Deve registar um usuario com sucesso", () => {
         const registro = new registroUsuario();
         const novoUsuario = {
            Nome: faker.person.firstName(),
            Email: faker.internet.email()
         };
         registro.digitarElemento('[data-qa="signup-email"]')(novoUsuario.Email);
         registro.digitarElemento('[data-qa="signup-name"]')(novoUsuario.Nome);
         registro.buscarElemento('[data-qa="signup-button"]')("contain", "Signup");

         const dadosUsuario = {
         firstname: faker.person.firstName(),
         lastname: faker.person.lastName(),
         password: faker.internet.password({ length: 10, memorable: true, pattern: /[A-Za-z0-9]/ }),
         birthDate: {
            day: faker.number.int({ min: 1, max: 31 }),
            month: faker.number.int({ min: 1, max: 12 }),
            year: faker.number.int({ min: 1955, max: 2025 }),
        },
         newsletter: faker.datatype.boolean(),
         offers: faker.datatype.boolean(),
         company: faker.company.name(),
         address: faker.location.streetAddress(),
         country: faker.location.country(),
         state: faker.location.state(),
         city: faker.location.city(),
         zipcode: faker.location.zipCode(),
         mobileNumber: faker.phone.number('+91 ##########')
         };
         registro.buscarElemento('#id_gender1')("have.value", "Mr");
         registro.digitarElemento('[data-qa="password"]')(dadosUsuario.password);
         registro.selecionarElemento('[data-qa="days"]')(dadosUsuario.birthDate.day.toString());
         registro.selecionarElemento('[data-qa="months"]')(dadosUsuario.birthDate.month.toString());
         registro.selecionarElemento('[data-qa="years"]')(dadosUsuario.birthDate.year.toString());    
         registro.digitarElemento('[data-qa="first_name"]')(dadosUsuario.firstname);
         registro.digitarElemento('[data-qa="last_name"]')(dadosUsuario.lastname);
         registro.digitarElemento('[data-qa="company"]')(dadosUsuario.company);
         registro.digitarElemento('[data-qa="address"]')(dadosUsuario.address);
         const selectContrys = {
            1: "India",
            2: "United States",
            3: "Canada",
            4: "Australia",
            5: "Israel",
            6: "New Zealand",
            7: "Singapore"
         };
         const keys = Object.keys(selectContrys);                
         const randomKey = keys[Math.floor(Math.random() * keys.length)];
         const paisAleatorio = selectContrys[randomKey];
         registro.selecionarElemento('[data-qa="country"]')(paisAleatorio);
         registro.digitarElemento('[data-qa="state"]')(dadosUsuario.state);
         registro.digitarElemento('[data-qa="city"]')(dadosUsuario.city);
         registro.digitarElemento('[data-qa="zipcode"]')(dadosUsuario.zipcode);
         registro.digitarElemento('[data-qa="mobile_number"]')(dadosUsuario.mobileNumber);
         registro.buscarElemento('[data-qa="create-account"]')("contain", "Create Account");
         cy.get('b').should("contain.text", "Account Created!");
         cy.get('p').should("contain.text", "Congratulations! Your new account has been successfully created!");
         cy.get('p').should("contain.text", "You can now take advantage of member privileges to enhance your online shopping experience with us.");
         registro.buscarElemento('[data-qa="continue-button"]')("contain", "Continue");
         cy.get('a[href="/logout"]').should("contain.text", "Logout");
    });
});