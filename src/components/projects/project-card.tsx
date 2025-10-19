'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ProjectMeta } from '@/types';

const LANG_ACCENTS: Record<string, string> = {
	javascript: '#f7df1e',
	js: '#f7df1e',
	typescript: '#3178c6',
	ts: '#3178c6',
	java: '#b07219',
	react: '#61dafb',
	python: '#3572A5',
	go: '#00ADD8',
	rust: '#dea584',
	css: '#563d7c',
	html: '#e34c26',
	php: '#4F5D95',
	kotlin: '#a97bff',
	swift: '#f05138',
	csharp: '#178600',
	'c#': '#178600',
	'c++': '#f34b7d',
};

function accentFor(tag?: string): string {
	if (!tag) return '#999999';
	const key = tag.toLowerCase();
	return LANG_ACCENTS[key] ?? '#999999';
}

type ThemeProps = {
	backgroundColor?: string;
	textColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	darkBackgroundColor?: string;
	darkTextColor?: string;
	darkSecondaryColor?: string;
	darkAccentColor?: string;
};

export function ProjectCard({ project, ...themeProps }: { project: ProjectMeta } & ThemeProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [currentColors, setCurrentColors] = useState({
		borderColor: themeProps.accentColor ? hexToRgba(themeProps.accentColor, 0.2) : 'rgba(255, 255, 255, 0.5)',
		secondaryColor: themeProps.secondaryColor || '#222222',
		textColor: themeProps.textColor || '#ffffff',
	});

	useEffect(() => {
		setMounted(true);

		if (
			theme === 'dark' &&
			themeProps.darkAccentColor &&
			themeProps.darkSecondaryColor &&
			themeProps.darkTextColor
		) {
			setCurrentColors({
				borderColor: hexToRgba(themeProps.darkAccentColor, 0.2),
				secondaryColor: themeProps.darkSecondaryColor,
				textColor: themeProps.darkTextColor,
			});
		} else {
			setCurrentColors({
				borderColor: themeProps.accentColor
					? hexToRgba(themeProps.accentColor, 0.2)
					: 'rgba(255, 255, 255, 0.5)',
				secondaryColor: themeProps.secondaryColor || '#222222',
				textColor: themeProps.textColor || '#ffffff',
			});
		}
	}, [
		theme,
		themeProps.accentColor,
		themeProps.secondaryColor,
		themeProps.textColor,
		themeProps.darkAccentColor,
		themeProps.darkSecondaryColor,
		themeProps.darkTextColor,
	]);

	if (!mounted) {
		return <div className="w-full h-[122px] bg-muted/60 rounded-2xl animate-pulse" />;
	}

	return (
		<a
			href={project.githubUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="block group focus:outline-none">
			<Card
				className="w-full overflow-hidden rounded-2xl border transition-all duration-200 ease-in-out group-hover:translate-y-[-2px] group-hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				style={{
					borderColor: currentColors.borderColor,
					backgroundColor: currentColors.secondaryColor,
				}}>
				<CardHeader className="pb-2">
					<CardTitle
						className="flex items-center justify-between text-base"
						style={{ color: currentColors.textColor }}>
						<span className="truncate">{project.name}</span>
						<ArrowUpRightIcon
							size={16}
							className="opacity-60 group-hover:translate-x-0.5 group-hover:rotate-45 group-hover:-translate-y-0.5 transition-transform"
							style={{ color: hexToRgba(currentColors.textColor || '#ffffff', 0.7) }}
						/>
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<p
						className="text-sm line-clamp-3 mb-3"
						style={{ color: hexToRgba(currentColors.textColor || '#ffffff', 0.7) }}>
						{project.description}
					</p>
					<div className="flex items-center gap-2">
						{project.tags?.slice(0, 3).map((t) => {
							const acc = accentFor(t);
							return (
								<span
									key={t}
									className="px-2 py-0.5 rounded-full text-[11px] border"
									style={{
										backgroundColor: hexToRgba(acc, 0.12),
										borderColor: hexToRgba(acc, 0.28),
									}}>
									{t}
								</span>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</a>
	);
}
