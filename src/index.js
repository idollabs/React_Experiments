import React from 'react';
import ReactDom from 'react-dom';

//Mini Project

//CSS
import './index.css';

// const names = ['john', 'peter', 'susan'];
// const newName = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newName);

import { books } from './books';
import Book from './Book';
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
