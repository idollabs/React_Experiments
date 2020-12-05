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

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
  title: 'Dog Man: Grime and Punishment',
  author: 'Dav Pilkey',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          totam facere sapiente optio eligendi consequuntur eum, est
          voluptatibus? Cum, reprehenderit!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  //const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
