import { GenresResponse } from '@/app/api/type/moviesType';
import React from 'react';


const MovieGenres = ({ genres } : GenresResponse) => {
    

    return (
        <p className="flex flex-wrap gap-2 mb-2 justify-center">
            {genres.map(genre => (
                <span key={genre.id} className="bg-gray-700 rounded-full px-2 py-2 text-sm font-medium text-gray-300">
                    {genre.name}
                </span>
            ))}
        </p>
    );
};

export default MovieGenres;
