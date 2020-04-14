import 'cypress-file-upload';

Cypress.Commands.add('getByCy', (testId) => {
  cy.get(`[data-cy="${testId}"]`);
});
