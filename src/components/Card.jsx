import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, releaseDate, openingCrawl, img, movieId }) => {
  return (
    <div className='movie-card'>
      <div className='card-img'>
        <img src={img} alt='' />
      </div>
      <div className='card-content'>
        <h2>{title}</h2>
        <p className='date'>{releaseDate}</p>
        <p className='card-desc'>{openingCrawl}</p>
        <hr />
        <Link to={`/movies/${movieId}`}>More Info</Link>
      </div>
    </div>
  )
}

export default Card
