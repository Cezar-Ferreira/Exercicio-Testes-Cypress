/// <reference types="cypress"/>
import {faker} from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve completar o cadastro', () => {
         cy.get('#reg_email').type(faker.internet.email())
         cy.get('#reg_password').type('Teste@22356')
         cy.get(':nth-child(4) > .button').click()

         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
         cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

         cy.get('#account_first_name').type(faker.person.firstName())
         cy.get('#account_last_name').type(faker.person.lastName())

         cy.get('.woocommerce-Button').click()
         cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})