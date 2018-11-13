/* global given, when, then*/

Given("I am on the computest homepage",()=>{
    cy.visit('https://computest.nl/nl')
    cy.get('div.cc-compliance').find('a').click()
    
}) 
Then("I click on the message icon",()=>{
    cy.get('div.button.button--id.d--none--sm').find('i').click()
    cy.contains('Heb je een vraag of wil je ons wat vertellen?')
}) 
Then("I can fill in the contact form and send it",()=>{
    cy.get('#id_name').type('Henk contact')
    cy.get('#id_organisation').type('Computest')
    cy.get('#id_email').type('Hcontact@computest.nl')
    cy.get('#id_phone').type('0612345678')
    cy.get('#id_question').type('Henk praat veel. Henk is slim. Wees als Henk.')
}) 


      
      
      
   