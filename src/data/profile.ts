import type { Profile } from '@/types';

export const userProfile: Profile = {
	username: 'dwhincandi',
	displayName: 'DWHIncAndi',
	bio: '19 years old. living in germany. living life.',
	avatar: 'https://avatars.githubusercontent.com/u/134553825',
	coverImage:
		'https://raw.githubusercontent.com/prodbyeagle/dotfiles/refs/heads/main/Vencord/eagleCord/images/dwhincandi.gif?size=1024&width=1126&height=0',
	links: [
		{
			icon: 'Github',
			title: 'GitHub',
			description: 'Explore my open-source projects and contributions.',
			url: '/github',
		},
		{
			icon: 'Instagram',
			title: 'Instagram',
			description: 'Stay updated with my personal and creative posts.',
			url: '/instagram',
		},
		{
			icon: 'Twitch',
			title: 'Twitch',
			description: 'Join me live for gaming and coding sessions!',
			url: '/twitch',
		},
	],
	theme: {
		light: {
			background: '#f3e9e4',
			secondary: '#e4d0c6',
			text: '#2e1a12',
			accent: '#8c5e3c',
		},
		dark: {
			background: '#1a0d07',
			secondary: '#33211a',
			text: '#f5ece7',
			accent: '#c08b65',
		},
	},
};
