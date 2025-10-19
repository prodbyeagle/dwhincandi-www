import { FolderGit2 } from 'lucide-react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import LinkList from '@/components/link-list';
import { ProfileHeader } from '@/components/profile/profile-header';
import { SiteFooter } from '@/components/site-footer';
import ThemeAwareProfile from '@/components/theme-aware-profile';
import { ThemeToggle } from '@/components/theme-toggle';

import { userProfile } from '@/data/profile';

export default function HomePage() {
	const userData = userProfile;

	return (
		<ThemeAwareProfile userData={userData}>
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>

			<section className={cn('w-full max-w-lg mx-auto px-4', 'flex flex-col gap-8')}>
				<ProfileHeader userData={userData} />

				<div className="flex justify-center">
					<Link
						href="/projects"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
						<FolderGit2 className="h-4 w-4" />
						View Projects
					</Link>
				</div>

				<LinkList
					links={userData.links}
					textColor={userData.theme.light.text}
					secondaryColor={userData.theme.light.secondary}
					backgroundColor={userData.theme.light.background}
					accentColor={userData.theme.light.accent}
					darkTextColor={userData.theme.dark.text}
					darkSecondaryColor={userData.theme.dark.secondary}
					darkBackgroundColor={userData.theme.dark.background}
					darkAccentColor={userData.theme.dark.accent}
				/>
			</section>

			<SiteFooter />
		</ThemeAwareProfile>
	);
}
