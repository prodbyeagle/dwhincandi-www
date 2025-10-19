import { ArrowLeft } from 'lucide-react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ProjectCard } from '@/components/projects/project-card';
import { SiteFooter } from '@/components/site-footer';
import ThemeAwareProfile from '@/components/theme-aware-profile';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

import { userProfile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
	const userData = userProfile;

	return (
		<ThemeAwareProfile userData={userData}>
			<div className="absolute top-4 left-4 z-10">
				<Button asChild variant="outline" size="sm">
					<Link href="/">
						<ArrowLeft className="mr-2 h-4 w-4" /> Home
					</Link>
				</Button>
			</div>
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>

			<section className={cn('w-full max-w-4xl mx-auto px-4', 'flex flex-col gap-6')}>
				<header className="text-center">
					<h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
					<p className="text-sm text-muted-foreground">Selected work by {userData.displayName}</p>
				</header>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{projects.map((p) => (
						<ProjectCard
							key={p.name}
							project={p}
							textColor={userData.theme.light.text}
							secondaryColor={userData.theme.light.secondary}
							backgroundColor={userData.theme.light.background}
							accentColor={userData.theme.light.accent}
							darkTextColor={userData.theme.dark.text}
							darkSecondaryColor={userData.theme.dark.secondary}
							darkBackgroundColor={userData.theme.dark.background}
							darkAccentColor={userData.theme.dark.accent}
						/>
					))}
				</div>
			</section>

			<SiteFooter />
		</ThemeAwareProfile>
	);
}
