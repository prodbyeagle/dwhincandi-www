import { cn } from '@/lib/utils';

import Link from 'next/link';
import type { JSX } from 'react';

export interface DocsLinkProps {
	href: string;
	children: string;
	className?: string;
	prefetch?: boolean;
}

/**
 * A styled external `<Link>` component for referencing documentation or external resources.
 *
 * @param href - Destination URL (e.g., external documentation).
 * @param children - Link text.
 * @param className - Optional Tailwind class overrides.
 * @param prefetch - Whether to prefetch the route. Defaults to `false` for external links.
 *
 * @returns A styled, accessible link element.
 *
 * @example
 * ```tsx
 * <DocsLink href="https://tailwindcss.com/docs">tailwind-v4-docs</DocsLink>
 * ```
 *
 * @author prodbyeagle
 */
export function DocsLink({
	href,
	children,
	className,
	prefetch = false,
}: DocsLinkProps): JSX.Element {
	return (
		<Link
			href={href}
			className={cn(
				'underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-foreground',
				className
			)}
			prefetch={prefetch}
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</Link>
	);
}
