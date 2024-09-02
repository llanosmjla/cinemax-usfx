import { useState, useEffect } from "react";
import useMovies from "./useMovies";

interface FilterParams {
  page: number;
  genreId: number | null;
  query: string | null;
}

const useFilteredMovies = ({ page, genreId, query }: FilterParams) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { movies } = useMovies({ pages: page, sort_by: "popularity.desc" });

  useEffect(() => {
    let filtered = movies;

    if (genreId) {
      filtered = movies.filter((movie: any) => movie.genre_ids.includes(genreId));
    }

    if (query) {
      filtered = filtered.filter((movie: any) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [movies, genreId, query]);

  return { filteredMovies };
};

export default useFilteredMovies;
