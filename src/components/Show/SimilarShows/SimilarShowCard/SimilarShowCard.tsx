import { Link, useParams } from 'react-router-dom';
import defaultImage from '../../../../assets/images/default-show.png';
import './SimilarShowCard.css';

interface Props {
  title: string;
  id: number;
  imagePath: string;
  overviev: string;
}

export const SimilarShowCard = ({ title, id, imagePath, overviev }: Props) => {

  const imageUrl = `https://image.tmdb.org/t/p/w300/${ imagePath }`;

  const { type } = useParams();

  return (
    <div className="SimilarShowCard">
      <Link to={"/" + type + '/' + id } >
        <img src={ imagePath ? imageUrl : defaultImage  }
             className="SimilarShowCard__image"
             alt="" />
        <div className="SimilarShowCard__text-box">
          <p className="SimilarShowCard__title">{ title }</p>
          <p className="SimilarShowCard__overview">{ overviev.slice(0, 100).trim() }{ overviev.length > 100 ? '...' : '' }</p>
        </div>
      </Link>
    </div>
  );
};