/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.gq.com.mx', 'image.tmdb.org', 'ui-avatars.com', 'api.themoviedb.org'],
    },
    /*swcMinify: false, // Desactiva la minificación con SWC
    webpack: (config) => {
      config.optimization.minimize = false; // Desactiva la minificación con Terser
      return config;
    },*/
};

export default nextConfig;
