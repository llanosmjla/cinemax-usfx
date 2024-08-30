'use client';

import { GenresType, MoviesRequest } from "@/app/type/moviesType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


type MoviesContainerClientProps = {
    children: React.ReactNode;
};

const MoviesContainerClient = ({ children }: MoviesContainerClientProps) => {
    const params = useSearchParams();
    const genre = params.get('genre');
    const searchParams = useSearchParams(); // cuales son los parametros de la url
    const pathname = usePathname(); // cual es la ruta actual
    const { push } = useRouter(); // para cambiar de ruta

    const [page, setPage] = useState<number>(1);
    //const [genre, setGenre] = useState<number | null>(null);

    /*const handleChangeCategory = (id: number) => {
         setGenre(id);
         updateParams({page: 1, genre: id});
     }*/

    const handleNextPage = () => {
        const page = +(searchParams.get('page') ?? 1) + 1;
        setPage(page);
        updateParams({ page: page, genre: +genre! });
    };

    const handlePreviousPage = () => {
        const page = +(searchParams.get('page') ?? 1) - 1;
        if (page < 1) return;
        setPage(page);
        updateParams({ page: page, genre: +genre! });
    };

    const updateParams = (params: MoviesRequest) => {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('page', params.page.toString());
        if (params.genre !== null) {
            urlSearchParams.set('genre', params.genre!.toString() ?? '');
        }
        push(`${pathname}?${urlSearchParams.toString()}`);
    }
    return (
        <div >
            {children}
            <div className="flex justify-center gap-4 bg-sky-950 basis-10 rounded-b-lg text-lg items-center text-sky-400 w-full h-full">
                <button
                    className="text-sky-400 text-xl hover:text-sky-100"
                    onClick={handlePreviousPage}>Previous</button>
                <p> || </p>
                <button
                    className="text-sky-400 text-xl hover:text-sky-100"
                    onClick={handleNextPage}>Next</button>

            </div>

        </div>
    )
}
export default MoviesContainerClient;