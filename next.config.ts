import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	devIndicators: false,
	async redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/meowlounge/next-template',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
