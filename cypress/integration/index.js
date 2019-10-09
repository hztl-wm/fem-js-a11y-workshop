/// <reference types="Cypress" />

describe('Accessibility tests', () => {

    it('should send foocus to a skip link when the route changes from a link click', () => {
        cy.visit('http://localhost:8000') // check the local project, could admittedly be more dynamic i.e. if you have more than one instance of Gatsby running, maybe the test should check where this projecy is running instead of being hard-coded

        cy.get('#page-navigation li:first-of-type a').click() // find the element with that id, that is in a li, that is a link

        cy.focused().should('have.class', 'routeSkipLink') // check whether the focused element has the class 'routeSkipLink' 
    })
})