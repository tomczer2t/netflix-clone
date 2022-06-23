import { Actor } from './actor';
import { Video } from './video';
import { CrewMember } from './crewMember';

export interface SimilarMovie {
  adult: boolean
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  // belongs_to_collection: null
  budget: number;
  credits?: { cast: Actor[], crew: CrewMember[] };
  genres: { id: number, name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  similar?: { results: SimilarMovie[] };
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: { results: Video[] };
  vote_average: number;
  vote_count: number;
  imageUrl?: string;
  movieNumberInRow?: number;
}