import "cypress-mochawesome-reporter/register";

describe("Validação da página home", () => {
  it("Deve validar a URL e confirmar carregamento da página", () => {
    //Acessar o site
    cy.visit("https://www.automationexercise.com/");

    //Validar URL
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Validar elemento visivel da página (texto principal)
    cy.contains("AutomationExercise").should("be.visible");
  });
});
