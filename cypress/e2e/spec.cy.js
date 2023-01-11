describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:80')
    cy.wait(1000)
  })
})

describe('empty', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081')
    cy.wait(1000)
  })
})