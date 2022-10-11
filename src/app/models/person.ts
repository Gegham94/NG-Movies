export interface Person {
  id: number;
  adult: boolean;
  gender: number;
  also_known_as: string[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  deathday: string;
  known_for: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export interface PersonDto {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface PersonImages {
  profiles: {
    file_path: string;
  }[];
}

export interface PersonMovieCredits {
  cast: {
    title: string;
    backdrop_path: string;
  }[];
}
