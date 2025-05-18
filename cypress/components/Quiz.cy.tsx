import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
    cy.contains('button', 'Start Quiz').should('be.visible')
  });

  it('should show questions and multiple choice options', () => {
    cy.mount(<Quiz />)
    cy.contains('button', 'Start Quiz').click();
    cy.get('h2').should('be visible');
  })

  it('should give a completed message at the end of quiz', () => {
    cy.mount(<Quiz />)
    cy.contains('button', 'Start Quiz').click();

    for (let i = 0; i < 10; i++){
        cy.get('button').contains('1').click();
      }

      cy.get('h2').contains('Quiz Completed').should('be.visible');
  })
});