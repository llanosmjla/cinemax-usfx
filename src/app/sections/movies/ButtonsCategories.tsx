'use client';
import { GenresType, MoviesRequest } from "@/app/api/type/moviesType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type buttonsCatrgoriesProps = {
    genres: GenresType[];
}

const ButtonsCategories = ({ genres} : buttonsCatrgoriesProps) => {
    const searchParams = useSearchParams(); // cuales son los parametros de la url
    const pathname = usePathname(); // cual es la ruta actual
    const {push} = useRouter(); // para cambiar de ruta

    const [genre, setGenre] = useState<number | null>(null);


    const handleChangeCategory = (id: number) => {
        setGenre(id);
        updateParams({endpoint:"/discover/movie", page: 1, genre: id});
    }

    const updateParams = (params: MoviesRequest) => {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('page', params.page.toString());
        if(params.genre !== null){
            urlSearchParams.set('genre', params.genre!.toString() ?? '');
        }
        push(`${pathname}?${urlSearchParams.toString()}`);
    }

    return (
        <div>
        <div className="flex flex-wrap gap-2 justify-center items-center bg-sky-950 p-8 rounded-t-lg">
          
            {genres.map((genre: any) => (
                <button
                    key={genre.id}
                    onClick={() => handleChangeCategory(genre.id)}
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-colors"
                >
                    {genre.name}
                </button>

            ))}
            <button
                onClick={() => handleChangeCategory(0)}
                className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-colors">
                Todo
            </button>
            
            
        </div>
        <div className="flex flex-col justify-center items-center bg-sky-950 p-8 rounded-b-lg">
        <h2 className="text-white font-bold">{genre ? genres.find(g => g.id === genre)?.name : 'Todo'}</h2>
        <hr
            className="bg-sky-300 w-full h-1" 
        />
     </div>
     </div>
    )

}

export default ButtonsCategories;
