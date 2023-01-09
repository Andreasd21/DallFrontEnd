describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://localhost')
    cy.wait(5000)
  })
})