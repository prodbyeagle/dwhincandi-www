'use client';

import { Icon } from '@phosphor-icons/react';
import {
	BrowserIcon,
	GithubLogoIcon,
	InstagramLogoIcon,
	ThreadsLogoIcon,
	TwitchLogoIcon,
	XLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { SocialLink, SocialPlatform } from '@/types';

interface LinkListProps {
	links: SocialLink[];
	backgroundColor?: string;
	textColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	darkBackgroundColor?: string;
	darkTextColor?: string;
	darkSecondaryColor?: string;
	darkAccentColor?: string;
}

const iconMap: Record<SocialPlatform, Icon> = {
	Instagram: InstagramLogoIcon,
	Github: GithubLogoIcon,
	Threads: ThreadsLogoIcon,
	Website: BrowserIcon,
	Twitter: XLogoIcon,
	Twitch: TwitchLogoIcon,
	YouTube: BrowserIcon,
	LinkedIn: BrowserIcon,
};

export default function LinkList({
	links,
	accentColor,
	secondaryColor,
	textColor,
	darkSecondaryColor,
	darkTextColor,
	darkAccentColor,
}: LinkListProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [currentColors, setCurrentColors] = useState({
		borderColor: accentColor ? hexToRgba(accentColor, 0.2) : 'rgba(255, 255, 255, 0.5)',
		secondaryColor: secondaryColor || '#222222',
		textColor: textColor || '#ffffff',
	});

	useEffect(() => {
		setMounted(true);

		if (theme === 'dark' && darkAccentColor && darkSecondaryColor && darkTextColor) {
			setCurrentColors({
				borderColor: hexToRgba(darkAccentColor, 0.2),
				secondaryColor: darkSecondaryColor,
				textColor: darkTextColor,
			});
		} else {
			setCurrentColors({
				borderColor: accentColor ? hexToRgba(accentColor, 0.2) : 'rgba(255, 255, 255, 0.5)',
				secondaryColor: secondaryColor || '#222222',
				textColor: textColor || '#ffffff',
			});
		}
	}, [theme, accentColor, secondaryColor, textColor, darkAccentColor, darkSecondaryColor, darkTextColor]);

	if (!mounted) {
		return (
			<div className="space-y-4 w-full">
				{[1, 2, 3].map((i) => (
					<div key={i} className="w-full h-16 bg-muted rounded-lg animate-pulse"></div>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4 w-full">
			{links.map((link, index) => {
				const IconComponent = iconMap[link.icon as SocialPlatform] || null;
				const iconBg = hexToRgba(currentColors.textColor || '#ffffff', 0.08);

				return (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="block w-full group focus:outline-none">
						<Card
							className="w-full overflow-hidden rounded-2xl border transition-all duration-200 ease-in-out group-hover:translate-y-[-2px] group-hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							style={{
								borderColor: currentColors.borderColor,
								backgroundColor: currentColors.secondaryColor,
							}}>
							<CardHeader className="relative">
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										{IconComponent && (
											<div
												className="flex items-center justify-center w-9 h-9 rounded-full"
												style={{ backgroundColor: iconBg }}>
												<IconComponent
													style={{ color: currentColors.textColor }}
													size={20}
													weight="regular"
												/>
											</div>
										)}
										<div>
											<CardTitle style={{ color: currentColors.textColor }} className="leading-6">
												{link.title}
											</CardTitle>
											<CardDescription
												style={{ color: hexToRgba(currentColors.textColor || '#ffffff', 0.7) }}
												className="line-clamp-1">
												{link.description}
											</CardDescription>
										</div>
									</div>
									<div className="shrink-0">
										<ArrowUpRightIcon
											size={18}
											weight="bold"
											style={{ color: hexToRgba(currentColors.textColor || '#ffffff', 0.6) }}
											className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										/>
									</div>
								</div>
							</CardHeader>
						</Card>
					</a>
				);
			})}
		</div>
	);
}
