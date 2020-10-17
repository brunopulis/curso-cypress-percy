describe('Ticketbox', () => {
  beforeEach(() => cy.visit('index.html'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  // Create POM
  it('Checks for invalid email', () => {
    cy.get('#email').type('joao-exemplo.com');
    cy.percySnapshot();
  });

  it('Enables submission after all mandatory fields are filled', () => {
    cy.fillMandatoryFields();
    cy.percySnapshot();
  });

  it('Updates agreement base on full name, tickets, quantity, and type', () => {
    cy.get('#first-name').type('Bruno');
    cy.get('#last-name').type('Pulis');
    cy.get('#ticket-quantity').select('4');
    cy.get('#vip').check();
    cy.percySnapshot();
  });

  const successfulFormSubmission = 'Shows a success message after form submission';
  it(successfulFormSubmission, () => {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click();
    cy.percySnapshot(
      successfulFormSubmission, {
        percyCss: `.success span { display: none }`
      }
    );
  });
});
