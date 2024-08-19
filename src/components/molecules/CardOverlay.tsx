
import ImageCard from '../atoms/ImageCard';
import TextCard from '../atoms/TextCard';

type CardOverlayProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    releaseDate: string;
    genre: string;
    popularity: number;
};

export default function CardOverlay( { src, alt, width, height, title, releaseDate, genre, popularity }: CardOverlayProps ) {
    return (
        <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <ImageCard
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <TextCard
                title= {title}
                releaseDate= {releaseDate}
                genre= {genre}
                popularity= {popularity}
            />
        </div>
    )
}