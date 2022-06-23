import { SimilarTvSeries } from '../../../types/tvSeries';
import { SimilarMovie } from '../../../types/movie';
import { SimilarShowCard } from './SimilarShowCard/SimilarShowCard';
import { IoIosArrowDown } from 'react-icons/io';
import './SimilarShows.css';
import { useEffect, useState } from 'react';

interface Props {
  similarShows: SimilarTvSeries[] | SimilarMovie[];
}

export const SimilarShows = ({ similarShows }: Props) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [similarShows])

  const similarShowsList = similarShows.map(show => {
    if ('title' in show) {
      return <SimilarShowCard key={ show.id }
                              id={ show.id }
                              imagePath={ show.backdrop_path }
                              overviev={ show.overview }
                              title={ show.title } />;
    } else {
      return <SimilarShowCard key={ show.id }
                              id={ show.id }
                              imagePath={ show.backdrop_path }
                              overviev={ show.overview }
                              title={ show.name } />;
    }
  });

  return (
    <article className="SimilarShows">
      <h2 className="SimilarShows__title">More like this</h2>
      <div className={ open ? 'SimilarShows__list-wrapper SimilarShows__list-wrapper--active' : 'SimilarShows__list-wrapper' }>
        <div className="SimilarShows__list">
          { similarShowsList }
        </div>
      </div>
      <div className="SimilarShows__toggle-button-wrapper">
        <div onClick={ () => setOpen(prev => !prev) }
             className={ open ? 'SimilarShows__toggle-button SimilarShows__toggle-button--active' : 'SimilarShows__toggle-button' }
        >
          <IoIosArrowDown />
        </div>
      </div>
    </article>
  );
};