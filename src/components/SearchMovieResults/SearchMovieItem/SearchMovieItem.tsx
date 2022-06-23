import { Movie } from '../../../types/movie';
import { Link } from 'react-router-dom';
import './SearchMovieItem.css';

interface Props {
  movie: Movie;
}

export const SearchMovieItem = ({ movie }: Props) => {

  const posterUrl = `https://image.tmdb.org/t/p/w300/${ movie.poster_path } `;

  if (!movie.poster_path) return null;

  return (
    <div className="SearchMovieItem">
      <Link to={`/movie/${ movie.id }`}>
       <img  className="SearchMovieItem__image" src={ posterUrl }
           alt="" />
      </Link>
    </div>
  );
};