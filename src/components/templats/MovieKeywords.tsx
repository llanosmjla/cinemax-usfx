import React from 'react';
import useKeywords from '@/hooks/useKeywords';

interface MovieKeywordsProps {
    movieId: number;
}

const MovieKeywords: React.FC<MovieKeywordsProps> = ({ movieId }) => {
    const { keywords } = useKeywords(movieId);

    return (
        <div className="flex flex-wrap gap-2">
            {keywords.map(keyword => (
                <span key={keyword.id} className="bg-gray-700 rounded-full px-4 py-2 text-sm font-medium text-white">
                    {keyword.name}
                </span>
            ))}
        </div>
    );
};

export default MovieKeywords;
