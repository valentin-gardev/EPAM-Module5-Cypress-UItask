

describe('Module 2, LoginPage tests', () => {

    it('1.Successful user login', () => {
    // Given the user has a registered account
    // And the user is on the login page
    // When the user enters a valid email address
    // And the user enters a valid password
    // And the user presses the login button
    // Then the user should be signed in successfully
    // And the user should be redirected to the account dashboard
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('[data-test="email"]').type('customer@practicesoftwaretesting.com')
        cy.get('[data-test="password"]').type('welcome01')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="nav-menu"]').should('have.text', 'Jane Doe')
    })
})