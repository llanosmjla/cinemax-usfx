
type TextCardProps = {
    title: string;
    releaseDate: string;
    genre: string;
    popularity: number;
};

export default function TextCard({ title, releaseDate, genre, popularity }: TextCardProps) {
    return (
        // La tarjeta tendra 3 textos el primero sera el titulo de la pelicula, el de abajo fecha de estreno 
        // tipo de pelicula y duracion
        <>
            <h1 className="pl-2 pt-4 text-xl font-bold text-gray-800 dark:text-white mb-2" >{title || "Title"}</h1>
            <p className="pl-2 text-sm text-gray-600 dark:text-gray-300 mb-1">Fecha de estreno: {releaseDate}</p>
            <p className="pl-2 text-sm text-gray-600 dark:text-gray-300 mb-1">Género: {genre}</p>
            <p className="pl-2 pb-4 text-sm text-gray-600 dark:text-gray-300">Popularidad: {popularity}</p>
        </>
    );
}