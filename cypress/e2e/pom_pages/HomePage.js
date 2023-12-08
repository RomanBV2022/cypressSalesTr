import ContactPage from "./ContactPage";
import data from "../../fixtures/contactData.json";


class HomePage {
    getHome = () => cy.get('.rd-navbar-brand');
    getContact =()=>cy.get('.rd-navbar-nav>:last-child');


    visitSite() {
        cy.visit(data.site.URL);

    }

    navigateHomePage() {
        this.getHome().click();

        return new HomePage();
    }

    goToContactPage() {
        this.getContact().click();

        return new ContactPage();
    }

 
}

export default HomePage;