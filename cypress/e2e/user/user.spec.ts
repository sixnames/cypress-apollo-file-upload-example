describe('User', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Create user mutation', () => {
    cy.getByCy(`user-name`).type('John');

    cy.getByCy(`user-images`).attachFile('test-image-1.jpg', { subjectType: 'drag-n-drop' });
    cy.getByCy(`user-images`).attachFile('test-image-2.jpg', { subjectType: 'drag-n-drop' });
    cy.getByCy(`user-images`).attachFile('test-image-3.jpg', { subjectType: 'drag-n-drop' });

    cy.getByCy(`user-submit`).click();
    cy.getByCy(`user-success`).should('exist');
  });
});
