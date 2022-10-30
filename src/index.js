import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

/*
// ReactDOM.render(<Greeting />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Greeting />);
*/

// setup vars {
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/41ZLnc34EiL._AC_UY218_.jpg',
    title: 'Verity',
    author: 'Colleen Hoover',
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71k+gTdHTOL._AC_UL210_SR195,210_.jpg',
    title: 'The Passenger',
    author: 'Cormac McCarthy',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81PMOtoT7zL._AC_UL210_SR195,210_.jpg',
    title: 'Fairy Tale',
    author: 'Stephen King',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// ReactDOM.render(<BookList />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);
