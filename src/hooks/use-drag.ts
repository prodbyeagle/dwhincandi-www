import { useCallback, useRef, useState } from 'react';

/**
 * Hook for dragging an element with pointer events.
 * Tracks absolute screen coordinates while dragging.
 */
export function useDrag(initialX = 16, initialY = 16) {
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: initialX,
		y: initialY,
	});
	const isDragging = useRef(false);

	const onPointerDown = useCallback((e: React.PointerEvent) => {
		isDragging.current = true;
		e.currentTarget.setPointerCapture(e.pointerId);
	}, []);

	const onPointerMove = useCallback((e: React.PointerEvent) => {
		if (!isDragging.current) return;
		e.preventDefault();
		setPosition({ x: e.clientX, y: e.clientY });
	}, []);

	const onPointerUp = useCallback((e: React.PointerEvent) => {
		if (!isDragging.current) return;
		isDragging.current = false;
		e.currentTarget.releasePointerCapture(e.pointerId);
	}, []);

	return {
		position,
		isDragging: isDragging.current,
		handlers: {
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
		},
		setPosition,
	};
}
