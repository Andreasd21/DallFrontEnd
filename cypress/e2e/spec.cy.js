describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:80')
    cy.wait(5000)
  })
})

describe('empty', () => {
  it('passes', () => {
    cy.visit('https://localhost:8081')
    cy.wait(5000)
  })
})