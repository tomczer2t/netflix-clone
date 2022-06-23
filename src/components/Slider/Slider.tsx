import { useEffect, useRef, useState } from 'react';
import { useAxiosApiKey } from '../../hooks/useAxiosApiKey';
import { useGroupArray } from '../../hooks/useGroupArray';
import { SliderItems } from './SliderItems/SliderItems';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Query } from '../../types/query';
import { Show } from '../../types/show';
import './Slider.css';

interface Props {
  label: string;
  endPoint: string;
  vertical?: boolean;
  type: Query;
}

export const Slider = ({ label, endPoint, vertical, type }: Props) => {

  const [movies, setMovies] = useState<Show[] | null>(null);
  const [movieGroups, setMovieGroups] = useState<Show[][] | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const letsGroup = useGroupArray();
  const axios = useAxiosApiKey();

  const sliderContanerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    (async () => {
      const { data } = await axios.get(endPoint);
      data.results = data.results.filter((movie: Show) => movie.backdrop_path);
      data.results = data.results.map((movie: Show, index: number) => ({
        ...movie,
        movieNumberInRow: index + 1,
        imageUrl: `https://image.tmdb.org/t/p/w300/${ vertical ? movie.poster_path : movie.backdrop_path }`,
      }));
      const moviesOnGroups = letsGroup(data.results, 2);
      setMovieGroups(moviesOnGroups);
      setMovies(data.results);
    })();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (!movies) return;
    let groupSize = 2;
    if (windowWidth > 999) {
      groupSize = 5;
    } else if (windowWidth > 799) {
      groupSize = 4;
    } else if (windowWidth > 599) {
      groupSize = 3;
    }

    const moviesOnGroups = letsGroup(movies, groupSize);
    setMovieGroups(moviesOnGroups);
  }, [windowWidth, movies]);

  const handleLeft = () => {
    sliderContanerRef.current.scrollLeft -= window.innerWidth;
  }

  const handleRight = () => {
    sliderContanerRef.current.scrollLeft += window.innerWidth;
  }

  if (!movieGroups) return null;

  return (
    <div className="Slider">
      <h3 className="Slider__title">{ label }</h3>
      <div className="Slider__container" ref={ sliderContanerRef }>
        <div className="Slider__action-buttons">
          <span className="Slider__single-action-button" onClick={ handleLeft }><GoChevronLeft /></span>
          <span className="Slider__single-action-button" onClick={ handleRight }><GoChevronRight /></span>
        </div>

        { movieGroups.map((group, index) => (
          <div key={ index }
               className="Slider__group">
            <SliderItems key={ index }
                         type={ type }
                         movies={ group }
                         vertical={ !!vertical } />
          </div>
        )) }

      </div>
    </div>
  );
};