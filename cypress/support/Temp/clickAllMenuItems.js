describe('Click all menu item', function() {
  it('clicks all links in the menu and returns', function() {
    // go to homepage
    cy.visit('https://computest.nl/nl')

    //open menu
    cy.get('div.button:nth-child(3)').click()

    // get the number of links
    cy.get('div.nav').find('a.list__links--link').then(($obj)=>{
      var links = $obj.length
    
    // itterate over all links in the menu
    for(var i=0;i<links;i++){
      let henk = cy.get('div.nav').find('a.list__links--link').eq(i)
      henk.click()
      //alert(henk)

      cy.wait(500)
      let kak;
      cy.get('div.nav').find('a.list__links--link').eq(i).invoke('text').then((text)=>{
        //alert(text)
        kak = text          
      })
      cy.wait(100)
      //alert(kak)
      cy.get('main').should('be.visible').invoke('text').then((element)=>{
        //Cypress.on('uncaught:exception', (err, runnable) => { 
          expect(element).to.contain(kak)
          //return false
        //})
      })

      //cy.wait(1000)
      cy.visit('https://computest.nl/nl')
   	  cy.get('div.button:nth-child(3)').click()
   	  //cy.wait(100)
    }
   })
  })
})
