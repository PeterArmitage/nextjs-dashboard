import { SimpleGrid, Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import classes from '../../styles/Dashboard.module.css';
import {
	IconWalk,
	IconZzz,
	IconMoodEmpty,
	IconBarbell,
} from '@tabler/icons-react';
import { steps, sleep, barChartDouble } from '../../lib/data';

export function TopGrid() {
	return (
		<SimpleGrid cols={2} className={classes.container}>
			<div className='flex flex-col items-center rounded-lg bg-amber-100 p-4'>
				<IconWalk />
				<Text>Average Daily Steps Taken</Text>
				<div className='font-bold'>8,673</div>
			</div>
			<div className=' flex flex-col items-center rounded-lg bg-purple-200 p-4'>
				<IconZzz />
				<Text>Average Hours of Sleep</Text>
				<div className='font-bold'>6hrs 28mins</div>
			</div>
			<div className='flex flex-col items-center rounded-lg bg-pink-100 p-4'>
				<IconMoodEmpty />
				<Text>General Mood</Text>
				<div className='font-bold'>Moderate</div>
			</div>
			<div className=' flex flex-col items-center rounded-lg bg-violet-100 p-4'>
				<IconBarbell />
				<Text>Total Completed Workouts</Text>
				<div className='font-bold'>25</div>
			</div>
		</SimpleGrid>
	);
}

export function StepsGrid() {
	return (
		<div className='mt-8'>
			<BarChart
				h={250}
				w={350}
				data={steps}
				dataKey='day'
				withLegend
				legendProps={{ verticalAlign: 'bottom' }}
				series={[{ name: 'steps', color: 'violet.6' }]}
			/>
		</div>
	);
}

export function EnergyLevels() {
	return (
		<div>
			<BarChart
				h={300}
				w={400}
				data={barChartDouble}
				dataKey='day'
				withLegend
				legendProps={{ verticalAlign: 'bottom', height: 50 }}
				series={[
					{ name: 'Energy', color: 'violet.6' },
					{ name: 'Mood', color: 'blue.6' },
				]}
			/>
		</div>
	);
}

export function SleepGrid() {
	return (
		<div className='mt-8'>
			<BarChart
				h={250}
				w={350}
				data={sleep}
				dataKey='day'
				withLegend
				legendProps={{ verticalAlign: 'bottom' }}
				series={[{ name: 'sleep', color: 'violet.6' }]}
			/>
		</div>
	);
}

export default function Overview() {
	return (
		<div>
			<div className='flex'>
				<TopGrid />
				<EnergyLevels />
			</div>
			<div className='flex'>
				<StepsGrid />
				<SleepGrid />
			</div>
		</div>
	);
}
