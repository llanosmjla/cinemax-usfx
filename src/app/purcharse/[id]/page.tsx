'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useMovies from '@/hooks/useMovies';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PurchasePageProps {
    params: { id: number };
}

const PurchasePage: React.FC<PurchasePageProps> = ({ params }) => {
    const { movies } = useMovies({ pages: 1, sort_by: "popularity.desc" });
    const movie = movies.find((item: any) => item.id === Number(params.id));
    const router = useRouter();

    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showDate, setShowDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [showTickets, setShowTickets] = useState<boolean>(false); // Para mostrar los boletos después de la compra

    if (!movie) {
        return <div>Loading...</div>;
    }

    const handleSeatSelection = (seat: string) => {
        setSelectedSeats((prev) => 
            prev.includes(seat) 
                ? prev.filter(s => s !== seat)
                : [...prev, seat]
        );
    };

    const handleTimeSelection = (time: string) => {
        setSelectedTime(time);
    };

    const handlePurchase = () => {
        if (selectedSeats.length && selectedTime) {
            alert('Tickets purchased!');
            setShowTickets(true); // Mostrar boletos solo después de la compra
        } else {
            alert('Please select at least one seat and a time.');
        }
    };

    const handleCancelSelection = () => {
        setSelectedSeats([]);
    };

    const availableSeats = [
        'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
        'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
        'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
        'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
    ];
    
    const showTimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'];

    return (
        <div className="h-screen flex flex-col items-center bg-gray-100">
            <main className="w-full flex flex-col items-center p-6">
                <div className="flex flex-col items-center">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width={300}
                        height={450}
                        className="rounded-lg shadow-md"
                    />
                    <h1 className="text-3xl font-bold my-4">{movie.title}</h1>
                </div>
                <div className="w-full max-w-xl mt-4 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Select Date:</h2>
                    <input 
                        type="date" 
                        value={showDate}
                        onChange={(e) => setShowDate(e.target.value)}
                        className="border p-2 w-full rounded-md my-2"
                    />
                    <h2 className="text-xl font-bold mb-2">Select Time:</h2>
                    <div className="grid grid-cols-4 gap-4 my-2">
                        {showTimes.map((time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeSelection(time)}
                                className={`p-2 ${selectedTime === time ? 'bg-green-500 text-white' : 'bg-gray-200'} rounded-md hover:bg-green-400 transition-colors`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2">Select Seats:</h2>
                    <div className="grid grid-cols-8 gap-4 my-2">
                        {availableSeats.map((seat) => (
                            <button
                                key={seat}
                                onClick={() => handleSeatSelection(seat)}
                                className={`p-2 ${selectedSeats.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-200'} rounded-md hover:bg-green-400 transition-colors`}
                            >
                                {seat}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={handlePurchase} 
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition-colors mr-2"
                        >
                            Purchase
                        </button>
                        <button 
                            onClick={handleCancelSelection} 
                            className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-700 transition-colors ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                {showTickets && (
                    <motion.div 
                        className="mt-6 w-full max-w-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-bold mb-4">Your Tickets:</h2>
                        {selectedSeats.map((seat) => (
                            <motion.div 
                                key={seat} 
                                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg mb-4"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        alt={movie.title}
                                        width={80}
                                        height={120}
                                        className="rounded-md shadow-sm"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">{movie.title}</h3>
                                        <p className="text-sm text-gray-600">Seat: <span className="font-medium">{seat}</span></p>
                                        <p className="text-sm text-gray-600">Date: <span className="font-medium">{showDate}</span></p>
                                        <p className="text-sm text-gray-600">Time: <span className="font-medium">{selectedTime}</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="barcode bg-black text-white p-2 rounded-md text-xs font-mono">
                                        <p>{`B16${seat.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0)}2023`}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">CinemaMax</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default PurchasePage;
