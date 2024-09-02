'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useMovies from '@/hooks/useMovies';
import Image from 'next/image';

interface PurchasePageProps {
    params: { id: number };
}

const PurchasePage: React.FC<PurchasePageProps> = ({ params }) => {
    const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    const movie = movies.find((item: any) => item.id === Number(params.id));
    const router = useRouter();

    const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showDate, setShowDate] = useState<string>(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        if (movie) {
            router.push('/');
        }
    }, [movie, router]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const handleSeatSelection = (seat: string) => {
        setSelectedSeat(seat);
    };

    const handleTimeSelection = (time: string) => {
        setSelectedTime(time);
    };

    const handlePurchase = () => {
        if (selectedSeat && selectedTime) {
            // Aquí manejarías la compra de los boletos
            alert(`Ticket purchased for ${movie.title} on ${showDate} at ${selectedTime}, Seat: ${selectedSeat}`);
        } else {
            alert('Please select a seat and time.');
        }
    };

    const availableSeats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
    const showTimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'];

    return (
        <div className="h-screen flex flex-col items-center">
            <header className="bg-sky-950 h-16 w-full flex justify-center items-center text-white text-3xl">
                Cinema App - Purchase Tickets
            </header>
            <main className="w-full flex flex-col items-center p-6">
                <div className="flex flex-col items-center">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width={300}
                        height={450}
                    />
                    <h1 className="text-2xl font-bold my-4">{movie.title}</h1>
                </div>
                <div className="w-full max-w-xl mt-4">
                    <h2 className="text-xl font-bold">Select Date:</h2>
                    <input 
                        type="date" 
                        value={showDate}
                        onChange={(e) => setShowDate(e.target.value)}
                        className="border p-2 w-full rounded-md my-2"
                    />
                    <h2 className="text-xl font-bold">Select Time:</h2>
                    <div className="grid grid-cols-4 gap-4 my-2">
                        {showTimes.map((time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeSelection(time)}
                                className={`p-2 ${selectedTime === time ? 'bg-green-500' : 'bg-gray-200'} rounded-md`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold">Select Seat:</h2>
                    <div className="grid grid-cols-3 gap-4 my-2">
                        {availableSeats.map((seat) => (
                            <button
                                key={seat}
                                onClick={() => handleSeatSelection(seat)}
                                className={`p-2 ${selectedSeat === seat ? 'bg-green-500' : 'bg-gray-200'} rounded-md`}
                            >
                                {seat}
                            </button>
                        ))}
                    </div>
                    <button 
                        onClick={handlePurchase} 
                        className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-700 transition-colors"
                    >
                        Purchase
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PurchasePage;
