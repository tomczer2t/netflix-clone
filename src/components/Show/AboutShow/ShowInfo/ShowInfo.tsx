import './ShowInfo.css';

interface Props {
  title: string;
  directors: string[];
  writers: string[];
  genres: string[];
  voteAverage: number;
  voteCount: number;
}

export const ShowInfo = ({ title, directors, writers, genres, voteAverage, voteCount }: Props) => {


  return (
    <div className="ShowInfo">
      <h3 className="ShowInfo__title">About <span>{ title }</span></h3>
      <p className="ShowInfo__paragraph"><span>Genres: </span>{ genres.join(', ')}</p>
      { directors[0] && <p className="ShowInfo__paragraph"><span>Director: </span>{ directors.join(', ') }</p> }
      { writers[0] && <p className="ShowInfo__paragraph"><span>Writer: </span>{ writers.join(', ') }</p> }
      { voteAverage && <p className="ShowInfo__paragraph"><span>Vote average: </span>{ voteAverage }</p> }
      { voteCount && <p className="ShowInfo__paragraph"><span>Votes: </span>{ voteCount }</p> }
    </div>
  );
};