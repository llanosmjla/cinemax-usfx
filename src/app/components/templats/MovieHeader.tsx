import React from "react";
import Image from "next/image";

interface MovieHeaderProps {
    title: string;
    posterPath: string;
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ title, posterPath }) => {
    return (
        <div className="flex flex-col md:flex-row items-center mb-8">
            <Image
                src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                alt={title}
                width={500}  // especifica el ancho
                height={750} // especifica la altura
                className="w-full md:w-1/3 rounded-lg shadow-lg"
                priority  // para priorizar la carga de esta imagen
            />
            <h1 className="text-4xl font-bold mt-4 md:mt-0 md:ml-8">{title}</h1>
        </div>
    );
};

export default MovieHeader;
