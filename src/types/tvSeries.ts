import { Actor } from './actor';
import { Video } from './video';
import { CrewMember } from './crewMember';

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SimilarTvSeries {
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvSeries {
  adult: boolean;
  backdrop_path: string | null;
  created_by: { id: number, name: string, profile_path: string }[];
  credits?: { cast: Actor[], crew: CrewMember[] };
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number, name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: Season[];
  similar?: { results: SimilarTvSeries[] };
  status: string;
  tagline: string;
  type: string;
  videos: { results: Video[] };
  vote_average: number;
  vote_count: number;
  imageUrl?: string;
  movieNumberInRow?: number;
}