import data  from "../../fixtures/contactData.json";

class ContactPage {
    getName =() => cy.get('input#contactform-name');
    getFullName = () => cy.get('input#contactform-surname');
    getOrganization =() => cy.get('input#contactform-organizacja')
    getEmail = () => cy.get('input#contactform-email');
    getPhone = () => cy.get('input#contactform-phone');
    getTextArea = () => cy.get('textarea#contactform-body');
    getCheckBox = () => cy.get('[type="checkbox"]');
    getSubmitButton = ()=> cy.get('div.group.group-middle > div.wow-outer > button');



    fillName(name){
        this.getName()
            .should('have.text', '')
            .type(name);

    return new ContactPage();
    }

    fillFullName(fullname){
        this.getFullName()
            .should('have.text', '')
            .type(fullname);

     return this;
    }

    fillEmail(email){
        this.getEmail()
            .should('have.text', '')
            .type(email);
     return this;
    }

    fillOrganization(organization){
        this.getOrganization()
            .should('have.text', '')
            .type(organization);
     return this;
    }

    fillPhone(phone){
        this.getName()
            .should('have.text', '')
            .type(phone);
     return this;
    }

    fillTextArea(area){
        this.getTextArea()
            .should('have.text', '')
            .type(area);

     return this;
    }


    ckickCheckBox() {
        this.getCheckBox().check({force:true});

    return this;
    }

    clickSubmitForm() {
        this.getSubmitButton().click();

        return new ContactPage();
    }



}
export default ContactPage;