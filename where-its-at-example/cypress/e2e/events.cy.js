describe('Events spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('should display events', () => {
    cy.wait(2000);
    cy.get('[data-id="event"]').should('have.length.greaterThan', 2);
  });

  it('should display event info', () => {
    cy.wait(2000);
    cy.get('[data-id="eventDate"]').first().should('have.text', '21 Mar');
    cy.get('[data-id="eventTitle"]').first().should('have.text', 'Lasse-Stefanz');
    cy.get('[data-id="eventPlace"]').first().should('have.text', 'Avicii arena');
    cy.get('[data-id="eventTime"]').first().should('have.text', '20.00 - 22:00');
    cy.get('[data-id="eventPrice"]').first().should('have.text', '400 kr');
  });

  it('should be able to click on a event', () => {
    cy.wait(2000);
    cy.get('[data-id="event"]').first().click();
    cy.get('[data-id="buy"]').should('be.visible');
  });
})