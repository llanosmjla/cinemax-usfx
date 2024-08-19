"use client";

import Image from "next/image";

type ImageCarouselProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export default function ImageCarousel({ src, alt, width, height }: ImageCarouselProps) {
    return (
        <Image 
            src={src} 
            width={width} 
            height={height}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            alt="..." 
            priority
        />
    )
}