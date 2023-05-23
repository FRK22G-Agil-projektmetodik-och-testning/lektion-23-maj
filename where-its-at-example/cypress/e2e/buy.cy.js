describe('Buy spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
    
    cy.get('[data-id="event"]').should('be.visible');
    cy.get('[data-id="event"]').first().click();
  });

  it('should display correct event info', () => {
    cy.get('[data-id="eventDate"]').first().should('have.text', '21 Mar 20.00 - 22:00');
    cy.get('[data-id="eventTitle"]').first().should('have.text', 'Lasse-Stefanz');
    cy.get('[data-id="eventPlace"]').first().should('have.text', 'Avicii arena');
    cy.get('[data-id="eventPrice"]').first().should('have.text', '400 kr');
  });

  it('should be able to click on buy', () => {
    cy.get('[data-id="buy-button"]').first().click();
    cy.get('[data-id="confirmation"]').should('be.visible');
  });
})