/// <reference types="cypress">

describe('Testes para a p[agina candidatura', () =>{
    beforeEach(()=>{
        cy.visit('https://ebac-jobs-e2e.vercel.app')
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
    })
    it('Deve levar a pagina de inscricao', () =>{
        cy.get('input').should('have.length', 7)
        cy.screenshot('Tela-inscricao')
    })
    it('Deve preencher o formulario de inscricao', () =>{
        cy.get('input[name="nome-completo"]').type('Maicon Veiga')
        cy.get('input[name="email"]').type('veiga.maicon@gmail.com')
        cy.get('input[name="telefone"]').type('(21)9 71365020')
        cy.get('input[name="endereco"]').type('Rua dr luiz palmier 500 - Barreto - Niteroi RJ')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Bacharelado')
        cy.get('.Aplicacao_button__tw2AE').click()
        cy.on('window:alert', (conteudo) =>{
            expect(conteudo).contain('Obrigado pela candidatura')
        })
        cy.screenshot('Dados-preenchidos')

    })
})