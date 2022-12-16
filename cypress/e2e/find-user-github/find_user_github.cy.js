/// <reference types="cypress"/>

// Welcome to find user on GitHub automated test

context('Find user on GitHub', () => {

    // Open the GitHub website
    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit('https://github.com/')
    })

    //Validate the title page
    it('The user is on the GitHub website', () => {
        cy.get('h1')
          .contains('Let’s build from here')
    })

    //Searching the bonomiluan user on GitHub
    it('Find the bonomiuan user on GitHub', () => {
        cy.xpath('/html/body/div[1]/div[1]/header/div/div[2]/div/div/div[1]/div/div/form/label/input[1]')
          .click()  
          .type('bonomiluan')
          .type('{enter}')

        cy.xpath('/html/body/div[1]/div[4]/main/div/div[2]/nav[1]/a[10]')
          .click()

        cy.xpath('//*[@id="user_search_results"]/div/div[1]/div[2]/div[1]/div[1]/a[1]')
          .contains('Luan Bonomi')
          .click()

        cy.xpath('/html/body/div[1]/div[4]/main/div[2]/div/div[1]/div/div[2]/div[1]/div[2]/h1/span[1]')
          .contains('Luan Bonomi')
    })

})