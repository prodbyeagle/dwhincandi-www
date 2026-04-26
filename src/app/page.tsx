'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram } from 'lucide-react';

const links = [
	{
		label: 'Instagram',
		href: 'https://instagram.com/dwhincandi',
		icon: Instagram,
	},
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
	return (
		<main className='min-h-screen flex items-center justify-center px-6 py-16'>
			<motion.div
				className='w-full max-w-sm space-y-10'
				initial='hidden'
				animate='show'
				variants={{
					hidden: {},
					show: {
						transition: { staggerChildren: 0.08, delayChildren: 0.1 },
					},
				}}>
				<motion.header
					className='flex flex-col items-center text-center space-y-4'
					variants={{
						hidden: { opacity: 0, y: 12 },
						show: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6, ease: easeOut },
						},
					}}>
					<motion.img
						src='/andi.jpg'
						alt='Andi'
						className='size-32 rounded-full object-cover'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, ease: easeOut }}
					/>
					<div className='space-y-1'>
						<h1 className='text-3xl font-semibold tracking-tight leading-none'>
							Andi
						</h1>
						<p className='text-sm text-muted-foreground tracking-tight'>
							@dwhincandi
						</p>
					</div>
				</motion.header>

				<motion.ul
					className='space-y-2'
					variants={{
						hidden: {},
						show: {
							transition: { staggerChildren: 0.06 },
						},
					}}>
					{links.map((link) => (
						<motion.li
							key={link.href}
							variants={{
								hidden: { opacity: 0, y: 8 },
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.5, ease: easeOut },
								},
							}}>
							<motion.a
								href={link.href}
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium tracking-tight'
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2, ease: easeOut }}>
								<link.icon className='size-4 text-muted-foreground transition-colors group-hover:text-foreground' />
								<span>{link.label}</span>
								<ArrowUpRight className='ml-auto size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground' />
							</motion.a>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</main>
	);
}
