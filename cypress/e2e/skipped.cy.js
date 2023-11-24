describe('Example to Demostrate the use of skip in cypress', () => {
    before(() => {
        cy.visit('https://wikipedia.org')
    })

    // Failed Test Case
  it('should intentionally fail', () => {
    cy.get('h1').should('contain', 'Incorrect Text'); // Intentional failure
  });

  // Skipped Test Case
  it('should be skipped under certain conditions', function () {
    const shouldSkipTest = true;

    if (shouldSkipTest) {
      cy.log('Test skipped due to conditions');
      this.skip();
    } else {
      cy.get('h1').should('contain', 'Welcome to My App');
    }
  });
})
