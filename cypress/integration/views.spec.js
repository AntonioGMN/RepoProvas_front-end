import faker from "@faker-js/faker";

describe("Teste incremento de views", () => {
	it("incremento de views", () => {
		cy.login();

		cy.contains("Período").click();
		cy.get("#diciplina").click();
		cy.get("#updateViews").click();
	});
});
