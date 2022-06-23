import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';

export const HomeView = () => {

  return (
    <>
      <Header />
      <Slider label="Popular" endPoint="movie/popular" type="movie" />
      <Slider label="Top rated" endPoint="movie/top_rated" type="movie"/>
      <Slider label="Top 10 Movies in USA Today" endPoint="trending/movie/day" vertical type="movie"/>
      <Slider label="Upcoming" endPoint="movie/upcoming" type="movie"/>
      <Slider label="Top 10 TV Shows in USA Today" endPoint="trending/tv/day" vertical type="tv"/>
      <Slider label="New Releases" endPoint="movie/now_playing" type="movie"/>
      <Slider label="Dramas" endPoint="discover/movie?with_genres=18" type="movie"/>
      <Slider label="Action movies" endPoint="discover/movie?with_genres=28&sort_by=revenue.desc&vote_count.gte=2000" type="movie"/>
      <Slider label="Comedies" endPoint="discover/movie?with_genres=35&sort_by=vote_count.desc" type="movie"/>
      <Slider label="Family" endPoint="discover/movie?with_genres=10751&vote_count.gte=1000" type="movie"/>
      <Slider label="Thrillers" endPoint="discover/movie?with_genres=53&vote_count.gte=1000" type="movie"/>
    </>
  );
};