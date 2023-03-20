import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const BookCard = ()=> {
  const book = props.book

    return(
        <div className = 'card-container'>
          <img
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FJulia-Donaldson-Ziplock-Pack-2015%2Fdp%2F1509801251&psig=AOvVaw02RNu7NfZEJMuC10d7VycR&ust=1679382288433000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCvjNj46f0CFQAAAAAdAAAAABAE' 
            alt = 'Books' 
            height = {200} 
            />
            <div className = 'desc'>
              <h2>
                <Link to = {`/show-book/${book._id}`}>{book.title}</Link>

              </h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
              </div> 
         </div>


    );
  } ;

    export default  BookCard;