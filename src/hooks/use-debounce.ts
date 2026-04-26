import { useEffect, useState } from 'react';

/**
 * Debounces a value by waiting for a pause in updates.
 *
 * @param value - The input value to debounce.
 * @param delay - Delay in milliseconds before updating the value.
 * @returns The debounced value.
 *
 * @example
 * const debounced = useDebounce(search, 300);
 */
export function useDebounce<T>(value: T, delay = 300): T {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const handle = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(handle);
	}, [value, delay]);

	return debounced;
}
