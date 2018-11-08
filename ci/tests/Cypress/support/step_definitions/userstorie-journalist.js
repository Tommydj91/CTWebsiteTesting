/* global given, when, then*/
 
    Given("I am on the Computest newspage",()=>{
      cy.visit('https://www.computest.nl/nl/nieuws/nieuws-en-persberichten')
      cy.get('body > div.cc-window.cc-banner.cc-type-informational.cc-theme-block.cc-bottom > div > a').click()
    })

    Then("I search for {string}",(Keys)=>{
      cy.get('body > div.scrollmagic-pin-spacer > div > nav > div.container.container--padding--lr > form > div:nth-child(2) > fieldset > div > input').should('be.visible').type(Keys)
      cy.get('body > div.scrollmagic-pin-spacer > div > nav > div.container.container--padding--lr > form > div:nth-child(2) > div > button').click()
    })

    Then("I navigate to the related topic containing {string}",(keys)=>{
      cy.url().should('contain','search')
      cy.scrollTo('top')
      cy.get('body > main').contains(keys).as('newsPage')
      cy.get('@newsPage').click()
    })

    Then("I can see the {string} on the news items page",(key)=>{
      cy.contains(key)
    })
