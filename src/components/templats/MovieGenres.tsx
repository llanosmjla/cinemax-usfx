import React from 'react';
import useGenres from '@/hooks/useGenres';

interface MovieGenresProps {
    genreIds: number[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genreIds }) => {
    const { genres } = useGenres();
    const genreNames = genres.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name);

    return (
        <div className="flex flex-wrap gap-2 mb-2 justify-center">
            {genreNames.map(name => (
                <span key={name} className="bg-gray-700 rounded-full px-2 py-2 text-sm font-medium text-gray-300">
                    {name}
                </span>
            ))}
        </div>
    );
};

export default MovieGenres;
