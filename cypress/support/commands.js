import faker from "@faker-js/faker";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
	cy.request("DELETE", "http://localhost:4000/resetUsers", {});

	const user = {
		email: faker.internet.email(),
		password: faker.internet.password(),
	};

	cy.visit("http://localhost:3000/sighUp");

	cy.get("#email").type(user.email);
	cy.get("#password").type(user.password);
	cy.get("#confirmePassword").type(user.password);

	cy.contains("CADASTRAR").click();
	cy.intercept("POST", "http://localhost:4000/sighUp", { user });
	cy.visit("http://localhost:3000/login");

	cy.get("input[type='email'").type(user.email);
	cy.get("input[type='password']").type(user.password);
	cy.contains("ENTRAR").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
