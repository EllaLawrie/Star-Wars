import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useMultiApiCalls } from '../hooks/useMultiApiCalls'

const MovieDetail = () => {
  const { id } = useParams()
  const getMovieDetail = async (movieId) => {
    try {
      return (await axios.get(`https://swapi.dev/api/films/${movieId}/`)).data
    } catch (error) {
      return error
    }
  }
  const { data: movie, isFetching } = useQuery(['movie-detail', id], () =>
    getMovieDetail(id)
  )

  const { data: characters, isFetching: isCharaterLoading } = useMultiApiCalls(
    movie?.characters,
    'characters'
  )
  const { data: species, isFetching: isSpeciesLoading } = useMultiApiCalls(
    movie?.species,
    'species'
  )
  const { data: planets, isFetching: isPlanetsLoading } = useMultiApiCalls(
    movie?.planets,
    'planets'
  )

  const { data: starships, isFetching: isStarshipsLoading } = useMultiApiCalls(
    movie?.starships,
    'starships'
  )
  const { data: vehicles, isFetching: isVehiclesLoading } = useMultiApiCalls(
    movie?.vehicles,
    'vehicles'
  )
  const navigate = useNavigate()
  return (
    <div>
      {isFetching && <p className='movie-detail-desc'>Loading...</p>}
      {movie && (
        <section className='detail-wrapper'>
          <div className='detail-card'>
            <div>
              <button onClick={() => navigate(-1)}> &larr; Back to List</button>
            </div>
            <div className='detail-header'>
              <h1 className='movie-detail-header text-center mb-3'>
                {movie.title}
              </h1>
              <p className='text-center text-white mb-3'>
                Director: {movie.director}
              </p>
              <p className='text-center text-white mb-3'>
                Producer: {movie.producer}
              </p>
            </div>
            <div className='description'>
              <p className='list-title'>Description</p>
              <p className='movie-detail-desc'>{movie.opening_crawl}</p>
            </div>
            <hr className='divider' />
            <div className='character list-container'>
              <p className='list-title'>Character</p>
              <ul className='name-grid'>
                {characters?.length > 0 &&
                  characters.map(({ name }) => <li>{name}</li>)}
              </ul>
            </div>
            <hr className='divider' />
            <div className='planets list-container'>
              <p className='list-title'>Planets</p>
              <ul className='name-grid'>
                {planets?.length > 0 &&
                  planets.map(({ name }) => <li>{name}</li>)}
              </ul>
            </div>
            <hr className='divider' />
            <div className='species list-container'>
              <p className='list-title'>Species</p>
              <ul className='name-grid'>
                {species?.length > 0 &&
                  species.map(({ name }) => <li>{name}</li>)}
              </ul>
            </div>
            <hr className='divider' />
            <div className='starships list-container'>
              <p className='list-title'>Starships</p>
              <ul className='name-grid'>
                {starships?.length > 0 &&
                  starships.map(({ name }) => <li>{name}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
export default MovieDetail
