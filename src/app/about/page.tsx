import CardImage from "@/app/components/molecules/CardImage";

export default function About() {
    return (
        <div className="flex flex-col gap-4 px-4 py-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Acerca de Nosotros</h1>
                <p className="text-lg mb-4">
                    Bienvenido a nuestra plataforma de reservación de películas, diseñada para ofrecerte la mejor experiencia tanto en la comodidad de tu hogar como en la pantalla grande. 
                    Nuestra misión es hacer que la magia del cine esté al alcance de todos, permitiéndote disfrutar de tus películas favoritas de la manera que prefieras.
                </p>
                <p className="text-lg mb-4">
                    Ya sea que desees ver una película en streaming desde la comodidad de tu hogar o prefieras la experiencia única de verla en un cine, 
                    nuestra plataforma te facilita reservar tus entradas de manera rápida y sencilla. Contamos con una amplia selección de películas, 
                    desde los últimos estrenos hasta clásicos atemporales, para que siempre encuentres algo que te encante.
                </p>
                <p className="text-lg mb-4">
                    Además, ofrecemos servicios exclusivos para cinéfilos, como notificaciones de próximos estrenos, 
                    descuentos en boletos y acceso anticipado a funciones especiales. Nos apasiona el cine y nos comprometemos a brindar la mejor experiencia posible para nuestros usuarios.
                </p>
                <p className="text-lg">
                    Gracias por elegirnos como tu plataforma de confianza para disfrutar del cine. ¡Nos vemos en la pantalla!
                </p>
            </div>
        </div>
    );
}
