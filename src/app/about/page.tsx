import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-sky-950 w-full h-screen">
             <div className="container mx-auto py-12 px-6 lg:px-8 bg-sky-900 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-center text-sky-600 mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-sky-100 text-center leading-relaxed mb-8">
                ¡Bienvenido a nuestra página! Somos un equipo de apasionados del cine que disfruta compartiendo nuestras opiniones y recomendaciones con otros amantes del séptimo arte. Ya sea que busques los últimos éxitos de taquilla o joyas ocultas, aquí encontrarás lo que necesitas.
            </p>
            <p className="text-xl text-sky-100 text-center leading-relaxed">
                Nuestra misión es ofrecerte el mejor contenido relacionado con el cine, incluyendo reseñas, noticias y entrevistas exclusivas. Creemos que las películas tienen el poder de inspirar, entretener y unir a las personas, y estamos aquí para celebrar la magia del cine contigo.
            </p>
        </div>
        </div>
    );
};

export default AboutPage;
