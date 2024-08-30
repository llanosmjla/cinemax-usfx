'use client';

import React from 'react';

import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
    return (
        <div>
            <h1>Oops! Ha ocurrido un error.</h1>
            <p>Lo sentimos, algo salió mal.</p>
        </div>
    );
};
export default ErrorPage;