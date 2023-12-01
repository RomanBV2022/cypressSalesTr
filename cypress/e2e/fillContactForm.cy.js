/// <reference types="cypress" />

describe('Fill contact form on site : https://salestracker24.com/kontakt', ()=> {

beforeEach(()=> {
    cy.visit('https://salestracker24.com/kontakt');
  })

 it('fill kontakt form', ()=> {
    cy.url().should('eq','https://salestracker24.com/kontakt');
    cy.get('input#contactform-name')
      .should('have.text', '')
      .type('Roman');
    cy.get('input#contactform-surname')
      .should('have.text', '')
      .type('Burlaka');
    cy.get('input#contactform-organizacja')
      .should('have.text', '')
      .type('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111R');
    cy.get('input#contactform-email')
      .should('have.text', '')
      .type('1234#w! 34DD');
    cy.get('input#contactform-phone')
      .should('have.text', '')
      .type('11111');
    cy.get('textarea#contactform-body')
      .should('have.text', '')
      .type('The "E-mail" input field is accepting invalid data. Pole input nie przyjmuje poprawnych danych. Brak weryfikacji e-maila zgodnie z wymaganiami dla danego typu pola. Wiadomość została wygenerowana przy użyciu frameworku Cypress - autor: burlakarv@gmail.com');
      cy.get('[type="checkbox"]').check({force: true});
      //cy.get('[title="reCAPTCHA"]').check({force: true});
      cy.get(' div.group.group-middle > div.wow-outer > button').click();






     

 
  
 })

})