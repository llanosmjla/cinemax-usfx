import React, { act } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CreditsType, UtilsResponse } from '@/app/api/type/moviesType';

type MovieCastProps = {
    dataCast: CreditsType[]; 
}

const MovieCast = ({ dataCast } : MovieCastProps) => {

    return (
            <div className="flex gap-2 flex-wrap justify-center items-center">
                {dataCast.map((actor) => (
                    <Link 
                        key={actor.id}
                        href={`/actor/${actor.id}`} 
                        passHref
                    >
                    <div 
                        key={actor.id} 
                        className="bg-sky-950 w-60 h-auto justify-center items-center rounded-lg my-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >
                        <Image
                            src={
                                actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`: "/user.svg"
                            }
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
                )).slice(0, 8)}
            </div>
    );
};

export default MovieCast;



