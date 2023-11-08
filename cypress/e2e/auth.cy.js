import LoginPage from '../support/page_objects/loginPage'
import BasePage from '../support/page_objects/basePage'
import MyAccountPage from "../support/page_objects/myAccountPage";


describe('User Sign-Up and Login', () => {

    let loginPage
    let userData;
    let basePage
    let myAccountPage

    beforeEach(function () {

        basePage = new BasePage()
        loginPage = new LoginPage()
        myAccountPage = new MyAccountPage()
        basePage.open('http://opencart.qatestlab.net/index.php?route=account/login').logoIsDisplayed('Account Login')
    })


    it('login fields are displayed', () => {
        loginPage.mailInputIsDisplayed()
        loginPage.passwordInputIsDisplayed()
    })


    it('login with valid credentials', () => {
        cy.getCredentials().then((credentials) => {
            loginPage.loginWithCredentials(credentials.email, credentials.password)
            cy.title().should('equal', 'My Account')
        })
    })

    it('login with invalid credentials', () => {
        cy.getCredentials().then((credentials) => {
            loginPage.loginWithCredentials(credentials.invalid_email, credentials.invalid_password)
            cy.title().should('equal', 'Account Login')
        })
    })


})