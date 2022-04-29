import faker from "@faker-js/faker";

describe("Teste Cadastro", () => {
	it("Fluxo Cadastro e Login", () => {
		const user = {
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		cy.visit("http://localhost:3000/sighUp");

		cy.get("#email").type(user.email);
		cy.get("#password").type(user.password);
		cy.get("#confirmePassword").type(user.password);

		cy.contains("CADASTRAR").click();

		cy.visit("http://localhost:3000/login");

		cy.get("input[type='email'").type(user.email);
		cy.get("input[type='password']").type(user.password);
		cy.contains("ENTRAR").click();
	});
});
