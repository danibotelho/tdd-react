///<reference types="cypress" />

import { api } from '../../../src/services/api';

describe('Devbook application', () => {
  
  // before(() => {
  //   return api.delete('books?_cleanup=true').catch((err) => console.error(err.response));
  // });

  // beforeEach( () => {
  //   const books = [
  //     {"name": "Algoritmos de destruição em massa", "id": 1},
  //     {"name": "Clean Code", "id": 2},
  //     {"name": "Tecnodiversidade", "id": 3}
  //   ]

  //   return books.map(item => api.post('books', item , {
  //     headers: {'Content-Type': 'application/json'}
  //   }))
  // })

  it('Visits the DevBook', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('DevBook');
  });

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map(
        (book) => book.querySelector('h5').innerHTML
      );
      expect(titles).to.deep.equal(['Algoritmos de destruição em massa', 'Clean Code' , 'Tecnodiversidade' ]);
    });
  });
});
