

export class RegistrationComponents {

    selectors = {
        firstNameInput: '[data-test="first-name"]',
        lastNameInput: '[data-test="last-name"]',
        dobInput: '[data-test="dob"]',
        countrySelect: '[data-test="country"]',
        postalCodeInput: '[data-test="postal_code"]',
        houseNumberInput: '[data-test="house_number"]',
        phoneInput: '[data-test="phone"]',
        emailInput: '[data-test="email"]',
        passwordInput: '[data-test="password"]',
        submitButton: '[data-test="register-submit"]'
        // street , city , state - automatic fill
    }
    registrationFill(userData) {
        const defaults = {
            dob: '1990-09-01',
            country: 'BG',
            postalCode: '1000',
            houseNumber: '5',
            phone: '091111111'
        }

        const finalData = { ...defaults, ...userData }

        cy.get(this.selectors.firstNameInput).type(finalData.name);
        cy.get(this.selectors.lastNameInput).type(finalData.sirName);
        cy.get(this.selectors.dobInput).type(finalData.dob);
        cy.get(this.selectors.countrySelect).select(finalData.country);
        cy.get(this.selectors.postalCodeInput).type(finalData.postalCode);
        cy.get(this.selectors.houseNumberInput).type(finalData.houseNumber);
        cy.get(this.selectors.phoneInput).type(finalData.phone);
        
        cy.get(this.selectors.emailInput).should('not.be.disabled').type(finalData.email)
        cy.get(this.selectors.passwordInput).type(finalData.password);

        return this
    }

    get registrationConfirmButton() {
        return cy.get(this.selectors.submitButton)
    }
}