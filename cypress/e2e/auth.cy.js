import LoginPage from '../support/page_objects/loginPage'
import BasePage from '../support/page_objects/basePage'


describe('User Sign-Up and Login', () => {

  let loginPage
  let userData;
  let basePage

  beforeEach(function (){
   
  basePage = new BasePage()
  loginPage= new LoginPage()
  basePage.open('http://opencart.qatestlab.net/index.php?route=account/login').logoIsDisplayed('Account Login')
  })
  
  
  it('login fields are displayed', () => {
    loginPage.mailInputIsDisplayed()
    loginPage.passwordInputIsDisplayed()
  })
  

  it('login with valid credentials', ()=> {
    cy.getCredentials().then((credentials) => {
      loginPage.loginWithValidCredentials(credentials.email,credentials.password)
    })
  })
})