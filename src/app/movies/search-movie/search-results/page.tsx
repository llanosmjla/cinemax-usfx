
import CardTemplate from "@/app/components/templats/CardTemplate";
import { getGenres } from "@/services/genres";
import { getSearch } from "@/services/search";

async function SearchMoviesPage ({searchParams} : {searchParams: {query : string}})
{

    const query = searchParams.query;
    console.log("qwqw: ", query);

    const data = await getSearch({query});
    const genres = await getGenres();
    console.log(data)

    return(
        <div
            className="flex flex-wrap gap-6 justify-center"
        >
            {
                data.results.map((movie, index) => (
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
                ))
            }
        </div>
    )

}

export default SearchMoviesPage;

