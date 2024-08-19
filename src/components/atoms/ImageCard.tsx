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
            className="w-full h-48 object-cover"
            width={width}
            height={height}
            priority
        />
    )
};