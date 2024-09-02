import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <footer className="text-sky-500 w-4/5 mx-auto inter md:pt-2">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-medium text-sky-300 text-base mb-3">
                                Películas
                            </h2>
                            <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                                <li>
                                    <Link
                                        className="text-sky-500 hover:text-sky-700 cursor-pointer"
                                        href="/movies/now-playing"
                                        passHref
                                    >
                                        Ahora en Cines
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sky-500 hover:text-sky-700 cursor-pointer"
                                        href="/movies/popular"
                                        passHref
                                    >
                                        Populares
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sky-500 hover:text-sky-700 cursor-pointer"
                                        href="/movies/top-rated"
                                        passHref
                                    >
                                        Mejor Valoradas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sky-500 hover:text-sky-700 cursor-pointer"
                                        href="/movies/upcoming"
                                        passHref
                                    >
                                        Próximamente
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-medium text-sky-300 text-base mb-3">
                                Desarrolladores
                            </h2>
                            <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                                <li>
                                    <a className="text-sky-500 hover:text-sky-700 cursor-pointer">
                                        API Documentación
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sky-500 hover:text-sky-700 cursor-pointer">
                                        GitHub
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
                <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
                <div className="flex items-center mx-auto text-gray-600 container justify-center md:justify-between py-2">
                    <div>
                        <span className="font-normal">
                            © Copyright 2024, Cinema App - Sucre - Bolivia
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
