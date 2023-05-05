import React, { useMemo } from 'react'
import Card from './Card'
import { useQuery } from 'react-query'
import axios from 'axios'
import { truncate } from '../utils'
import { img1, img2 } from '../assets'

const MovieContent = () => {
  const fetchMovies = async () => {
    const res = await axios.get('https://swapi.dev/api/films')
    return res.data.results
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [img1, img2, img1, img2, img1, img2]

  const { data: movies, isFetching } = useQuery('movies', fetchMovies)

  const updatedMovies = useMemo(() => {
    return movies?.map((movie, index) => {
      return { ...movie, img: images[index % images.length] }
    })
  }, [images, movies])
  return (
    <>
      <div className='movie-content'>
        {isFetching && <p>Loading...</p>}
        {!isFetching &&
          updatedMovies?.map((movie) => (
            <Card
              img={movie.img}
              key={movie.episode_id}
              title={movie.title}
              releaseDate={movie.release_date}
              openingCrawl={truncate(movie.opening_crawl, 260)}
              movieId={movie.episode_id}
            />
          ))}
      </div>
    </>
  )
}

export default MovieContent
