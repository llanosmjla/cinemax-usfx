"use client";
import Image from "next/image";

type ImageCardProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};


export default function ImageCard({ src, alt, width, height } : ImageCardProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className=""
            width={width}
            height={height}
            priority
        />
    )
};