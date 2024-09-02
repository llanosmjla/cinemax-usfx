import { CreditsType, KeywordsType, MovieDetailsType } from "@/app/api/type/moviesType";
import MovieCast from "@/app/components/templats/MovieCast";
import MovieGenres from "@/app/components/templats/MovieGenres";
import MovieKeywords from "@/app/components/templats/MovieKeywords";
import { getUtils } from "@/services/credits";
import { get } from "http";
import Image from "next/image";
import Link from "next/link";

type MovieDetailsProps = {
    dataMovieDetails: MovieDetailsType;
}

const MovieDetailsServer = async ({ dataMovieDetails }: MovieDetailsProps) => {
    const genres = dataMovieDetails.genres.map((genre) => genre.name).filter((genre) => genre !== undefined) as string[];
    const dataCredits = await getUtils("credits", dataMovieDetails.id);
    const dataKeywords = await getUtils("keywords", dataMovieDetails.id);

    return (
        <div className="h-full w-full flex flex-wrap bg-gray-100">

            {/* CABECERA 
            <header className="bg-sky-950 h-16 flex justify-center items-center text-white text-3xl">
               Cinema App
            </header>*/}
            {/* IMAGEN DE FONDO */}
            <main
                className="relative bg-cover bg-top h-auto pb-5 flex items-center flex-col md:flex-row lg:flex-row gap-x-7 px-8 bg-black"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${dataMovieDetails.backdrop_path})` }}
            >
                <div className="w-1/3 flex justify-center items-center rounded-lg shadow-md mb-4">
                    <Image
                        className="mt-6 rounded-lg shadow-lg"
                        src={`https://image.tmdb.org/t/p/original/${dataMovieDetails.poster_path}`}
                        alt={dataMovieDetails.title}
                        width={370}
                        height={200}
                        priority
                    />
                </div>
                <div className="w-2/4 h-auto text-white pt-5 flex justify-center flex-col gap-y-2 text-center lg:justify-start items-start">
                    <h1 className="text-2xl font-bold underline lg:text-5xl pb-3 text-left">{dataMovieDetails.title}</h1>
                    <div className="flex flex-row text-base lg:text-2xl text-left">Release Date: {" "}<i className="pl-2">{dataMovieDetails.release_date}</i>
                        <button
                            //type="button"
                            //onClick={handlePurchase}
                            className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <Link
                                    href={`/purcharse/${dataMovieDetails.id}`}
                                    passHref
                                >
                                      Buy Tickets
                                
                                </Link>
                          
                        </button>
                    
                    </div>
                    <p className="flex flex-col text-base lg:text-2xl text-left">Duration <i>{Math.floor(dataMovieDetails.runtime / 60)} h {dataMovieDetails.runtime % 60} min</i></p>
                    <div className="flex flex-col text-xl  lg:text-2xl  text-left">Genres <strong className="pt-2"><MovieGenres genres={dataMovieDetails.genres} /></strong></div>
                    <p className="flex flex-col text-xl lg:text-2xl text-left">Popularity <strong className="pt-2">{dataMovieDetails.popularity}</strong></p>
                    <div className="flex flex-col text-xl lg:text-2xl text-left">
                        {
                            dataMovieDetails.homepage && (
                                <button
                                    className="bg-sky-950 text-white rounded-lg p-2 px-4 shadow-lg hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition-all duration-300"
                                >
                                    <Link href={dataMovieDetails.homepage} passHref>
                                        Visitar Sitio Web
                                    </Link>
                                </button>
                            )
                        }
                    </div>
                    <div className="flex flex-col text-xl lg:text-2xl text-left">
                        {
                            dataMovieDetails.imdb_id && (
                                <button
                                    className="bg-sky-950 text-white rounded-lg p-2 px-4 shadow-lg hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition-all duration-300"
                                >
                                    <Link href={`https://www.imdb.com/title/${dataMovieDetails.imdb_id}`} passHref>
                                        Ver en IMDB
                                    </Link>
                                </button>
                            )
                        }
                    </div>
                    <i className="text-base text-white lg:text-2xl  text-left">Tagline: {dataMovieDetails.tagline}</i>
                    <p className="text-base capitalize text-justify lg:text-xl">{dataMovieDetails.overview}</p>
                </div>
            </main>
            {/* CONTENIDO */}
            <div className="flex flex-col lg:flex-row">
                {/* Seccion # 1 */}
                <section className="h-auto flex flex-wrap lg:w-3/4">
                    {/* actores */}
                    <div className="h-auto flex flex-wrap justify-center">
                        
                       <p className="text-black text-3xl font-bold p-4"> Casting </p>
                       <MovieCast dataCast={dataCredits.cast! as CreditsType[]} />


                    </div>
                </section>
                <section className="lg:w-1/4 h-auto bg-sky-950 text-white">
                    {/* INFO */}
                    <div className=" flex flex-col h-2/4 pt-5 pl-5">
                        <h2 className="text-4xl font-bold mb-4 underline">Additional Information</h2>
                        <p className="mb-4 flex font-bold flex-col text-xl">Original Title: <span className="my-2 font-normal text-base">{dataMovieDetails.original_title}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Status: <span className="my-2 font-normal text-base">{dataMovieDetails.status}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Original Language: <span className="my-2 font-normal text-base uppercase">{dataMovieDetails.original_language}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Budget: <span className="my-2 font-normal text-base ">${dataMovieDetails.budget}</span></p>
                        <p className="mb-4 flex font-bold flex-col text-xl">Revenue: <span className="my-2 font-normal text-base">${dataMovieDetails.revenue}</span></p>
                    </div>
                    {/* keywords */}
                    <div className="h-auto pl-5 pr-2 pt-1 flex flex-col">
                        <h2 className="text-4xl font-bold mb-4 underline pt-2">Keywords</h2>
                        <MovieKeywords dataKeywords={dataKeywords.keywords! as KeywordsType[]} />

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

export default MovieDetailsServer;