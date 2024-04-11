/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/#')

    });
    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve selecionar um porduto da lista', () => {
        cy.get('.post-2622 > .product-block > .block-inner > .image > .product-image > .image-hover')
        .first()
        .click()

        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });
})