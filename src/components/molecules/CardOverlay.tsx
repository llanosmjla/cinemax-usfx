
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
    voteAverage: number;
};

export default function CardOverlay( { src, alt, width, height, title, releaseDate, genre, popularity, voteAverage }: CardOverlayProps ) {
    const percentage = Math.round(voteAverage * 10);
    const borderColor = percentage >= 65 ? 'border-green-600' : percentage >= 40 ? 'border-yellow-400' : 'border-red-700';

    return (
        <div className='relative'>
            <ImageCard
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <div className={`absolute flex items-center justify-center top-0.5`}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full border-4 bg-black text-white text-sm font-bold ${borderColor}`}>
                    <span>{percentage}%</span>
                </div>
            </div>
            <TextCard

                title= {title}
                releaseDate= {releaseDate}
                genre= {genre}
                popularity= {popularity}
            />
        </div>
    )
}