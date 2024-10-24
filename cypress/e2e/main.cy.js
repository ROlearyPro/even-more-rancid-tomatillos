// Mock data to use for testing:
import posters from '../fixtures/movie_posters.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })
    cy.visit('http://localhost:3000/')
    // use this every time I need localhost 3000
  });
  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
    cy.get('p').contains("We'll make some movie posters show up here!")
  });

  it('displays movie poster cards and their voting systems', () => {
    cy.get('[data-cy=poster-container]').should('have.length', 4)

    cy.get('[data-cy=poster-container]').first().within(() => {
      cy.get('[data-cy=poster-image]').should('be.visible')})
      cy.get('[data-cy=voting-container]').each(() => {
        cy.get('[data-cy=upvote]').should('be.visible')
        cy.get('[data-cy=downvote]').should('be.visible')
        cy.get('[data-cy=vote-count]').should('be.visible', 'contain', posters[0].vote_count)
      })
    cy.get('[data-cy=poster-container]').last().within(() => {
      cy.get('[data-cy=poster-image]').should('be.visible')})
      cy.get('[data-cy=voting-container]').each(() => {
        cy.get('[data-cy=upvote]').should('be.visible')
        cy.get('[data-cy=downvote]').should('be.visible')
        cy.get('[data-cy=vote-count]').should('be.visible', 'contain', posters[0].vote_count)
      })
  });
})
// Check 1st and last cards(by index)

// sad paths to consider 404(wrong id not found) and 500 errors