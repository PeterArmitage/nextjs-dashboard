'use client';

import {
	IconSwimming,
	IconHome,
	IconPizza,
	IconTrendingUp,
	IconNotebook,
	IconZzz,
	IconMoodAngry,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'Overview', href: '/dashboard', icon: IconHome },
	{
		name: 'Exercise Library',
		href: '/dashboard/exerciseLibrary',
		icon: IconSwimming,
	},
	{ name: 'Nutition', href: '/dashboard/nutrition', icon: IconPizza },
	{ name: 'Stats', href: '/dashboard/stats', icon: IconTrendingUp },
	{ name: 'Planner', href: '/dashboard/planner', icon: IconNotebook },
	{
		name: 'Rest And Recovery',
		href: '/dashboard/restAndRecovery',
		icon: IconZzz,
	},
	{
		name: 'Stress Management',
		href: '/dashboard/stressManagement',
		icon: IconMoodAngry,
	},
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-sky-100 text-blue-600': pathname === link.href,
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
