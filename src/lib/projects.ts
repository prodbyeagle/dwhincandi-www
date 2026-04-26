import type { IProject } from '@/types';

export const projects: IProject[] = [
	{
		name: 'Mythic Minerals',
		description:
			'just a simple Minecraft Mod that adds Mythic Minerals to the game. These minerals can be found in the overworld, nether and end dimensions and can be used to craft powerful tools and armor.',
		githubUrl: 'https://github.com/meowlounge/MythicMinerals',
		tags: ['java'],
	},
	{
		name: 'OPSheep',
		description:
			'OP Sheep turns regular sheep into powerful OP Sheep using Super Dye. Shear them with a multi-tiered Super Shear to collect exclusive loot including OP armor.',
		githubUrl: 'https://github.com/meowlounge/OPSheep',
		tags: ['java'],
	},
	{
		name: 'Quizer',
		description:
			'A quiz website built with React, TypeScript, and Tailwind CSS.',
		githubUrl: 'https://github.com/DWHIncAndi/Quizer',
		tags: ['typescript', 'react'],
	},
	{
		name: 'Cl1cker-Game',
		description:
			'My first own project - a simple clicker game in JavaScript.',
		githubUrl: 'https://github.com/DWHIncAndi/Cl1cker-Game',
		tags: ['javascript'],
	},
];
