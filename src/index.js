import React from 'react';
import ReactDom from 'react-dom';

//Mini Project

//CSS
import './index.css';

//setup vars

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
  title: 'If Animals Kissed Good Night',
  author: 'Ann Whitford Paul',
};

const title = 'Dog Man: Grime and Punishment';
const author = 'Dav Pilkey';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/5114SwAJ1oL._SX336_BO1,204,203,200_.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
