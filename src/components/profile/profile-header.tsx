'use client';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { Profile } from '@/types';

export function ProfileHeader({ userData }: { userData: Profile }) {
	const { theme } = useTheme();
	const isDark = theme === 'dark';
	const accent = isDark ? userData.theme.dark.accent : userData.theme.light.accent;
	const text = isDark ? userData.theme.dark.text : userData.theme.light.text;

	const initials = userData.displayName
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase();

	return (
		<div className="w-full">
			<div
				className="relative h-28 w-full rounded-xl border"
				style={{
					borderColor: hexToRgba(accent, 0.25),
					backgroundImage: userData.coverImage
						? `url(${userData.coverImage})`
						: `radial-gradient(600px circle at 10% 10%, ${hexToRgba(accent, 0.16)}, transparent 45%), radial-gradient(600px circle at 90% 90%, ${hexToRgba(accent, 0.12)}, transparent 45%), radial-gradient(2px 2px at 20px 20px, ${hexToRgba(text, 0.06)} 20%, transparent 21%)`,
					backgroundSize: userData.coverImage ? 'cover' : 'auto, auto, 22px 22px',
					backgroundPosition: 'center',
				}}>
				<div
					className="absolute inset-0 rounded-xl"
					style={{
						background: userData.coverImage
							? 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.0))'
							: undefined,
					}}
				/>
				{/* <div className="absolute bottom-2 right-2 flex gap-2">
          <a href="/github" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border" aria-label="GitHub">
            <GithubLogoIcon size={16} />
          </a>
          <a href="/instagram" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border" aria-label="Instagram">
            <InstagramLogoIcon size={16} />
          </a>
          <a href="/twitch" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border" aria-label="Twitch">
            <TwitchLogoIcon size={16} />
          </a>
        </div> */}
			</div>
			<div className="-mt-12 flex flex-col items-center">
				<div className="rounded-full bg-background p-1 shadow-sm">
					<Avatar className="w-24 h-24">
						<AvatarImage src={userData.avatar} alt={userData.displayName} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
				</div>
				<h1 className="mt-3 text-2xl font-semibold tracking-tight" style={{ color: text }}>
					{userData.displayName} ( @{userData.displayName.toLowerCase()} )
				</h1>
				<p className="max-w-md text-center text-sm text-muted-foreground line-clamp-2">{userData.bio}</p>
				{userData.tags && userData.tags.length > 0 && (
					<div className="mt-2 flex flex-wrap justify-center gap-1">
						{userData.tags.map((t) => (
							<span
								key={t}
								className="px-2 py-0.5 rounded-full bg-muted text-[11px] text-muted-foreground">
								{t}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
