describe('Voting System', () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies',{
      statusCode: 200,
      fixture: 'movie_posters'
    }).as('loadPage')
    cy.visit('http://localhost:3000/')
    cy.wait('@loadPage')
  });

  it('upvote button working', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      body: { vote_count: 100},
      headers: {
        "Content-Type": 'application/json'
      },
    }).as('upvoteMovie');

    cy.get('[data-cy="upvote"]').first().click()
    cy.wait('@upvoteMovie').its('response.statusCode').should('eq', 200);

  })

  it('downvote button working', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      body: { vote_count: 98}
    }).as('downvoteMovie');

    cy.get('[data-cy="downvote"]').first().click()
    cy.wait('@downvoteMovie').its('response.statusCode').should('eq', 200);
  })
})
