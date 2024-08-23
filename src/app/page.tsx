"use client";

import CarouselMovie from "@/components/molecules/CarouselMovie";
import CardTemplate from "@/components/templats/CardTemplate";
import Footer from "@/components/templats/Footer";
import Header from "@/components/templats/Header";
import useMovies from "@/hooks/useMovies";
import useGenres from "@/hooks/useGenres";


import { useState } from "react";
import Link from "next/link";


const PropsUseMovies = [
  {
    "pages": 2,
    "sort_by": "popularity.desc"
  },
  {
    "pages": 2,
    "sort_by": "created_at.desc"
  }
];

const NextPage = (page: number) => {
  return page + 1;
}

const LastPage = (page: number) => {
  if (page <= 1) {
    return 1;
  }
  return page - 1;
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const { genres } = useGenres();
  const { movies } = useMovies({ pages: page, sort_by: "popularity.desc" });

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex justify-between text-sky-400 bg-sky-950 basis-14 items-center text-lg px-4 rounded-t-lg">
        <h2 className="text-xl">Page: {page}</h2>
        <input type="search" name="" id="" placeholder="Search"/>
      </div>
      <div className="basis-2/6">
        <CarouselMovie movies={movies} />
      </div>
      <div className=" basis-16">
                {genres.length > 0 ? (
                  <div className="flex flex-wrap gap-2 justify-between">
                    {genres.map((genre) => (
                      <button
                        key={genre.id}
                        onClick={() => setSelectedGenre(genre.id)}
                        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-colors"
                      >
                        {genre.name}
                      </button>
                      ))}
                      <button
                        onClick={() => setSelectedGenre(null)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        All Genres
                      </button>
                  </div>
                ) : (
                    <p>Cargando géneros...</p>
                )}
      </div>
      <div className="basis-1/2 grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie: any) => (
          <CardTemplate
            id={movie.id}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={550}
            title={movie.title}
            releaseDate={movie.release_date}
            genre={movie.genre}
            popularity={movie.popularity}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 bg-sky-950 basis-10 rounded-b-lg text-lg items-center text-sky-400">
        <button onClick={() => setPage(LastPage(page))} className="text-sky-400 text-xl hover:text-sky-100">
          Last Page
        </button>
        <div>
          ||
        </div>
        <button onClick={() => setPage(NextPage(page))} className="text-sky-400 text-xl hover:text-sky-100">
          Next Page
        </button>
      </div>
    </div>
  );
}
