Given('I open Conduit login page', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=g8283a')
  });
  
  When('I type in', (datatable) => { 
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').type(element.username)
        cy.get('input[type="password"]').type(element.password)
    })
  })
  
  When('I click on Sign in button', () => {
    cy.get('.btn').contains('Sign in').should('be.visible').click()
  });
  