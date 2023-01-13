
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:80')
    cy.wait(1000)
  })
})

describe('visit painting',()=>{
  it('shows painting',()=>{
    cy.visit('http://localhost:80/info/1')
    cy.wait(2000)
    cy.contains('.attr')
  })
})

describe('empty', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081')
    cy.wait(1000)
  })
})

