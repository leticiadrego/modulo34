/// <reference types="cypress" />

describe('Testando funcionalidades da lista de contatos', () => {
    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
    cy.get('button').contains('Novo').click();
    cy.get('input[name="name"]').type('Novo contato');
    cy.get('input[name="email"]').type('novo contato@example.com');
    cy.get('input[name="phone"]').type('123456789');
    cy.get('button').contains('Salvar').click();
    cy.contains('Novo contato').should('be.visible');
    });

    it('Deve editar um contato existente', () => {
    cy.contains('Novo contato').parent().find('button').contains('Editar').click();
    cy.get('input[name="name"]').clear().type('Contato alterado');
    cy.get('button').contains('Salvar').click();
    cy.contains('Contato alterado').should('be.visible');
    });

    it('Deve remover um contato', () => {
    cy.contains('Contato alterado').parent().find('button').contains('Remover').click();
    cy.contains('Contato alterado').should('not.exist');
    });
});
