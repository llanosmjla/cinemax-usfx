'use client';

import useMovies from '@/hooks/useMovies';
import { useState } from 'react';


type Suggestion = {
    title: string;
};

/* const data = [
  { title: 'Apple' },
  { title: 'Banana' },
  { title: 'Cherry' },
  { title: 'Date' },
  { title: 'Grape' },
  { title: 'Mango' },
  { title: 'Orange' },
    { title: 'Pineapple' },
    { title: 'Strawberry' },
    { title: 'Watermelon' },
    { title: 'Kiwi' },
    { title: 'Peach' },
  // Puedes agregar más datos aquí
]; */

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const {movies} = useMovies({ pages: 1, sort_by: "popularity.desc" });

  const handleChange = (e : any) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = movies.filter((item : any) =>
        item.title.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion : any) => {
    setQuery(suggestion.title);
    setSuggestions([]);
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        style={{
          width: '100%',
          padding: '8px',
          boxSizing: 'border-box',
          color: '#333',
        }}
      />
      {suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          width: '100%',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          listStyleType: 'none',
          color: '#333',
          margin: 0,
          padding: 0,
          zIndex: 1000,
        }}>
          {suggestions.map((suggestion : any, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
