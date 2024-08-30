import CardTemplate from "@/app/components/templats/CardTemplate";
import { getMovies } from "@/services/movies";
import ButtonsCategories from "@/app/sections/movies/ButtonsCategories";

const MoviesListServer = async({ genre, page }: { genre: string; page: string }
) => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getMovies({ genre: +genre || null, page: +page || 1 });
    
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex-wrap gap-4 flex justify-center items-center">
                {data.results.map((movie, index) => (
                    <CardTemplate 
                        id={movie.id}
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        width={400}
                        height={550}
                        title={movie.title}
                        releaseDate={movie.relase_date}
                        genre={movie.genre_ids.toLocaleString()}
                        popularity={movie.popularity}
                        voteAverage={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}

export default MoviesListServer
