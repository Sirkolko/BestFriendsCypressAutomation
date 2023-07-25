import BasePage from "./basePage";

class LoginPage extends BasePage{


    get mailInput(){
        return cy.get('#input-email')
    }

    get passwordInput(){
        return cy.get('#input-password')
    }
    get loginButton(){
        return cy.get('.btn.btn-primary[type="submit"]')
    }
    get invalidMailError(){
        return cy.get('#input-email-error')
    }
    get invalidCredentials(){
        return cy.get('.alert.alert-danger.alert-dismissible')
    }

    writeMail(mail){
        this.mailInput.type(mail)
        return this
    }

    writePassword(password){
        this.passwordInput.type(password)
        return this
    }

    clickOnTheLoginButton(){
        this.loginButton.click()
        return this
    }

    loginWithValidCredentials(mail,password){
        this.writeMail
        this.writePassword
        this.clickOnTheLoginButton
        return this
    }

    mailInputIsDisplayed(){
        this.mailInput.should('be.visible')
    }
    passwordInputIsDisplayed(){
        this.passwordInput.should('be.visible')
    }
    invalidMailErrorIsDisplayed(){
        this.invalidMailError.should('be.visible').should('have.text', 'Please enter a valid email address.')
    }
    invalidCredentialsErrorIsDisplayed(){
        this.invalidCredentials.should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }
}
export default LoginPage