import { useEffect, useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useAxiosApiKey } from '../../hooks/useAxiosApiKey';
import { useRandom } from '../../hooks/useRandom';
import { Link } from 'react-router-dom';
import './Header.css';
import { Movie } from '../../types/movie';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const Header = () => {

  const [movie, setMovie] = useState<Movie | null>(null);
  const [image, setImage] = useState('');

  const axiosApi = useAxiosApiKey();
  const random = useRandom();

  useEffect(() => {
    (async () => {
      const { data } = await axiosApi.get('movie/upcoming');
      let backdropPath: string | null;
      let movieIndex: number;
      do {
        movieIndex = random(0, 19);
        backdropPath = data.results[movieIndex].backdrop_path;
      } while (!backdropPath);
      const imageUrl = `https://image.tmdb.org/t/p/w1280/${ backdropPath }`;
      setImage(imageUrl);
      setMovie(prev => {
        return data.results[movieIndex];
      });
    })();
  }, []);

  if (!movie) return <LoadingSpinner />;

  return (
    <header className="Header"
            style={ { backgroundImage: `url(${ image })` } }>
      <div className="Header__movie">
        <h1 className="Header__title">{ movie.title }</h1>
        <p className="Header__overview">{ movie.overview.slice(0, 200) }{ movie.overview.length > 200 ? '...' : '' }</p>
        <Link to={ `movie/${ movie.id }` }>
          <button className="Header__button"><HiOutlineInformationCircle />More info</button>
        </Link>
      </div>
    </header>
  );
};