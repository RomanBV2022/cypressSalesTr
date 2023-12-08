/// <reference types ="cypress" />

import HomePage from "./pom_pages/HomePage";
import data  from "../fixtures/contactData.json";


describe('Suit Contact Form', function() {
    const homePage = new HomePage();

    beforeEach(()=> {
        homePage.visitSite();
    }) 

    it('test fill contact form with valad data', function() {
        homePage
            .goToContactPage()
            .fillName(data.userData.name_valid)
            .fillFullName(data.userData.surname_valid)
            .fillOrganization(data.userData.organization_valid)
            .fillEmail(data.userData.email_valid)
            .fillPhone(data.userData.phone_valid)
            .fillTextArea(data.userData.textArea_valid_data)
            .ckickCheckBox()
            .clickSubmitForm();
    })

    it('test fill contact form with invalad data', function() {
        homePage
            .goToContactPage()
            .fillName(data.userData.name_invalid)
            .fillFullName(data.userData.surname_invalid)
            .fillOrganization(data.userData.organization_invalid)
            .fillEmail(data.userData.email_invalid)
            .fillPhone(data.userData.phone_invalid)
            .fillTextArea(data.userData.texarea_invalid_data)
            .ckickCheckBox()
            .clickSubmitForm();
    })
})