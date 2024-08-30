import { getMoviesCategory } from "@/services/moviesCategory";
import Carousel from "@/app/components/organisms/CarouselMovie";
import { get } from "http";

const CarouselList = async () => {
    const dataNowPlaying = await getMoviesCategory({category: "now_playing"});
    return (
        <div>
            <Carousel movies={dataNowPlaying.results} autoTransitionDuration={5000} />
        </div>
    )

}

export default CarouselList;