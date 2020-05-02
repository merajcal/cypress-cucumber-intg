import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import executeCommand from '../../common/execute-command';

Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
  cy.end();
});
