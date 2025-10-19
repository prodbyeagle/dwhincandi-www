import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<div className="text-center max-w-md">
				<h1 className="text-4xl font-bold mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-2">User Not Found</h2>
				<p className="mb-6 text-muted-foreground">
					The user you&#39;re looking for doesn&#39;t exist or the page has been moved.
				</p>
				<Button asChild>
					<Link href="/">Go Home</Link>
				</Button>
			</div>
		</div>
	);
}
