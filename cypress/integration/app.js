describe('Pokedex', function () {
    it('frontpage can be opened', function () {
        cy.visit('http://localhost:5000')
        cy.contains('pikachu')
        cy.contains('Pokemon and pokemon character names are trademarks of Nintendo')
    })
})