import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAxiosApiKey } from '../../hooks/useAxiosApiKey';
import { ShowHeader } from '../../components/Show/ShowHeader/ShowHeader';
import { ShowDetails } from '../../components/Show/ShowDetails/ShowDetails';
import { SimilarShows } from '../../components/Show/SimilarShows/SimilarShows';
import { Show } from '../../types/show';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { AboutShow } from '../../components/Show/AboutShow/AboutShow';
import { MissingShow } from '../../components/MissingShow/MissingShow';

export const ShowView = () => {
  const [show, setShow] = useState<Show | null>(null);
  const [loaded, setLoaded] = useState(false);
  const {  type, id  } = useParams();
  const axios = useAxiosApiKey();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${ type }/${ id }?&append_to_response=credits,similar,videos`);
        setShow(data);
        setLoaded(true)
      } catch (err) {
        setLoaded(true);
      }
    })();
  }, [axios, id, type])

  if (!loaded) return <LoadingSpinner />
  if (!show) return <MissingShow />;


  return (
    <>
      <ShowHeader movie={ show }/>
      <ShowDetails movie={ show } />
      <SimilarShows similarShows={ show.similar.results } />
      <AboutShow show={ show } />
    </>
  );
}