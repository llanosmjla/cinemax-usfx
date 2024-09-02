'use client';

import useDataMovieName from "@/hooks/useDataMoviesName";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Request = {
    endpoint : string;
    query : string;
}

const SearchMoviePage = () => {
    const dataMoviesName = useDataMovieName();
    const [query, setQuery] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionBoxRef = useRef<HTMLUListElement>(null);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const filteredSuggestions = useMemo(() => {
        if (query.length > 0) {
            return dataMoviesName.filter((item) =>
                item.toLowerCase().includes(query)
            ).slice(0, 10);
        } else {
            return [];
        }
    }, [query, dataMoviesName]);

    const handleChange = (e: any) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };



    const handleSuggestionClick = (params : Request) => {
        setQuery(params.query);
        setSuggestions([]);
        //const urlSearchParams = new URLSearchParams();
        //urlSearchParams.set('query', params.query.toString());
        //push(`${pathname}${params.endpoint}?${urlSearchParams.toString()}`);
    };

    return (
        <div  className="w-full h-full flex flex-col items-center justify-center">
            <div
                className="w-1/2 m-auto flex flex-col items-center relative p-4"
            >
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="border border-sky-300 text-sky-300 bg-sky-900/50 w-full rounded-md m-2 p-2"
                    
                />
                <div
                    className={`relative w-full sm:flex`}

                >

                    {filteredSuggestions.length > 0 && ( 
                        <ul
                            ref={suggestionBoxRef}
                            className="absolute w-full border rounded-lg border-sky-300 bg-sky-800 text-sky-300 list-none"
                            style={{
                                zIndex: 1000,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {filteredSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="hover:bg-sky-700"
                                   // onClick={() => handleSuggestionClick({endpoint:"movies/search-movie/search-results", query: suggestion})}
                                    style={{
                                        padding: '8px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #eee',
                                        color: 'black',
                                    }}
                                >
                                    <Link
                                        href={`/movies/search-movie/search-results?query=${suggestion}`}
                                        onClick={() => handleSuggestionClick({endpoint:"movies/search-movie/search-results", query: suggestion})}
                                        className="text-sky-200"
                                    >
                                        {suggestion}
                                    </Link>
                                        
                                </li>
                            ))}
                        </ul>
                    )

                            }
                </div>
            </div>

        </div >

    );
}

export default SearchMoviePage;