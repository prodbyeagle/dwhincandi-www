import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Andi — @dwhincandi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					background:
						'radial-gradient(circle at 30% 20%, #2a1340 0%, #07060d 55%, #000 100%)',
					color: 'white',
					fontFamily: 'sans-serif',
					padding: 80,
				}}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 48,
					}}>
					<div
						style={{
							width: 220,
							height: 220,
							borderRadius: '9999px',
							background:
								'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: 120,
							fontWeight: 700,
							letterSpacing: -4,
						}}>
						A
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 8,
						}}>
						<div
							style={{
								fontSize: 96,
								fontWeight: 700,
								letterSpacing: -4,
								lineHeight: 1,
							}}>
							Andi
						</div>
						<div
							style={{
								fontSize: 40,
								color: '#a78bfa',
								letterSpacing: -1,
							}}>
							@dwhincandi
						</div>
					</div>
				</div>
				<div
					style={{
						marginTop: 64,
						fontSize: 32,
						color: '#9ca3af',
						letterSpacing: -0.5,
					}}>
					Every link. One place.
				</div>
			</div>
		),
		{ ...size }
	);
}
