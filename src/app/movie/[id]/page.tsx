// export default function MovieDetails({ params }: { params: {id:number} }) {
//     const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
//     const movie = movies.find((item : any) => item.id === Number(params.id));
//     const [cast, setCast] = useState([]);
//     const [keywords, setKeywords] = useState([]);
    
//     // useEffect(() => {
//     //     const fetchCast = async () => {
//     //         try {
//     //             const options = {
//     //                 method: 'GET',
//     //                 headers: {
//     //                     accept: 'application/json',
//     //                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
//     //                 }
//     //             };
//     //             const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`, options);
//     //             const data = await response.json();
//     //             setCast(data.cast.slice(0, 6));  // Limitamos a los primeros 5 actores
//     //         } catch (error) {
//     //             console.error("Error fetching cast:", error);
//     //         }
//     //     };

//     //     fetchCast();
//     // }, [movie]);

//     useEffect(() => {
//         const fetchCast = async () => {
//             try {
//                 const options = {
//                     method: 'GET',
//                     headers: {
//                         accept: 'application/json',
//                         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
//                     }
//                 };
//                 const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`, options);
//                 const data = await response.json();
//                 setCast(data.cast.slice(0, 6));  // Limitamos a los primeros 6 actores
//             } catch (error) {
//                 console.error("Error fetching cast:", error);
//             }
//         };

//         const fetchKeywords = async () => {
//             try {
//                 const options = {
//                     method: 'GET',
//                     headers: {
//                         accept: 'application/json',
//                         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
//                     }
//                 };
//                 const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/keywords`, options);
//                 const data = await response.json();
//                 setKeywords(data.keywords);
//             } catch (error) {
//                 console.error("Error fetching keywords:", error);
//             }
//         };

//         fetchCast();
//         fetchKeywords();
//     }, [movie]);

//     if (!movie) {
//         return <div>Movie not found</div>;
//     }

//     const genres = movie.genres ? movie.genres.map((genre: any) => genre.name).join(', ') : 'Géneros no disponibles';
//     const releaseDate = new Date(movie.release_date).toLocaleDateString();
//     const runtimeHours = movie.runtime ? Math.floor(movie.runtime / 60) : 0;
//     const runtimeMinutes = movie.runtime ? movie.runtime % 60 : 0;
//     const duration = `${runtimeHours}h ${runtimeMinutes}m`;


//     // return (
//     //     <>
//     //         <div style={{
//     //             display: 'flex',
//     //             flex: 2,
//     //             //backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//     //             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//     //             backgroundSize: 'cover',
//     //             backgroundPosition: 'top',
//     //             justifyContent: 'center',
//     //             alignItems: 'center',
//     //         }}>
//     //             <div style={{
//     //                 display: 'flex',
//     //                 width: '80%',
//     //                 height: '90%',
//     //                 flexDirection: 'row',

//     //             }}>
//     //                 <div style={{
//     //                     display:'flex',
//     //                     flex: 1,
//     //                     alignItems: 'center',
//     //                     justifyContent: 'flex-end',
//     //                     paddingRight: '25px'
//     //                 }}>
//     //                     <Image
//     //                         className="rounded-lg"
//     //                         src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//     //                         alt=""
//     //                         width={350}
//     //                         height={500}
//     //                         priority
//     //                     />
//     //                 </div>
//     //                 <div style={{
//     //                     display:'flex',
//     //                     flex: 2,
//     //                     paddingTop: '2rem',
//     //                     paddingLeft: '1rem',
//     //                     color: 'white',
//     //                     flexDirection: 'column',
//     //                 }}>
//     //                     <h1 className="text-5xl">{movie.title}</h1>
//     //                     <p>Fecha_Lanzamiento: {releaseDate}</p>
//     //                     <p>Duracion: {duration}</p>
//     //                     <p>Generos: </p>
//     //                     <i>{movie.tagline}</i>
//     //                     <p>{movie.overview}</p>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //         <div style={{
//     //             display:'flex',
//     //             flex:1,
//     //             alignItems: 'center',
//     //             justifyContent: 'center'
//     //         }}>
//     //             <div style={{
//     //                  display: 'flex',
//     //                  width: '80%',
//     //                  height: 'auto',
//     //                  flexDirection: 'row',
//     //             }}>
//     //                 <div style={{
//     //                     display: 'flex',
//     //                     flex: 2,
//     //                     flexDirection: 'column',
//     //                     paddingLeft: '10px',
//     //                     paddingTop: '5px',
//     //                 }}>
//     //                     <h1 style={{
//     //                         display:'flex',
//     //                         flex: 0.5,
//     //                         textAlign: 'left',
//     //                         fontWeight: 700,
//     //                         fontSize: '1.5rem',
//     //                         color: 'black',

//     //                     }}>
//     //                         Reparto Principal
//     //                     </h1>
//     //                     <div style={{
//     //                         display: 'flex',
//     //                         flex: 3,
//     //                         flexWrap: 'wrap',
//     //                         flexDirection: 'row',
//     //                     }}>
//     //                         {cast.map((actor:any) => (
//     //                             <div 
//     //                                 key={actor.id}

//     //                                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 transition-transform transform hover:scale-105"
//     //                             >
//     //                                 <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
//     //                                     <Image
//     //                                         className="w-full h-auto object-cover"
//     //                                         src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//     //                                         alt={actor.name}
//     //                                         width={150}
//     //                                         height={200}
//     //                                     />
//     //                                     <div className="p-2 text-black">
//     //                                         <h3 className="text-lg font-semibold">{actor.name}</h3>
//     //                                         <p className="text-sm">{actor.character}</p>
//     //                                     </div>
//     //                                 </div>
//     //                             </div>
//     //                         ))}
//     //                     </div>
//     //                 </div>
//     //                 <div style={{
//     //                     display: 'flex',
//     //                     flexDirection: 'column',
//     //                     flex: 0.5,
//     //                 }}>
//     //                     <p>Titulo Original</p>
//     //                     <p>Estado</p>
//     //                     <p>Idioma Original</p>
//     //                     <p>Presupuesto</p>
//     //                     <p>Ingreso</p>
//     //                     <div>
//     //                         <h2>Palabras Clave</h2>
//     //                         <button>hero</button>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </>
//     // );

//     return (
//         <>
//             <div style={{
//                 display: 'flex',
//                 flex: 2,
//                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>
//                 <div style={{
//                     display: 'flex',
//                     width: '80%',
//                     height: '90%',
//                     flexDirection: 'row',
//                 }}>
//                     <div style={{
//                         display:'flex',
//                         flex: 1,
//                         alignItems: 'center',
//                         justifyContent: 'flex-end',
//                         paddingRight: '25px'
//                     }}>
//                         <Image
//                             className="rounded-lg"
//                             src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                             alt=""
//                             width={300}
//                             height={450}
//                             priority
//                         />
//                     </div>
//                     <div style={{
//                         display:'flex',
//                         flex: 2,
//                         paddingTop: '2rem',
//                         paddingLeft: '1rem',
//                         color: 'white',
//                         flexDirection: 'column',
//                     }}>
//                         <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
//                         <p className="text-lg mb-2"><strong>Fecha de Lanzamiento:</strong> {releaseDate}</p>
//                         <p className="text-lg mb-2"><strong>Duración:</strong> {duration}</p>
//                         <p className="text-lg mb-2"><strong>Géneros:</strong> {genres}</p>
//                         <p className="italic text-2xl mb-4">{movie.tagline}</p>
//                         <p className="text-lg">{movie.overview}</p>
//                     </div>
//                 </div>
//             </div>

//             <div style={{
//                 display:'flex',
//                 flex:1,
//                 justifyContent: 'center',
//                 padding: '2rem 0'
//             }}>
//                 <div style={{
//                     display: 'flex',
//                     width: '80%',
//                     flexDirection: 'row',
//                 }}>
//                     <div style={{
//                         display: 'flex',
//                         flex: 2,
//                         flexDirection: 'column',
//                         paddingLeft: '10px',
//                         paddingTop: '5px',
//                     }}>
//                         <h1 style={{
//                             textAlign: 'left',
//                             fontWeight: 700,
//                             fontSize: '1.5rem',
//                             color: 'black',
//                         }}>
//                             Main Cast
//                         </h1>
//                         <div style={{
//                             display: 'flex',
//                             flex: 3,
//                             flexWrap: 'wrap',
//                             flexDirection: 'row',
//                         }}>
//                             {cast.map((actor:any) => (
//                                 <div 
//                                     key={actor.id}
//                                     className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 transition-transform transform hover:scale-105"
//                                     style={{
//                                         flex: '1 1 150px',
//                                         margin: '10px',
//                                         background: '#f5f5f5',
//                                         borderRadius: '10px',
//                                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                         overflow: 'hidden',
//                                     }}
//                                 >
//                                     <Image
//                                         className="object-cover rounded-lg"
//                                         src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//                                         alt={actor.name}
//                                         width={150}
//                                         height={200}
//                                     />
//                                     <div style={{
//                                         padding: '10px',
//                                         textAlign: 'center',
//                                     }}>
//                                         <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{actor.name}</h3>
//                                         <p style={{ fontSize: '0.9rem' }}>{actor.character}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         flex: 0.5,
//                         padding: '10px',
//                         color: 'black'
//                     }}>
//                         <p><strong>Original Title:</strong> {movie.original_title}</p>
//                         <p><strong>Status:</strong> {movie.status}</p>
//                         <p><strong>Original Language:</strong> {movie.original_language}</p>
//                         <p><strong>Budget:</strong> ${movie.budget}</p>
//                         <p><strong>Revenue:</strong> ${movie.revenue}</p>
//                         <div style={{ marginTop: '20px' }}>
//                             <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Keywords</h2>
//                             <button style={{
//                                 background: '#e2e2e2',
//                                 padding: '5px 10px',
//                                 borderRadius: '5px',
//                                 marginTop: '10px',
//                             }}>hero</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

'use client';

import useMovies from "@/hooks/useMovies";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MovieDetails({ params }: { params: {id:number} }) {
    const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    const movie = movies.find((item : any) => item.id === Number(params.id));
    const [cast, setCast] = useState([]);
    const [keywords, setKeywords] = useState([]);

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
                setCast(data.cast.slice(0, 9));  // Limitamos a los primeros 6 actores
            } catch (error) {
                console.error("Error fetching cast:", error);
            }
        };

        const fetchKeywords = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
                    }
                };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/keywords`, options);
                const data = await response.json();
                setKeywords(data.keywords);
            } catch (error) {
                console.error("Error fetching keywords:", error);
            }
        };

        fetchCast();
        fetchKeywords();
    }, [movie]);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const genres = movie.genres ? movie.genres.map((genre: any) => genre.name).join(', ') : 'Géneros no disponibles';
    const releaseDate = new Date(movie.release_date).toLocaleDateString();
    const runtimeHours = movie.runtime ? Math.floor(movie.runtime / 60) : 0;
    const runtimeMinutes = movie.runtime ? movie.runtime % 60 : 0;
    const duration = `${runtimeHours}h ${runtimeMinutes}m`;

    return (
        <>
            <div style={{
                display: 'flex',
                flex: 2,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    display: 'flex',
                    width: '80%',
                    height: '90%',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display:'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '25px'
                    }}>
                        <Image
                            className="rounded-lg"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt=""
                            width={350}
                            height={500}
                            priority
                        />
                    </div>
                    <div style={{
                        display:'flex',
                        flex: 2,
                        paddingTop: '2rem',
                        paddingLeft: '1rem',
                        color: 'white',
                        flexDirection: 'column',
                    }}>
                        <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
                        <p className="text-lg mb-2"><strong>Fecha de Lanzamiento:</strong> {releaseDate}</p>
                        <p className="text-lg mb-2"><strong>Duración:</strong> {duration}</p>
                        <p className="text-lg mb-2"><strong>Géneros:</strong> {genres}</p>
                        <p className="italic text-2xl mb-4">{movie.tagline}</p>
                        <p className="text-lg">{movie.overview}</p>
                    </div>
                </div>
            </div>
            <div style={{
                display:'flex',
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
            }}>
                <div style={{
                     display: 'flex',
                     width: '80%',
                     height: 'auto',
                     flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
                        flex: 2,
                        flexDirection: 'column',
                        paddingLeft: '10px',
                        paddingTop: '5px',
                    }}>
                        <h1 style={{
                            display:'flex',
                            flex: 0.5,
                            textAlign: 'left',
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: 'black',
                        }}>
                            Reparto Principal
                        </h1>
                        <div style={{
                            display: 'flex',
                            flex: 3,
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}>
                            {cast.map((actor:any) => (
                                <div 
                                    key={actor.id}
                                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2 transition-transform transform hover:scale-105 cursor-pointer"
                                >
                                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            className="w-full h-auto object-cover"
                                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                            alt={actor.name}
                                            width={150}
                                            height={200}
                                        />
                                        <div className="p-2 text-black">
                                            <h3 className="text-lg font-semibold">{actor.name}</h3>
                                            <p className="text-sm">{actor.character}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 0.5,
                        paddingLeft: '20px',
                    }}>
                        <p><strong>Título Original:</strong> {movie.original_title}</p>
                        <p><strong>Estado:</strong> {movie.status}</p>
                        <p><strong>Idioma Original:</strong> {movie.original_language}</p>
                        <p><strong>Presupuesto:</strong> ${movie.budget}</p>
                        <p><strong>Ingreso:</strong> ${movie.revenue}</p>
                        <div>
                            <h2 style={{
                                fontWeight: 'bold',
                                marginTop: '1rem',
                                marginBottom: '0.5rem',
                            }}>Palabras Clave</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {keywords.map((keyword: any) => (
                                    <button key={keyword.id} 
                                    style={{
                                        backgroundColor: '#e5e5e5',
                                        borderRadius: '8px',
                                        padding: '5px 10px',
                                        margin: '5px',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        
                                    }}
                                    >
                                        {keyword.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

