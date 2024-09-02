'use client'

import React from "react";

type MovieDetailsProps = {
    children: React.ReactNode;
};

const MovieDetailsClient = ({ children }: MovieDetailsProps) => {
    return (
        <div className="flex flex-col gap-4 w-full h-full">
            {children}
        </div>
    );
}

export default MovieDetailsClient;