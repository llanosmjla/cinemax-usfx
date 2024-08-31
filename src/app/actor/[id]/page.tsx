// src/app/actor/[id]/page.tsx
'use client';

import useActor from '@/hooks/useActor';
import Image from 'next/image';
import ActorMovies from '@/components/templats/ActorMovies';

interface ActorDetailsProps {
    params: { id: number };
}

const ActorDetails: React.FC<ActorDetailsProps> = ({ params }) => {
    const { actor } = useActor(params.id);

    if (!actor) {
        return <div className="text-center text-xl">Actor not found</div>;
    }

    return (
        <div className="h-screen bg-gray-100">
            {/* CABECERA */}
            <header className="bg-sky-950 h-16 flex justify-center items-center text-white text-3xl">
               Cinema App - Actor Details
            </header>
            {/* CONTENIDO */}
            <main className="py-10 px-8 flex items-center flex-col md:flex-row lg:flex-row gap-x-7">
                <div className="bg-sky-950 w-1/3 flex justify-center items-center rounded-lg shadow-md mb-4">
                    <Image
                    className="rounded-lg shadow-lg"
                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                    alt={actor.name}
                    width={370}
                    height={200}
                    priority
                    />
                </div>
                <div className="w-2/4 h-auto text-black flex justify-center flex-col gap-y-2 text-center lg:justify-start items-start">
                    <h1 className="text-3xl font-bold underline lg:text-5xl pb-3 text-left">{actor.name}</h1>
                    <p className="flex flex-col text-base lg:text-2xl text-left">Date of Birth <i>{new Date(actor.birthday).toLocaleDateString()}</i></p>
                    {actor.deathday && <p className="flex flex-col text-base lg:text-2xl text-left">Date of Death <i>{new Date(actor.deathday).toLocaleDateString()}</i></p>}
                    <p className="flex flex-col text-xl lg:text-2xl text-left">Place of Birth <strong className="pt-2">{actor.place_of_birth}</strong></p>
                    <p className="text-base capitalize text-justify lg:text-xl">{actor.biography}</p>
                </div>
            </main>
            {/* SECCIÓN DE PELÍCULAS */}
            <ActorMovies actorId={params.id} />
        </div>
    );
}

export default ActorDetails;
