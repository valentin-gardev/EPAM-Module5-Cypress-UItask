

export class LoginComponents {

    get emailInput() {
        return cy.get('[data-test="email"]')
    }
    
    get passwordInput() {
        return cy.get('[data-test="password"]')
    }
}