'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { button, image } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

interface Movies {
    id: number;
    backdrop_path: string;
    title: string;
}

interface CarouselProps {
    movies: Movies[];
    autoTransitionDuration?: number;
}

const Carousel = ({ movies, autoTransitionDuration = 5000 } : CarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const startX = useRef<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (movies.length > 1) {
            intervalRef.current = setInterval(goToNextImage, autoTransitionDuration);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [currentImageIndex, autoTransitionDuration, movies.length]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const diffX = startX.current - endX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                goToNextImage();
            } else {
                goToPreviousImage();
            }
        }
        startX.current = null;
    };

    return (
        <div className="relative w-full flex justify-center overflow-hidden">
            <div
                className="relative lg:w-4/5 sm:w-full flex justify-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="relative w-full flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    {movies.map((image, index) => (
                         <Link href={`/movie/${image.id}`} key={image.id} passHref legacyBehavior>
                                <Image
                                    key={image.id || index}
                                    src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`}
                                    alt="Carousel Image"
                                    className="w-full h-auto object-cover lg:rounded-lg sm:rounded-none"
                                    width={1920}
                                    height={1080}
                                />

                        </Link>
                    ))}
                </div>

                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
                    onClick={goToPreviousImage}
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
                    onClick={goToNextImage}
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap space-x-2">
                    {movies.map((_image, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400/50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
