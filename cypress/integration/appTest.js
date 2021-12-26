
describe("renders the full app", () => {
    it("renders correctly", () => {
        cy.visit('/')
    })

    it("renders button in header", () => {
        cy.contains('Nova transação').click();
    /*     cy.get('input').invoke('attr', 'placeholder').should('contain', 'Título').type('Testando título', { force: true });
        */
     /*    cy.get('input[type=text]').type('Testando título', { force: true });  */
        cy.get('#amount').type('1000').trigger('change');
        cy.wait(1000);
        cy.get('#amount').should('not.be.empty')

       /*  cy.get('#amount').should(($p) => {
            cy.log("oi", $p)
            expect($p).to.have.text(1.000)
        
            
          }) */

    })
})
