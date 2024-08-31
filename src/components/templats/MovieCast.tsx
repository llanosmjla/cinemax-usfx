import React from 'react';
import Image from 'next/image';
import useCast from '@/hooks/useCast';
import Link from 'next/link';

interface MovieCastProps {
    movieId: number;
}

const MovieCast: React.FC<MovieCastProps> = ({ movieId }) => {
    const { cast } = useCast(movieId);

    return (
            <div className="ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {cast.map(actor => (
                    <Link 
                        key={actor.id}
                        href={`/actor/${actor.id}`} 
                        passHref
                    >
                    <div 
                        key={actor.id} 
                        className="bg-sky-950 w-60 h-auto rounded-lg my-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                            alt={actor.name}
                            width={250}
                            height={300}
                            className='rounded-t-lg'
                        />
                        <div className="text-center text-white pb-4">
                        <h3 className="text-lg font-semibold">{actor.name}</h3>
                        <p className="text-sm p-2">{actor.character}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
    );
};

export default MovieCast;



