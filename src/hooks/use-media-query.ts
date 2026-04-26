import { useSyncExternalStore } from 'react';

/**
 * Subscribes to a media query and returns its current match state.
 * SSR-safe: returns false on the server.
 * @param query - A valid CSS media query string.
 */
export function useMediaQuery(query: string): boolean {
	const subscribe = (cb: () => void) => {
		if (typeof window === 'undefined') return () => {};
		const mql = window.matchMedia(query);
		mql.addEventListener('change', cb);
		return () => mql.removeEventListener('change', cb);
	};

	const getSnapshot = () => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia(query).matches;
	};

	return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
