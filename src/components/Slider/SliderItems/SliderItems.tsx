import { SliderItem } from './SliderItem/SliderItem';
import { Query } from '../../../types/query';
import { Show } from '../../../types/show';

interface Props {
  movies: Show[];
  vertical: boolean;
  type: Query;
}

export const SliderItems = ({ movies, vertical, type }: Props) => {

  return (
    <>
      { movies.map((movie) => (
        <SliderItem key={ movie.id }
                    vertical={ vertical }
                    movie={ movie }
                    type={ type } />
      )) }
    </>
  );
};