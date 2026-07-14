function getAdminToken() {
    return cy.request('POST', '/users/login', {
        email: 'admin@practicesoftwaretesting.com',
        password: 'welcome01'
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.access_token;
    });
}

function deleteUserByEmail(adminToken, email) {
    // get users
    return cy.request({
        method: 'GET',
        url: '/users',
        qs: {
          q: email
        },
        headers: { Authorization: `Bearer ${adminToken}` }
    }).then((response) => {
        const usersList = response.body.data || response.body;
        
         let targetUser;
        if (Array.isArray(usersList)) {
            targetUser = usersList.find(user => user.email === email);
        } else if (usersList && usersList.email === email) {
            targetUser = usersList;
        }
        
        // verify to exist
        expect(targetUser, `User ${email} should exist in DB`).to.exist;
        
        const userId = targetUser.id;

        // Delete user
        return cy.request({
            method: 'DELETE',
            url: `/users/${userId}`,
            headers: { Authorization: `Bearer ${adminToken}` }
        }).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(204);
            cy.log(`Successfully deleted user ID: ${userId}`);
        });
    });
}

// Export using CommonJS
module.exports = {
    getAdminToken,
    deleteUserByEmail
};