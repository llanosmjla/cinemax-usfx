import CardTemplate from "@/app/components/templats/CardTemplate";
import { getGenres } from "@/services/genres";
import { getMovies } from "@/services/movies";

const MoviesListServer = async({ genre, page }: { genre: string; page: string }
) => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getMovies({ endpoint:"/discover/movie", genre: +genre || null, page: +page || 1 });
    const genres = await getGenres();
    
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex-wrap gap-6 flex justify-center items-center">
                {data.results.map((movie, index) => (
                    <CardTemplate 
                        id={movie.id}
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.original_title}
                        width={400}
                        height={550}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        genreIds={movie.genre_ids.map((genreId) => {
                            const genre = genres.genres.find((genre) => genre.id === genreId);
                            return genre?.name;
                        }).filter((genre) => genre !== undefined) as string[]}
                        popularity={movie.popularity}
                        voteAverage={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}

export default MoviesListServer
