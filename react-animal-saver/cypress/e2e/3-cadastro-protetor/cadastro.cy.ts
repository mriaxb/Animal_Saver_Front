describe("CadastroProtetora", () => {

    context("Quando acessar a pagina de cadastro de protetor", () => {
         
        it("Deve exibir um h1" , () => {
            cy.visit('http://localhost:3000/CadastroProtetora/')  
            cy.get('h1').should("contain.text", "Seja um(a) Protetor(a)!")
        })

        it("Deve exibir todas as labels" , () => {
            cy.visit('http://localhost:3000/CadastroProtetora/')

            cy.get(':nth-child(1) > :nth-child(1) > .form-label').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .form-label').should('be.visible')
            cy.get(':nth-child(3) > :nth-child(1) > .form-label').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .form-label').should('be.visible')

            cy.get(':nth-child(1) > :nth-child(2) > .form-label').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .form-label').should('be.visible')
            cy.get(':nth-child(3) > :nth-child(2) > .form-label').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .form-label').should('be.visible')

        })

        it("Deve aparecer todos os inputs", () => {
            cy.visit('http://localhost:3000/CadastroProtetora/')  
           
            cy.get(':nth-child(1) > :nth-child(1) > #formGridEmail').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > #formGridEmail').should('be.visible')
            cy.get(':nth-child(3) > :nth-child(1) > #formGridEmail').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > #formGridEmail').should('be.visible')
            
            cy.get(':nth-child(1) > :nth-child(2) > #formGridPassword').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > #formGridPassword').should('be.visible')
            cy.get(':nth-child(3) > :nth-child(2) > #formGridPassword').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > #formGridPassword').should('be.visible')

        })

        it("Deve ter o botão de cadastro de protetor disponivel", () => {
            cy.visit('http://localhost:3000/CadastroProtetora/') 

            cy.get('[data-testid="cadastrar-button-id"]').should('be.visible')

        })

        it("Deve conseguir digitar em todos os inputs", () => { 
            cy.visit('http://localhost:3000/CadastroProtetora/') 

            cy.get(':nth-child(1) > :nth-child(1) > #formGridEmail').type("Maria").should("have.value", "Maria")
            cy.get(':nth-child(2) > :nth-child(1) > #formGridEmail').type("Rua 1").should("have.value", "Rua 1")
            cy.get(':nth-child(3) > :nth-child(1) > #formGridEmail').type("maria@gmail.com").should("have.value", "maria@gmail.com")
            cy.get(':nth-child(4) > :nth-child(1) > #formGridEmail').type("maria123").should("have.value", "maria123")

            cy.get(':nth-child(1) > :nth-child(2) > #formGridPassword').type("999545138").should("have.value", "999545138")
            cy.get(':nth-child(2) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")
            cy.get(':nth-child(3) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")
            cy.get(':nth-child(4) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")

        })

        it("Deve conseguir digitar em todos os inputs", () => { 
            cy.visit('http://localhost:3000/CadastroProtetora/') 

            cy.get(':nth-child(1) > :nth-child(1) > #formGridEmail').type("Maria").should("have.value", "Maria")
            cy.get(':nth-child(2) > :nth-child(1) > #formGridEmail').type("Rua 1").should("have.value", "Rua 1")
            cy.get(':nth-child(3) > :nth-child(1) > #formGridEmail').type("maria@gmail.com").should("have.value", "maria@gmail.com")
            cy.get(':nth-child(4) > :nth-child(1) > #formGridEmail').type("maria123").should("have.value", "maria123")

            cy.get(':nth-child(1) > :nth-child(2) > #formGridPassword').type("999545138").should("have.value", "999545138")
            cy.get(':nth-child(2) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")
            cy.get(':nth-child(3) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")
            cy.get(':nth-child(4) > :nth-child(2) > #formGridPassword').type("100").should("have.value", "100")

            cy.get('[data-testid="cadastrar-button-id"]').click()
        })


        
    })

})