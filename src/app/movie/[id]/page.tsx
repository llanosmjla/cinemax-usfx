import { getDetailsMovie } from "@/services/detailsMovie";
import MovieDetailsClient from './MovieDetailsClient';
import MovieDetailsServer from './MovieDetailsServer';

type MovieDetailsProps = {
    params: { id: number };
}

const MovieDetails = async ({ params } : MovieDetailsProps) => {
    //const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    //const movie = movies.find((item: any) => item.id === Number(params.id));
    const dataMovieDetails = await getDetailsMovie({ id: Number(params.id) });
    return (
        <div>
            <MovieDetailsClient>
                <MovieDetailsServer dataMovieDetails={dataMovieDetails} />
                
            </MovieDetailsClient>
        </div>
       
    );
}


export default MovieDetails;