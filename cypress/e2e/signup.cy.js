import {signup} from '../fixtures/selectors';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })


describe('Testing Konga Signup', ()=> {
  beforeEach( ()=> {
    cy.visit('/')


  })

  it("A new User should be able to signup", ()=> {
    cy.get(signup.LoginBtn).click()
    cy.wait(1500)
    cy.get(signup.SignUp).click()
    cy.get(signup.FirstNameField).type("Sam")
    cy.get(signup.LastNameField).type("adey")
    cy.get(signup.EmailField).type("samadey25+0@gmail.com")
    cy.get(signup.PhoneNumberField).type("08165071487")
    cy.get(signup.PasswordField).type("S@madey")
    cy.get(signup.CreateAnAccountBtn).click()
    cy.wait(3000)
    cy.get(signup.GetCode).type("6037")
    

  })

})

    








