export type SocialPlatform =
	| 'Github'
	| 'Instagram'
	| 'Threads'
	| 'Website'
	| 'Twitch'
	| 'Twitter'
	| 'YouTube'
	| 'LinkedIn';

export interface SocialLink {
	icon: SocialPlatform;
	title: string;
	description: string;
	url: string;
}

interface ThemeColors {
	background: string;
	secondary: string;
	text: string;
	accent: string;
}

interface ProfileTheme {
	light: ThemeColors;
	dark: ThemeColors;
}

export interface Profile {
	username: string;
	displayName: string;
	bio: string;
	avatar: string;
	coverImage?: string;
	tags?: string[];
	links: SocialLink[];
	theme: ProfileTheme;
}

export interface ProjectMeta {
	name: string;
	description: string;
	githubUrl: string;
	tags: string[];
}
