import axios from 'axios'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

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

  const navigate = useNavigate()
  return (
    <div>
      {isFetching && <p className='movie-detail-desc'>Loading...</p>}
      {movie && (
        <section className='detail-wrapper'>
          <div className='detail-card'>
            <h1 className='movie-detail-header'>{movie.title}</h1>
            <p className='movie-detail-desc'>{movie.opening_crawl}</p>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </section>
      )}
    </div>
  )
}
export default MovieDetail
