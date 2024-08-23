'use client';

import useMovies from "@/hooks/useMovies";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MovieDetails({ params }: { params: {id:number} }) {
    const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    const movie = movies.find((item : any) => item.id === Number(params.id));
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        const fetchCast = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
                    }
                };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`, options);
                const data = await response.json();
                setCast(data.cast.slice(0, 6));  // Limitamos a los primeros 5 actores
            } catch (error) {
                console.error("Error fetching cast:", error);
            }
        };

        fetchCast();
    }, [movie]);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const genres = movie.genres ? movie.genres.map((genre:any) => genre.name).join(', ') : 'Géneros no disponibles';

    return (

        <>
            <div 
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} 
                className="basis-3/5 bg-cover bg-top bg-no-repeat bg-clip-content flex flex-row "
            >
                <div className="basis-1/4 flex justify-end pt-12">
                    <Image
                    className="rounded-xl flex justify-center w-80 h-5/6"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={400}
                    height={500}
                    priority
                    /> 
                </div>
                <div className="basis-3/4 flex ml-10 pt-12 flex-col text-white">
                    <h1 className="text-6xl font-bold">{movie.title}</h1>
                    <p className="text-lg ">
                        Fecha de Lanzamiento: {new Date(movie.release_date).toLocaleDateString()}
                        {/* <span>País: {movie.production_countries.map((item: any) => item.name)}</span> */}
                        <span className="ml-4">Duracion: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                    </p>
                    {<p className="text-lg">Generos: {genres}</p>}
                    <p className="text-lg italic mb-4">{movie.tagline}</p>
                    <p className="text-lg">{movie.overview}</p>
                </div>
            </div>
            <div className="basis-2/5 bg-slate-200 p-6">
                <h2 className="text-3xl font-bold mb-4">Actores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cast.map((actor:any) => (
                        <div key={actor.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                            <Image 
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                                alt={actor.name} 
                                width={150} 
                                height={225} 
                                className="mx-auto rounded-lg"
                            />
                            <h3 className="text-xl font-bold mt-2">{actor.name}</h3>
                            <p className="text-gray-600">{actor.character}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}