describe('Check all news events', function() {
  it('loop over all pages', function(){
    cy.visit('https://computest.nl/nl/nieuws/evenementen/')

    cy.get('ul').find('li.d--sm.pad').invoke('text').then((text)=>{
      var numOfPages = text.substr(4,text.length)
      for(var i=1;i<numOfPages;i++){
        var href = 'https://wwww.computest.nl/nl/nieuws/evenementen/?page='+ i
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
      // cy.log($el.find('h3'))
      for(var i=0;i<lengte;i++){

        let henk = $el[i].href
        if(henk.includes('/evenementen/?')){

        } else if(henk.includes('/evenementen/')){
          linkList.push($el[i])
        } 
      }
      checkArticle(linkList, 0)
    })
  }
})

function checkArticle(linkList, i) {
  if (i >= linkList.length) {
    return;
  }
  cy.visit(linkList[i].href);
  cy.get('h1.article__title--lg').then((element)=>{
    
    let linkText = linkList[i];
    // cy.log(linkText)
    let articleText = linkText.text.replace(/\n/g,'')
    if(articleText.length > 80){
      articleText = 'Cyber Security Experience event @Dutch Innovation Factory'
    }
    // cy.log(articleText)
    expect(element).to.contain(articleText)

    //check news item
    //author visible?
    cy.get('div').find('.employee.employee--sm.flex.article').should('be.visible')

    //contact visible? --------- Activate when a contact is needed in all Events -----------
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