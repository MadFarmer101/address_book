describe ('user can create a contact', () => {
    beforeEach('tests if user is able to create a contact', () => {
        cy.visit('http://localhost:3005')
        cy.get('#add-contact').click()
        cy.get('#name').type('Janko')
        cy.get('#email').type('janko@email.com')
        cy.get('#phone').type('0702222555')
        cy.get('#company').type('Casino Cosmopol')
        cy.get('#notes').type('Awesome dealer')
        cy.get('#twitter').type('@janko')
        cy.get('#submit').click()
    })

    it('displays a name of the new contact', () => {
        cy.get('#contact-list').should('contain', 'Janko')
    })

    it('displays the phone number of the new contact', () => {
        cy.get('#contact-list').should('contain', '0702222555')
    })
})