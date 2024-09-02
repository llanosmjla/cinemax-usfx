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
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MoviesRequest = {
    endpoint: string;
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

// Credits Type
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

export type KeywordsType = {
    id: number;
    name: string;
}

export type UtilsResponse = {
    id: number;
    cast?: CreditsType[];
    crew?: CreditsType[];
    keywords?: KeywordsType[];
}

// Movie Details Type
export type MovieDetailsType = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: GenresType[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}