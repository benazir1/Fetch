import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Books from './Book'
import './Books.css'
const URL ="http://localhost:3000/books"

const fetchHandle = async() =>{
return await axios.get(URL).then((res)=>res.data)
}

const Book = () => {
    const [books,setBook] =useState();
    useEffect(()=>{
     fetchHandle().then((data)=>setBook(data.books));
    },[]);
    console.log(books);
    
  return (
    <div>
    <ul>
      {books && books.map((book,i)=>(
        <li className='book' key={i}>
          <Books book={book}/>

        </li>
      ))}
    </ul>
  </div>
  )
}

export default Book