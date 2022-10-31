import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

// Books
import { books } from './books';
import Book from './Book';

// ReactDOM.render(<Greeting />, document.getElementById('root'));

// setup vars {

function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// ReactDOM.render(<BookList />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);
