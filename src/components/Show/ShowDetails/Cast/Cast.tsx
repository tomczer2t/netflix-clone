import { Actor } from '../../../../types/actor';
import './Cast.css';
import { ActorCard } from './ActorCard/ActorCard';

interface Props {
  cast: Actor[];
}

export const Cast = ({ cast }: Props) => {

  return (
    <article className="Cast">
      <h2 className="Cast__title">Cast</h2>
      <div className="Cast_actors-list">
        { cast.slice(0, 8).map(actor => (
          <ActorCard key={ actor.id }
                     actor={ actor } />
        )) }
      </div>
    </article>
  );
};