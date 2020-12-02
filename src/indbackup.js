import React from 'react';
import ReactDom from 'react-dom';

//stateless functional component
//always return JSX

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

//JS Rules
//return single element
//div / seection / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

// function Greeting() {
//   return (
//     <div>
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

//Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

//Mini Project

//CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/5114SwAJ1oL._SX336_BO1,204,203,200_.jpg'
    alt=''
  />
);

const Title = () => <h1>Dog Man: Grime and Punishment</h1>;

const Author = () => (
  <h4 style={{ color: '#617d98', fontsize: '0.75rem', marginTop: '0.25rem' }}>
    Dave Pikley
  </h4>
);

ReactDom.render(<BookList />, document.getElementById('root'));

//test note
