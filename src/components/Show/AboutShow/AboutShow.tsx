
import { TvSeries } from '../../../types/tvSeries';
import { Movie } from '../../../types/movie';
import { ShowInfo } from './ShowInfo/ShowInfo';


interface Props {
  show: TvSeries | Movie;
}

export const AboutShow = ({ show }: Props) => {

  const writers = show.credits.crew.filter(member => member.job.toLowerCase() === 'screenplay');
  const directors = show.credits.crew.filter(member => member.job.toLowerCase() === 'director');
  const writersNames = writers.map(writer => writer.name);
  const directorsNamr = directors.map(director => director.name);
  const genres = show.genres.map(genre => genre.name);

  return (
    <section className="AboutShow">
      <ShowInfo title={ ('title' in show) ? show.title : show.name }
                directors={ directorsNamr }
                writers={ writersNames }
                genres={ genres }
                voteAverage={ show.vote_average }
                voteCount={ show.vote_count }
      />
    </section>
  );
};