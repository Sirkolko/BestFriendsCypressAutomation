class BasePage{
    open(url){
        cy.visit(url)
        return this
    }
    logoIsDisplayed(title){
        cy.title().should('include',title);
        return this
}
}
export default BasePage