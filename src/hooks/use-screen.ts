import { useSyncExternalStore } from 'react';

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function getSnapshot(): ScreenSize {
	if (typeof window === 'undefined') return 'xl';
	const w = window.innerWidth;
	if (w < 640) return 'xs';
	if (w < 768) return 'sm';
	if (w < 1024) return 'md';
	if (w < 1280) return 'lg';
	return 'xl';
}

function subscribe(callback: () => void): () => void {
	if (typeof window === 'undefined') return () => {};
	window.addEventListener('resize', callback);
	return () => window.removeEventListener('resize', callback);
}

export function useScreen(): ScreenSize {
	return useSyncExternalStore(subscribe, getSnapshot, () => 'xl');
}
