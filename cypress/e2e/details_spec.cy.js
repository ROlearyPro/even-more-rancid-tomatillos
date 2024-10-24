import details from '../fixtures/movie_details.json'

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
    
  })
})