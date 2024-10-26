import posters from '../fixtures/movie_posters.json'

describe('Error Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    }).as("loadPage")
    cy.visit('http://localhost:3000/')
  });

  it('displays 404 error if movie id does not exist', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/Bumblebee', {
      statusCode: 404,
      body: { error: "Not Found"}
    }).as("404Page")
    cy.visit('http://localhost:3000/Bumblebee')
    cy.get('h2').contains("We are so sorry, there's been a 404 error! Please try again later.")
  });

  it('displays an error when there is no valid endpoint to access', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/error', {
      statusCode: 404,
      body: { error: "Internal Server Error"}
    }).as("404Page2")
    cy.visit('http://localhost:3000/error/')
    cy.get('h2').contains("We are so sorry, there's been a 404 error! Please try again later.")
  });

  it('displays 500 error for an API failure', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/error', {
      statusCode: 500,
      body: { error: "Internal Server Error"}
    }).as("500Page")
    cy.visit('http://localhost:3000/error/')
    cy.get('h2').contains("We are so sorry, there's been a 500 error! Please try again later.")
  });
})
