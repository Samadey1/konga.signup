import {Login} from '../fixtures/LoginSelectors';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })

describe('Login Testing', ()=> {
  beforeEach( ()=> {
    cy.visit('/')
  })

  it("Validate a verified user is able to Login", ()=> {
    cy.get(Login.login).click()
    cy.get(Login.EmailAddressFieldOrPhoneNumber).type("samadey25@gmail.com")
    cy.get(Login.PasswordField).type("S@madey")
    cy.get(Login.LoginBtn).click()
  
  })

  })