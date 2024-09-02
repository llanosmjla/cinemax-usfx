import { getMovies } from "@/services/movies";
import Carousel from "@/app/components/organisms/Carousel";

const CarouselList = async () => {
    const dataNowPlaying = await getMovies({endpoint: '/movie/now_playing', page: 1});
    return (
        <div>
            <Carousel movies={dataNowPlaying.results} autoTransitionDuration={5000} />
        </div>
    )

}

export default CarouselList;