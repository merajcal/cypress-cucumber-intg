
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import executeCommand from '../../common/execute-command';

Then('I click New Post button', () => {
    cy.contains("New Post", { timeout: 10000 }).should('be.visible').click()
    cy.end();
});

Then('I see new post form', () => {
    cy.get('form').should('be.visible')
    cy.end();
});

Then('I click Global Feed tab', () => {
    cy.contains("Global Feed", { timeout: 10000 }).should('be.visible').click()
});

Then('I see my post {string}', (content) => {
    cy.get('h1').contains(content, { timeout: 10000 }).should('be.visible')
    cy.end();
});

