'use client';

import { GenresType, MoviesRequest } from "@/app/api/type/moviesType";
import { ChevronLeft, ChevronLeftIcon, ChevronRight, SplitSquareHorizontalIcon } from "lucide-react";
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
    

    const handleNextPage = () => {
        const page = +(searchParams.get('page') ?? 1) + 1;
        setPage(page);
        updateParams({ endpoint:"/discover/movie", page: page, genre: +genre! });
    };

    const handlePreviousPage = () => {
        const page = +(searchParams.get('page') ?? 1) - 1;
        if (page < 1) return;
        setPage(page);
        updateParams({ endpoint:"/discover/movie", page: page, genre: +genre! });
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
            <div className="flex justify-center gap-4 bg-sky-950 p-6 basis-10 rounded-b-lg text-lg items-center text-sky-400 w-full h-full">
                
                <button
                    className="text-sky-400 text-xl hover:text-sky-100"
                    onClick={handlePreviousPage}><span>
                    <ChevronLeft size={34} />
                </span></button>
                <p> <span>
                        <SplitSquareHorizontalIcon size={24} />
                    </span> </p>
                <button
                    className="text-sky-400 text-xl hover:text-sky-100"
                    onClick={handleNextPage}>
                    <span>
                        <ChevronRight size={34} />
                    </span>
                    </button>

            </div>

        </div>
    )
}
export default MoviesContainerClient;