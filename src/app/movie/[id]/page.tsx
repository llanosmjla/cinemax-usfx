'use client';

import useMovies from "@/hooks/useMovies";
import Image from 'next/image';
import MovieCast from "@/components/templats/MovieCast";
import MovieGenres from "@/components/templats/MovieGenres";
import MovieKeywords from "@/components/templats/MovieKeywords";

interface MovieDetailsProps {
    params: { id: number };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ params }) => {
    const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    const movie = movies.find((item: any) => item.id === Number(params.id));

    if (!movie) {
        return <div className="text-center text-xl">Movie not found</div>;
    }

    const budget = movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A';
    const revenue = movie.revenue ? `$${movie.revenue.toLocaleString()}` : 'N/A';
    const releaseDate = new Date(movie.release_date).toLocaleDateString();
    const duration = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;

    return (
        <div className="h-screen">
            {/* CABECERA */}
            <header className="bg-sky-950 h-16 flex justify-center items-center text-white text-3xl">
               Cinema App
            </header>
            {/* IMAGEN DE FONDO */}
            <main 
                className="relative bg-cover bg-top h-auto pb-5 flex items-center flex-col md:flex-row lg:flex-row gap-x-7 px-8"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}
                >
                <div className="w-1/3 flex justify-center items-center rounded-lg shadow-md mb-4">
                    <Image
                    className="mt-6 rounded-lg shadow-lg"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    width={370}
                    height={200}
                    priority
                    />
                </div>
                <div className="w-2/4 h-auto text-white flex justify-center flex-col gap-y-2 text-center lg:justify-start items-start">
                    <h1 className="text-2xl font-bold underline lg:text-5xl pb-3 text-left">{movie.title}</h1>
                    <p className="flex flex-col text-base lg:text-2xl text-left">Release Date <i>{releaseDate}</i></p>
                    <p className="flex flex-col text-base lg:text-2xl text-left">Duration <i>{duration}</i></p>
                    <p className="flex flex-col text-xl  lg:text-2xl  text-left">Genres <strong className="pt-2"><MovieGenres genreIds={movie.genre_ids}/></strong></p>
                    <i className="text-base text-white lg:text-2xl  text-left">Tagline: {movie.tagline}</i>
                    <p className="text-base capitalize text-justify lg:text-xl">{movie.overview}</p>
                </div>
            </main>
            {/* CONTENIDO */}
            <div className="flex flex-col lg:flex-row">
                {/* Seccion # 1 */}
                <section className="h-auto lg:w-3/4">
                    {/* actores */}
                    <div className="h-auto">
                        <p className="flex text-5xl underline text-sky-950 font-bold text-center py-5 lg:text-left pl-10">Casting </p>
                            <MovieCast movieId={movie.id}/>
                    </div>
                    {/* SOCIAl
                    <div className="bg-sky-300 h-80">
                        social
                    </div> */}
                </section>
                 {/* Seccion # 2 */}
                <section className="lg:w-1/4 h-auto bg-sky-950 text-white">
                    {/* INFO */}
                    <div className=" flex flex-col h-2/4 pt-5 pl-5">
                        <h2 className="text-4xl font-bold mb-4 underline">Additional Information</h2>
                        <p className="mb-4 flex font-bold flex-col text-xl">Original Title: <span className="my-2 font-normal text-base">{movie.original_title}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Status: <span className="my-2 font-normal text-base">{movie.status}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Original Language: <span className="my-2 font-normal text-base uppercase">{movie.original_language}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Budget: <span className="my-2 font-normal text-base ">${budget}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Revenue: <span className="my-2 font-normal text-base">${revenue}</span></p>
                    </div>
                    {/* keywords */}
                    <div className="h-auto pl-5 pr-2 pt-1 flex flex-col">
                        <h2 className="text-4xl font-bold mb-4 underline">Keywords</h2>
                        <MovieKeywords movieId={movie.id}/>
                    </div>
                    {/* PUNTUACION */}
                    <div className="h-1/4 pl-5 pt-5 pb-4">
                        <h2 className="text-4xl font-bold mb-4 underline">Content Rating</h2>
                        <p className="bg-sky-600 text-white text-xl mr-5 p-3 rounded-t-lg text-center">100 %</p>
                        <p className="bg-gray-700 text-white text-xl mr-5 p-3 rounded-b-lg text-center">Yes! it looks good</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MovieDetails;
