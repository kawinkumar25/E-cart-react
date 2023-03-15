import React from 'react'
import '../styles/search.css'
import {Link} from "react-router-dom"
const Search = () => {
  return (
    <div className='search'>
        <div className='title'>
            SEARCH
        </div>
            <Link to ="/"><div className='books'>ALL BOOKS</div></Link>
            <Link to="/children"><div className='books'>children Books</div></Link>
            <Link to="/horror"><div className='books'>Horror books</div></Link>
            <Link to="/love"><div className='books'>Love books</div></Link>
            <Link to="/action"><div className='books'>Action books</div></Link>
            <Link to="/marvel"><div className='books'>Marvel books</div></Link>

      
    </div>
  )
}

export default Search
