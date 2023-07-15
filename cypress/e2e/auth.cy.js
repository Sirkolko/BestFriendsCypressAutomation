describe('User Sign-Up and Login', () => {


  it('should redirect unauthenticated user to signin page', () => {
    cy.visit('http://opencart.qatestlab.net/index.php?route=common/home')
    cy.title().should('equal', 'Best Friends')
    cy.get('[style="float: right"] > a').click()
    cy.location("href").should("equal", "http://opencart.qatestlab.net/index.php?route=account/login");
    
  })
})