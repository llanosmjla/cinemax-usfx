import CardTemplate from "@/app/components/templats/CardTemplate";
import { getGenres } from "@/services/genres";
import { getMovies } from "@/services/movies";
const NowPlayingMovies = async () => {
    const dataNowPlaying = await getMovies({endpoint: '/movie/now_playing', page: 1});
    const genres = await getGenres();

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex-wrap gap-4 flex justify-center items-center">
                {dataNowPlaying.results.map((movie, index) => (
                    <CardTemplate 
                        id={movie.id}
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
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

export default NowPlayingMovies;