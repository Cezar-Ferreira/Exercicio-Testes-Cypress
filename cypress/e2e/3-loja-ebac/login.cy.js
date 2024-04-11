///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('Cezae.teste@teste.com.br')
        cy.get('#password').type('Cezar1721')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cezae.teste (não é cezae.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuáro inválido', () => {
        cy.get('#username').type('Cezae.test@teste.com.br')
        cy.get('#password').type('Cezar1721')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir a senha invalida', () => {
        cy.get('#username').type('Cezae.teste@teste.com.br')
        cy.get('#password').type('Cezar172')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error').should('contain', 'Senha desconhecida. Verifique novamente ou tente sua senha.')
        cy.get('.woocommerce-error').should('exist')
        
    });
})