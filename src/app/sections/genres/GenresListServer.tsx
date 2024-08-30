import { GenresType } from "@/app/type/moviesType";

export default async function Genres ( { genres, setSelectedGenre } : { genres: GenresType[], setSelectedGenre: (genre: number | null) => void } ) {

    return (
        <div>
            <div className="flex flex-wrap gap-2 justify-center items-center bg-sky-950 p-8 rounded-t-lg">
                    {genres.map((genre:any) => (
                      <button
                        key={genre.id}
                        onClick={() => setSelectedGenre(genre.id)}
                        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-colors"
                      >
                        {genre.name}
                      </button>
                      ))}
                      <button 
                        onClick={() => setSelectedGenre(0)}
                        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition-colors">
                        All
                      </button>
                  </div>
        </div>
    )

}
