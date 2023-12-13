import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import {books} from './books'
import Book from './Book'

const BookList = () => {
  return (
    <React.Fragment>
    <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, nums) => {
          //  const{img,title,author, id }= book
          return <Book {...book} key={book.id} index={nums} />
        })}
      </section>
    </React.Fragment>
  )
}



// const Book = (props) => {
//   console.log(props)
//   const {img,title, author} = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }
// function Greeting() {
//     return React.createElement('h2',{},'hello world')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
