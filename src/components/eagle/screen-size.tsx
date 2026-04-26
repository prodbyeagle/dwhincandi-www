'use client';

import { cn } from '@/lib/utils';

import { useDrag } from '@/hooks/use-drag';
import { useScreen } from '@/hooks/use-screen';

import { motion } from 'motion/react';
import { useCallback, useState } from 'react';

const corners = [
	'top-left',
	'top-right',
	'bottom-left',
	'bottom-right',
] as const;
type Corner = (typeof corners)[number];

type ScreenSizeIndicatorProps = {
	debug?: boolean;
};

const cornerStyles: Record<Corner, string> = {
	'top-left': 'top-0 left-0 w-1/2 h-1/2 border-r border-b',
	'top-right': 'top-0 right-0 w-1/2 h-1/2 border-l border-b',
	'bottom-left': 'bottom-0 left-0 w-1/2 h-1/2 border-r border-t',
	'bottom-right': 'bottom-0 right-0 w-1/2 h-1/2 border-l border-t',
};

const positionClasses: Record<Corner, string> = {
	'top-left': 'top-6 left-6',
	'top-right': 'top-6 right-6',
	'bottom-left': 'bottom-6 left-6',
	'bottom-right': 'bottom-6 right-6',
};

function getCornerFromPosition(x: number, y: number): Corner {
	const isTop = y < window.innerHeight / 2;
	const isLeft = x < window.innerWidth / 2;
	if (isTop && isLeft) return 'top-left';
	if (isTop) return 'top-right';
	if (isLeft) return 'bottom-left';
	return 'bottom-right';
}

export function ScreenSizeIndicator({ debug }: ScreenSizeIndicatorProps) {
	const screen = useScreen();
	const [position, setPosition] = useState<Corner>('top-left');

	const { handlers, isDragging } = useDrag();

	const updatePosition = useCallback((x: number, y: number) => {
		setPosition(getCornerFromPosition(x, y));
	}, []);

	const onPointerMove = useCallback(
		(e: React.PointerEvent) => {
			handlers.onPointerMove(e);
			updatePosition(e.clientX, e.clientY);
		},
		[handlers, updatePosition]
	);

	const showZones = debug && isDragging;

	return (
		<>
			{showZones &&
				corners.map((corner) => (
					<div
						key={corner}
						className={cn(
							'fixed pointer-events-none z-[9998] bg-primary/10 border-primary/30 transition-opacity',
							cornerStyles[corner]
						)}
					/>
				))}

			<motion.div
				role='region'
				aria-label='Screen size indicator, draggable'
				onPointerDown={handlers.onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={handlers.onPointerUp}
				onPointerCancel={handlers.onPointerCancel}
				layout
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				className={cn(
					'fixed z-9999 select-none font-mono text-sm cursor-grab active:cursor-grabbing px-4 py-2 rounded-lg text-center bg-card',
					positionClasses[position]
				)}
				style={{ touchAction: 'none' }}>
				{screen.toUpperCase()}
			</motion.div>
		</>
	);
}
