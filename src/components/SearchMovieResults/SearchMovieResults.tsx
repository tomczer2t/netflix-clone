import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContextProvider/SearchContextProvider';
import { useAxiosApiKey } from '../../hooks/useAxiosApiKey';
import './SearchMovieResults.css';
import { Movie } from '../../types/movie';
import { SearchMovieItem } from './SearchMovieItem/SearchMovieItem';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useSearchParams } from 'react-router-dom';
import { NoResults } from './NoResults/NoResults';

export const SearchMovieResults = () => {

  const [results, setResults] = useState<Movie[] | null>([]);
  const [loaded, setLoaded] = useState(false);
  const [searchParams] = useSearchParams();
  const { term, setTerm } = useContext(SearchContext);
  const axios = useAxiosApiKey();

  useEffect(() => {
    setTerm(searchParams.get('q'));
  }, [])

  useEffect(() => {
    if (term)
      (async () => {
        const { data } = await axios.get(`search/movie?query=${ term }`);
        setResults(data.results);
        setLoaded(true);
      })();
  }, [term]);

  if (!loaded) return <LoadingSpinner />;

  return (
    <section className="SearchMovieResults">
      <div className="SearchMovieResults__list">
        { results.map(movie => (
          <SearchMovieItem movie={ movie }
                           key={ movie.id } />
        )) }
      </div>

      { !results[0] &&  <NoResults term={term}/>}
    </section>
  );
};