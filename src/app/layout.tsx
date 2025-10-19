import type React from 'react';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '@dwhincandi',
	icons: 'https://cdn.discordapp.com/avatars/893792975761584139/21e7ccd8813485529427ad0e87ac6e89.webp?size=1024',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.className} ${geistMono.variable} antialiased`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
