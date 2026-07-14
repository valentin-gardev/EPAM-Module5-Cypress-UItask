import { RegistrationComponents } from "../components/registration.comp";

export class RegistrationPage {
    constructor() {
        this.form = new RegistrationComponents()
    }

    registrationButton() {
        return this.form.registrationConfirmButton
    }
    completeRegistration(userData) {
        this.form.registrationFill(userData)
        this.registrationButton().click()
    }
}

export const registrationPage = new RegistrationPage()