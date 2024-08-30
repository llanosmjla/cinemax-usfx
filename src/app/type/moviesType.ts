export type MoviesType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    relase_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MoviesRequest = {
    genre?: number | null;
    page: number;
}

export type MoviesResponse = {
    page: number;
    results: MoviesType[];
    total_pages: number;
    total_results: number;
}

export type GenresType = {
    id: number;
    name: string;
}

export type GenresResponse = {
    genres: GenresType[];
}

export type CreditsType = {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number | null;
    character: string;
    credit_id: string;
    order: number;
}

export type CreditsResponse = {
    id: number;
    cast: CreditsType[];
}