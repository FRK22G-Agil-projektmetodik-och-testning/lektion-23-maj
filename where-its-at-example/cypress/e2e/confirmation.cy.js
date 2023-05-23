describe('Confirmation spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
    
    cy.get('[data-id="event"]').should('be.visible');
    cy.get('[data-id="event"]').first().click();

    cy.get('[data-id="buy-button"]').first().click();
    cy.get('[data-id="confirmation"]').should('be.visible');
  });

  it('should show ticket info', () => {
    cy.get('[data-id="eventDate"]').should('have.text', '21 Mar');
    cy.get('[data-id="eventTitle"]').should('have.text', 'Lasse-Stefanz');
    cy.get('[data-id="eventPlace"]').should('have.text', 'Avicii arena');
    cy.get('[data-id="eventTimeFrom"]').should('have.text', '20.00');
    cy.get('[data-id="eventTimeTo"]').should('have.text', '22:00');
  });
})