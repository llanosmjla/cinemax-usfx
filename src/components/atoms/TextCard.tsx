
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
        <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title || "Title"}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Fecha de estreno: {releaseDate}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{genre}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Popularity: {popularity}</p>
        </div>
    );
}