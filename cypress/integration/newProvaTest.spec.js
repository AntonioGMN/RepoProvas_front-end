describe("test adição de prova", () => {
	it("incremento de views", () => {
		cy.login();

		cy.contains("adicionar").click();
		cy.get('input[placeholder="Titulo da prova"]').type("prova de test");
		cy.get('input[placeholder="PDF da prova"]').type("http://falso");

		cy.get("form").find("button").first().click();
		cy.contains("P1").click();
		cy.get("form").find("button").eq(2).click();
		cy.contains("HTML").click();
		cy.get("form").find("button").last().click();
		cy.contains("Dina").click();

		cy.contains("Enviar").click();
	});
});
