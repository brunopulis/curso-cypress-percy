import '@percy/cypress';

Cypress.Commands.add('fillMandatoryFields', () => {
  cy.get('#first-name').type('Bruno');
  cy.get('#last-name').type('Pulis');
  cy.get('#email').type('brunopulis@protonmail.com');
  cy.get('#agree').check();
});