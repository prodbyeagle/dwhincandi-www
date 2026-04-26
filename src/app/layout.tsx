import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dwhincandi.com';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Andi — @dwhincandi',
		template: '%s · @dwhincandi',
	},
	description:
		'Andi (@dwhincandi) — every social, stream, and platform in one place.',
	keywords: ['Andi', 'dwhincandi', 'links', 'social media'],
	authors: [{ name: 'Andi' }],
	creator: 'Andi',
	alternates: { canonical: '/' },
	openGraph: {
		type: 'profile',
		url: siteUrl,
		siteName: '@dwhincandi',
		title: 'Andi — @dwhincandi',
		description:
			'Andi (@dwhincandi) — every social, stream, and platform in one place.',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Andi — @dwhincandi',
		description:
			'Andi (@dwhincandi) — every social, stream, and platform in one place.',
		creator: '@dwhincandi',
	},
	icons: {
		icon: '/andi.jpg',
		apple: '/andi.jpg',
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.variable} antialiased font-sans`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
