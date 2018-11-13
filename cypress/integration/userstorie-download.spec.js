describe('Userstorie-download', function() {
  it('clicks all links in the menu and returns', function() {
    cy.visit('https://www.computest.nl/nl/knowledge-platform/rd-projects/car-hack/')
	//cy.get('#download-whitepaper').click()
	cy.request("/documents/9/The_Connected_Car._Research_Rapport_Computest_april_2018.pdf").then((response) =>{
		expect(response.status).to.eq(200)
	})
  })
})
