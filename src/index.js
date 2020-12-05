import React from 'react';
import ReactDom from 'react-dom';

//Mini Project

//CSS
import './index.css';

const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul',
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    title: 'Dog Man: Grime and Punishment',
    author: 'Dav Pilkey',
  },
];

const names = ['john', 'peter', 'susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newName);
function BookList() {
  return <section className='booklist'>{newName}</section>;
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
