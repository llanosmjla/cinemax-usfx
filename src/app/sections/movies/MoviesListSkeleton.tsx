import React from 'react';

const MoviesListSkeleton: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 20 }).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-200 rounded-lg p-4 animate-pulse"
                >
                    <div className="h-40 bg-gray-300 mb-4"></div>
                    <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 w-1/2"></div>
                </div>
            ))}
        </div>
    );
};

export default MoviesListSkeleton;