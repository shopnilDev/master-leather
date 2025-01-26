/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },
    images : {
        domains : ['mlbd.test']
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://mlbd.test/api/:path*', // Proxy to Backend
            },            
        ];
    },
    reactStrictMode: false,
};

export default nextConfig;
