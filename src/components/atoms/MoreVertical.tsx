"use client";

import React from 'react';


interface MoreVerticalProps {
  size: number;
}

export default function MoreVertical({size} : MoreVerticalProps) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-${size} w-${size} text-gray-500 dark:text-gray-400`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
        </svg>
    );
    }
