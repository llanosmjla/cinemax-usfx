import React, { Key } from 'react';
import useKeywords from '@/hooks/useKeywords';
import { KeywordsType } from '@/app/api/type/moviesType';

interface MovieKeywordsProps {
    dataKeywords: KeywordsType[];
}

const MovieKeywords = ({ dataKeywords }: MovieKeywordsProps) => {

    return (
        <div className="flex flex-wrap gap-2">
            {dataKeywords.map(keyword => (
                <span key={keyword.id} className="bg-gray-700 rounded-full px-4 py-2 text-sm font-medium text-white">
                    {keyword.name}
                </span>
            ))}
        </div>
    );
};

export default MovieKeywords;
