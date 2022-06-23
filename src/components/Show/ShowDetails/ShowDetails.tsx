import './ShowDetials.css';
import { DetailsBar } from './DetailsBar/DetailsBar';
import { Cast } from './Cast/Cast';
import { Actor } from '../../../types/actor';
import { Show } from '../../../types/show';

interface Props {
  movie: Show;
}

export const ShowDetails = ({ movie }: Props) => {


  return (
    <section className="ShowDetails">
      <div className="ShowDetails__text">
        <DetailsBar movie={ movie } />
        <p className="ShowDetails__overview">{ movie.overview }</p>
      </div>
      <img className="ShowDetails__poster" src={`https://image.tmdb.org/t/p/w1280/${ movie.poster_path }`} alt="poster"/>
      <Cast cast={ movie.credits?.cast as Actor[] } />
    </section>
  );
};