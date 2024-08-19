"use client";

import CarouselMovie from "@/components/molecules/CarouselMovie";
import CardTemplate from "@/components/templats/CardTemplate";
import useMovies from "@/hooks/useMovies";


import { useState } from "react";


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
  const { movies } = useMovies({ pages: page, sort_by: "popularity.desc" });

  return (
    <>

      <div className="flex justify-center text-sky-400 bg-sky-950 rounded-lg">
        <h2>Page: {page}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie: any) => (
          <CardTemplate
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            title={movie.title}
            releaseDate={movie.release_date}
            genre={movie.genre}
            popularity={movie.popularity}
          />
        ))}
      </div>
      <div className="flex gap-4 justify-center rounded-lg bg-sky-950">
        <div className="flex justify-center text-sky-400">
          <button onClick={() => setPage(LastPage(page))}>Last Page </button>
        </div>
        <div className="text-sky-600">||</div>
        <div className="flex justify-center text-sky-400">
          <button onClick={() => setPage(NextPage(page))}> Next Page</button>
        </div>
      </div>

    </>
  );
}
