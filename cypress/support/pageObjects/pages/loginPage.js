export class LoginPage {

    open() {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
    }

    get registrationButton() {
        return cy.get('[data-test="register-link"]')
    }
}