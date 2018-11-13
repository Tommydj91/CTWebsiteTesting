describe('Userstorie-henkcontact', function() {
  it('clicks all links in the menu and returns', function() {
    cy.visit('https://computest.nl/nl')
	cy.get('body > div.branding.theme__background > header > div > nav > div.container.container--padding--lr.theme__background.nav__top > div > ul > a > div').click()
	cy.contains('Heb je een vraag of wil je ons wat vertellen?')
	cy.get('#id_name').type('Henk contact')
   cy.get('#id_organisation').type('Computest')
   cy.get('#id_email').type('Hcontact@computest.nl')
   cy.get('#id_phone').type('0612345678')
   cy.get('#id_question').type('Henk praat veel. Henk is slim. Wees als Henk.')
  })
})