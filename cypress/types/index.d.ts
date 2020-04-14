declare namespace Cypress {
  interface MockGraphqlInterface {
    schema: any;
    operations: { [key: string]: any };
  }

  interface AttachFileOptionsInterface {
    subjectType?: string;
  }

  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    getByCy(testId: string): Chainable<Element>;
    attachFile(path: string, options?: AttachFileOptionsInterface): Chainable<Element>;
  }
}
