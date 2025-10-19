'use client';

import { ReactNode, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import type { Profile } from '@/types';

interface ThemeAwareProfileProps {
	userData: Profile;
	children: ReactNode;
}

export default function ThemeAwareProfile({ userData, children }: ThemeAwareProfileProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [themeColors, setThemeColors] = useState({
		backgroundColor: userData.theme.light.background || '#ffffff',
		secondaryColor: userData.theme.light.secondary || '#f3f3f3',
		textColor: userData.theme.light.text || '#333333',
		accentColor: userData.theme.light.accent || '#666666',
	});

	useEffect(() => {
		setMounted(true);

		if (theme === 'dark') {
			setThemeColors({
				backgroundColor: userData.theme.dark.background || '#000000',
				secondaryColor: userData.theme.dark.secondary || '#222222',
				textColor: userData.theme.dark.text || '#ffffff',
				accentColor: userData.theme.dark.accent || '#444444',
			});
		} else {
			setThemeColors({
				backgroundColor: userData.theme.light.background || '#ffffff',
				secondaryColor: userData.theme.light.secondary || '#f3f3f3',
				textColor: userData.theme.light.text || '#333333',
				accentColor: userData.theme.light.accent || '#666666',
			});
		}
	}, [theme, userData.theme]);

	if (!mounted) {
		return (
			<div className="min-h-screen flex flex-col items-center py-8 px-4 relative bg-background text-foreground">
				<div className="w-full max-w-md animate-pulse">
					<div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
					<div className="h-6 bg-muted rounded w-40 mx-auto mb-2"></div>
					<div className="h-4 bg-muted rounded w-64 mx-auto mb-8"></div>
					<div className="space-y-4">
						{[1, 2, 3].map((i) => (
							<div key={i} className="h-16 bg-muted rounded-lg"></div>
						))}
					</div>
				</div>
			</div>
		);
	}

	const useProfileGradient = theme === 'light' || theme === 'dark' || theme === undefined;
	const gradient = useProfileGradient
		? `radial-gradient(600px circle at 10% 10%, ${hexToRgba(themeColors.accentColor, 0.18)}, transparent 45%), radial-gradient(600px circle at 90% 90%, ${hexToRgba(themeColors.accentColor, 0.12)}, transparent 45%)`
		: undefined;

	return (
		<div
			className="min-h-screen flex flex-col items-center py-8 px-4 relative transition-colors duration-300"
			style={{
				backgroundColor: themeColors.backgroundColor,
				backgroundImage: gradient,
				borderColor: themeColors.secondaryColor,
				color: themeColors.textColor,
			}}>
			{children}
		</div>
	);
}
