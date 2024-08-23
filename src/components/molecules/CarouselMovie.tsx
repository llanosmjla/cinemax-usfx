"use client";

import ImageCarousel from "../atoms/ImageCarousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";

export default function CarouselMovie({ movies }: any) {
    return (
        <div className="container mx-auto justify-center bg-black">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
            //width={1150}
            >
                {movies.map((movie: any) => (
                    <div key={movie.id}>

                        <div className="flex justify-center">
                            <Link href={`/movie/${movie.id}`} passHref legacyBehavior>
                                <a className="flex">

                                    <Image
                                        // src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                        //src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`}
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt={movie.title}
                                        layout="responsive"
                                        width={1920}
                                        height={1080}
                                        objectFit="contain"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}