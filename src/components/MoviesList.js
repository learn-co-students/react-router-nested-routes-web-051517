import React from 'react'
import { Link } from 'react-router-dom'
 
const MoviesList = ({movies}) => {
  
  const renderMovies = movies.map(movie => 
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  )
 
  return (
    <div>
      {renderMovies}
    </div>
  )
}
 
export default MoviesList