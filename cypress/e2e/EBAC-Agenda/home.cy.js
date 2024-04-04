/// <reference types="cypress" />

describe('Teste da agenda de contatos da EBAC', () =>{
    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    
    it('Deve incluir contato', () =>{
        cy.get('[type="text"]').type('Maicon')
        cy.get('[type="email"]').type('veiga.maicon@gmail.com')
        cy.get('[type="tel"]').type('2177777777')
        cy.get('.adicionar').click()
        cy.get('ul > li').contains('Maicon')
        cy.get('ul > li').contains('veiga.maicon@gmail.com')
        cy.get('ul > li').contains('2177777777')
        
    })

    it('Deve alterar o ultimo contato', () =>{
        cy.get('.edit').last().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Maicon Veiga')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('veiga.maicon1@gmail.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('21888888888')
        cy.get('.alterar').click()
        cy.get('ul > li').contains('Maicon Veiga')
        cy.get('ul > li').contains('veiga.maicon1@gmail.com')
        cy.get('ul > li').contains('21888888888')
    })

    it('Deve deletar o ultimo contato', () =>{
        cy.get('.delete').first().click()   
    })
})