import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'kappa.lol',
				pathname: '**',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/dwhincandi',
				permanent: true,
			},
			{
				source: '/instagram',
				destination: 'https://instagram.com/dwhincandi',
				permanent: true,
			},
			{
				source: '/twitch',
				destination: 'https://twitch.tv/dwhincandi',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
