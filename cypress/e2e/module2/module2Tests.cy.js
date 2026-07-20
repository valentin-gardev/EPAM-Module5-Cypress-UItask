import { LoginPage } from "../../support/pageObjects/pages/loginPage.js"
import { registrationPage } from "../../support/pageObjects/pages/registration.page.js"
const { getAdminToken, deleteUserByEmail } = require("../../support/api/adminHelper")

const loginPage = new LoginPage()

describe('Module 2, LoginPage tests', () => {
    
    // beforeEach( () => {
    //     cy.request()
    // })
    it('1.Successful user login', () => {
        loginPage.open()
        loginPage.fill('customer2@practicesoftwaretesting.com','welcome01')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="nav-menu"]').should('contain.text', 'Jack Howe')
    })

    it('2.Un-successful login with invalid password', () => {
        loginPage.open()
        loginPage.fill('customer2@practicesoftwaretesting.com','welcome02')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="login-error"]').should('have.text', 'Invalid email or password')
});

    it('3.Create temp user, confirm that exists and delete it', () => {
        
        const uniqueID = Date.now()
        const tempUser = {
            name: 'Bob',
            sirName: 'M',
            password: 'Qw1111@89',
            email: `Bob${uniqueID}@gm.com`
        }
        loginPage.open()
        loginPage.registrationButton.click()
        registrationPage.completeRegistration(tempUser)

        cy.get('h3', { timeout: 10000 }).should('have.text', 'Login');
        cy.get('[data-test="email"]').type(tempUser.email)
        cy.get('[data-test="password"]').type(tempUser.password)
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="nav-menu"]').should('contain.text', 'Bob M')
        cy.wait(5000)
        getAdminToken()
            .then((adminToken) => {
                deleteUserByEmail(adminToken, tempUser.email)
            })

    })

})