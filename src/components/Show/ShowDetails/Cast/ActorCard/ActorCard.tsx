import { Actor } from '../../../../../types/actor';
import defaultImage from '../../../../../assets/images/default-actor-img.png';
import './ActorCard.css';

interface Props {
  actor: Actor;
}

export const ActorCard = ({ actor }: Props) => {

  const imageUrl = `https://image.tmdb.org/t/p/w300/`;
  const image = actor.profile_path ? imageUrl + actor.profile_path : defaultImage;

  return (
    <div className="ActorCard">
      <img src={image}
           className="ActorCard__image"
           alt="" />
      <div className="ActorCard__name-wrapper">
        <p className="ActorCard__name"> { actor.name }</p>
      </div>
    </div>
  );
};