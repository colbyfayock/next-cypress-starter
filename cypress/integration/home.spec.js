/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => cy.visit('/'));

  it('.type() - type into a DOM element', () => {
    cy.get('h1').contains('Welcome to Next.js!');
  });
});