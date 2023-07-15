describe('User Sign-Up and Login', () => {


  it('should redirect unauthenticated user to signin page', () => {
    cy.visit('http://opencart.qatestlab.net/index.php?route=common/home')
    cy.title().should('equal', 'Best Friends')


  })
})