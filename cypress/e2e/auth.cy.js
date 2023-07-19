
describe('User Sign-Up and Login', () => {

  let userData;

  beforeEach(function (){
    cy.fixture("userData").then((data) => {
      userData = data
  })
  })
  
  
  it('should redirect unauthenticated user to signin page', () => {
    cy.visit('/')
    cy.title().should('equal', 'Best Friends')
    cy.get('[style="float: right"] > a').click()
    cy.location("href").should("equal", "http://opencart.qatestlab.net/index.php?route=account/login");
    
  })

  it('should login user with valid data', () => {
    cy.visit('/')
    cy.title().should('equal', 'Best Friends')
    cy.get('[style="float: right"] > a').click()
    cy.location("href").should("equal", "http://opencart.qatestlab.net/index.php?route=account/login");
    cy.get('#input-email').type(userData.emailAdress)
    cy.get('#input-password').type(userData.password)
    cy.get('.validate > .btn').click()
  })
})