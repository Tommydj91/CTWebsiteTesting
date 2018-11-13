/* global given, when, then*/

Given("I am on the news page",()=>{
    cy.visit('https://computest.nl/nl/nieuws/nieuws-en-persberichten/')
}) 
Then("I go through all news items to check for errors",()=>{
    cy.get('ul').find('li.d--sm.pad').invoke('text').then((text)=>{
        var numOfPages = text.substr(4,text.length)
        for(var i=1;i<numOfPages;i++){
          var href = 'https://wwww.computest.nl/nl/nieuws/nieuws-en-persberichten/?page='+ i
          blogsOnPage(href)
        }
      })
}) 
function blogsOnPage(href) {
    // go to page with blogs
    cy.visit(href)
  
    var linkList=[];    
  
    //find all links on page
    cy.get('main').find('a').then(($el)=>{
        var lengte = $el.length
        
        for(var i=0;i<lengte;i++){
          let henk = $el[i].href
          if(henk.includes('/nieuws-en-persberichten/?')){
          } else if(henk.includes('/nieuws-en-persberichten/')){
            linkList.push($el[i])
          } 
        }
        checkArticle(linkList, 0)
    })
}
  
function checkArticle(linkList, i) {
    if (i >= linkList.length) {
      return;
    }
    cy.visit(linkList[i].href);
    cy.get('h1.article__title--lg').then((element)=>{
      let linkText = linkList[i];
      let articleText = linkText.text.replace(/\n/g,'')
      expect(element).to.contain(articleText)
  
      //check news item
      //author visible?
      cy.get('div').find('.employee.employee--sm.flex.article').should('be.visible')
  
      //contact visible? --------- Activate when a contact is needed in all news items -----------
      //cy.get('div').find('.team.team--md.article.article--md.article__body.body').should('be.visible')
  
      //read more 3 links visible?
      cy.get('div.aside__list').find('ul.list.list__articles').eq(1).find('>li').should(($li)=>{
       expect($li).to.have.length(3)
      })
      //know more 3 links visible?
      cy.get('div.aside__list.d--none--sm').find('ul.list.list__articles').find('>li').should(($li)=>{
        expect($li).to.have.length(3)
      })
  
      checkArticle(linkList, i + 1)
    })
}