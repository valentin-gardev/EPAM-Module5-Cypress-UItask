import { LoginComponents } from "../components/login.comp"

export class LoginPage {

    constructor(){
        this.form = new LoginComponents()
    }

    open() {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
    }

    get registrationButton() {
        return cy.get('[data-test="register-link"]')
    }

    fill(typeUsername, typePassword) {
        this.form.emailInput.type(typeUsername)
        this.form.passwordInput.type(typePassword)
    }
}