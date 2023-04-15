import React from 'react'

const Card = ({ title, releaseDate, openingCrawl, img }) => {
  return (
    <div className='movie-card'>
      <div className='card-img'>
        <img src={img} alt='' />
      </div>
      <div className='card-content'>
        <h2>{title}</h2>
        <p className='date'>{releaseDate}</p>
        <p>{openingCrawl}</p>
        <hr />
        <a href='#'>More Info</a>
      </div>
    </div>
  )
}

export default Card
