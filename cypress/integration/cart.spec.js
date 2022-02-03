describe('homepage ao carrinho', () => {

    it('home a adicionar ao carrinho deve funcionar', () => {
        cy.visit('/')
        cy.get('.sc-iqseJM').click()
        cy.get(':nth-child(7) > a > .sc-hBUSln').click()
        cy.get('.sc-jObWnj').click()
        cy.get('.sc-jObWnj').click()
        cy.get('.sc-gKclnd').should('have.text', '2')
    })
    it('todos os produtos ate o carrinho deve funcionar (e o remove)', () => {
        cy.visit('/allshop')
        cy.get(':nth-child(4) > a > .sc-hBUSln').click()
        cy.get('.sc-jObWnj').click()
        cy.get('.sc-jObWnj').click()
        cy.get('.sc-jObWnj').click()
        cy.get('.sc-jRQBWg > svg > [d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"]').click()
        cy.get('.sc-iJKOTD').click()
        cy.get('.sc-gKclnd').should('have.text', '2')
    })
    it('carrinho deve aparecer vazio', () => {
        cy.visit('/')
        cy.get('[d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"]').click()
    })

})
