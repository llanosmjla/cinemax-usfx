import CardTemplate from "@/app/components/templats/CardTemplate";
import { getMoviesCategory } from "@/services/moviesCategory"
import { get } from "http";
const PopularMovies = async () => {
    const dataNowPlaying = await getMoviesCategory({category: "now_playing"});
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

export default PopularMovies