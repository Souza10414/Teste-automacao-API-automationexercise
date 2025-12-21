import "cypress-mochawesome-reporter/register";

describe("Teste de logout", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get('[data-qa="login-email"]').type("well@tests.com");
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();

    // Garante que está logado
    cy.contains("Logged in as").should("be.visible");
  });

  it("Deve deslogar com sucesso e redirecionar para a página de login", () => {
    // Ação de logout
    cy.contains("Logout").click();

    // Confirma redirecionamento
    cy.url().should("include", "/login");

    // Confirma que não está mais logado
    cy.contains("Logged in as").should("not.exist");
  });
});
