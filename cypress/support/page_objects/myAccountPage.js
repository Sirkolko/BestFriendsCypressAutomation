import BasePage from "./basePage";


class MyAccountPage extends  BasePage{


    get myOrdersTitle() {
      return   cy.get('#content h2:nth-child(3)')
    }



}
export default MyAccountPage