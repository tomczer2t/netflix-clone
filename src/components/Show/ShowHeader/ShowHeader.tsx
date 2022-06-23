import { BsFillPlayFill } from 'react-icons/bs';
import './ShowHeader.css';
import { Show } from '../../../types/show';
import { useState } from 'react';
import { Video } from '../../Video/Video';

interface Props {
  movie: Show;
}

export const ShowHeader = ({ movie }: Props) => {

  const [showVideo, setShowVideo] = useState(false);

  let title;

  if ('title' in movie) {
    title = <h1 className="ShowHeader__title">{ movie.title }</h1>;
  } else {
    title = <h1 className="ShowHeader__title">{ movie.name }</h1>;
  }
  const videos = movie.videos.results;
  const officialTrailer = videos.filter(video => video.name.toLowerCase() === 'official trailer')[0];
  const anyTrailer = videos.filter(video => video.name.toLowerCase().includes('trailer'))[0];
  const imageUrl = `https://image.tmdb.org/t/p/w1280/${ movie.backdrop_path || movie.poster_path }`;
  return (
    <>
      <header className="ShowHeader Header"
              style={ {
                backgroundImage: `url(${ imageUrl })`,
                backgroundPosition: `${ movie.backdrop_path ? 'top' : 'center' }`
              } }>
        <div className="ShowHeader__text-box">
          { title }
          <button onClick={ () => setShowVideo(true) }
                  className="ShowHeader__button Header__button"><BsFillPlayFill /> Play Trailer
          </button>
        </div>
      </header>
      { showVideo && videos[0] && <Video videoUrl={ officialTrailer?.key || anyTrailer?.key || videos[0].key }
                                         hideVideo={ () => setShowVideo(false) } /> }
    </>
  );
};