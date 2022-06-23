import React from 'react';
import { useParams } from 'react-router-dom';
import { Show } from '../../../../types/show';
import './DetailsBar.css';

interface Props {
  movie: Show;
}

export const DetailsBar = ({ movie }: Props) => {

  const { type } = useParams();

  let p: React.ReactElement ;

  if ("runtime" in movie) {
    p = (
      <>
        <p>{ movie.release_date.split('-')[0] }</p>
        <p>{ Math.floor(movie?.runtime / 60)  }h{ movie?.runtime % 60 }m</p>
      </>
    )
  } else {
    p = (
      <>
        <p>{ movie.first_air_date.split('-')[0] }</p>
        <p>{ movie.number_of_seasons } { movie.number_of_seasons > 1 ? 'seasons' : 'season' }</p>
      </>
    )
  }


  return (
    <div className="DetailsBar">
      { p }
    </div>
  );
};