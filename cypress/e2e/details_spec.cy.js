import details from '../fixtures/movie_details.json'
import posters from '../fixtures/movie_posters.json'

describe('Movie Details', () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies',{
      statusCode: 200,
      fixture: 'movie_posters'
    }).as('loadPage')
    cy.visit('http://localhost:3000/')
    cy.wait('@loadPage')
  });

  it('clicking on a posters displays movie details', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
      statusCode: 200,
      fixture: "movie_details"
    }).as('detailSplash');

    cy.get('[data-cy="poster-image"]').first().click()
    cy.wait('@detailSplash');

    cy.get('[data-cy="home-button"').contains('RANCID TOMATILLOS')
    cy.get('[data-cy="home-button"').should('be.visible')
    cy.get('[data-cy="poster-image"').should('be.visible')
    cy.get('[data-cy="poster-title"').should('be.visible')
    cy.get('[data-cy="poster-title"').should('have.text', details.title)
    cy.get('[data-cy="poster-genres"').should('be.visible')
    cy.get('[data-cy="poster-genres"').should('have.text', 'DramaActionCrimeThriller')
    cy.get('[data-cy="poster-overview"').should('be.visible')
    cy.get('[data-cy="poster-overview"').should('have.text', details.overview)
  });

  it('clicking on "rancid tomatillos" returns the user home', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
      statusCode: 200,
      fixture: "movie_details"
    }).as('detailSplash');
    cy.visit('http://localhost:3000/155')
    cy.wait('@detailSplash')

    cy.get('[data-cy="home-button"').click()
    cy.wait('@detailSplash')

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