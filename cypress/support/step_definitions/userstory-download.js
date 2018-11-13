/* global given, when, then*/

    Given("I am on the page displaying the car-hack whitepaper",()=>{
      cy.visit('https://www.computest.nl/nl/knowledge-platform/rd-projects/car-hack/')
    }) 
    When("I click the download button",()=>{
      //reqst = cy.request("https://www.computest.nl/documents/9/The_Connected_Car._Research_Rapport_Computest_april_2018.pdf")
    }) 
    Then("I should receive the file",()=>{      
      //expect(reqst.status).to.eq(200)
      cy.request("/documents/9/The_Connected_Car._Research_Rapport_Computest_april_2018.pdf").then((response) =>{
      	expect(response.status).to.eq(200)
      })
    }) 
