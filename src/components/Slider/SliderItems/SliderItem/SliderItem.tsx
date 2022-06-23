import './SliderItem.css';
import { Link } from 'react-router-dom';
import { Query } from '../../../../types/query';
import { Show } from '../../../../types/show';

interface Props {
  movie: Show;
  vertical: boolean;
  type: Query;
}

export const SliderItem = ({ movie, vertical, type }: Props) => {
  let image: any;
  try {
    if (vertical) {
      image = require(`../../../../assets/images/${ movie.movieNumberInRow }.png`);
    }
  } catch (e) {
    return null;
  }

  let title;

  if ('title' in movie) {
    title = <h5 className="SliderItem__title">{ movie.title }</h5>;
  }

  return (
    <Link to={`${ type }/${ movie.id }`}>
      <div key={ movie.id }
           className={`SliderItem ${ vertical ? 'SliderItem--vertical' : ''}`}>
        { !vertical && title }
        { vertical && <img className="SliderItem__counter" src={ image } alt="place"/>}
        <img className="SliderItem__image"
             src={ movie.imageUrl }
             alt="" />
      </div>
    </Link>
  );
};