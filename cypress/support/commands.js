// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


Cypress.Commands.add("loginBff",(bandeira, header, login) => {
  cy.api({
    method: 'POST',
    url: bandeira,
    body: login,
    failOnStatusCode: false,
    headers: header
  })
});

Cypress.Commands.add("pwdChangeBff",(bandeira, header, change) => {
  cy.api({
    method: 'PUT',
    url: bandeira,
    body: change,
    failOnStatusCode: false,
    headers: header
  })
})
