import { get } from "./axios-instance.ts";
import { AxiosResponse } from "axios";
import { MovieApiResponseData } from "../types/movie.ts";
import { Detail } from "../types/detail.ts";
import { MovieCredits } from "../types/credit.ts";

export const getMovies  = async (page: number) => {
  try {
    const res: AxiosResponse<MovieApiResponseData> = await get(`/movie/popular?language=ko-US&page=${page}`);
    return res;
  } catch ( error ) {
    console.error("Failed to fetch movies:", error);
    return undefined; // 오류 발생 시 undefined를 반환
  }
};

export const getCategoryMovies = async (page: number, url: string) => {
  try {
    const res: AxiosResponse<MovieApiResponseData> = await get(`/movie/${url}?language=ko-US&page=${page}`);
    return res;
  } catch ( error ) {
    console.error("Failed to fetch movies:", error);
    return undefined; // 오류 발생 시 undefined를 반환
  }
}

export const getMovieDetails = async (id: string) => {
  try {
    const res: AxiosResponse<Detail> = await get(`/movie/${id}?language=ko-US`);
    return res;
  } catch ( error ) {
    console.error("Failed to fetch movie detail:", error);
    return undefined; // 오류 발생 시 undefined를 반환
  }
}

export const getCredit = async (id: string) => {
  try {
    const res: AxiosResponse<MovieCredits> = await get(`/movie/${id}/credits?language=ko-US`);
    return res;
  } catch ( error ) {
    console.error("Failed to fetch movie credits:", error);
    throw error
  }
}

// Interface for a single movie
interface Movie {
  adult: boolean;
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

// Interface for paginated movie data
interface SearchMoviesApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


export const getSearchMovies = async (query: string) => {
  try {
    const res: AxiosResponse<SearchMoviesApiResponse> = await get(`/search/movie?query=${query}&include_adult=false&language=ko-US&page=1`);
    return res.data;
  } catch ( error ) {
    console.error("Failed to fetch search movies:", error);
    return undefined; // 오류 발생 시 undefined를 반환
  }
}
