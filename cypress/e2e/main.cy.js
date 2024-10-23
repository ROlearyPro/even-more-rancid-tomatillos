// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json'
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })
    // use this every time I need localhost 3000
  })
  it('displays title on page load', () => {
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('rancid tomatillos')
    .get('p')
  })
})
// Check 1st and last cards(by index)

// sad paths to consider 404(wrong id not found) and 500 errors