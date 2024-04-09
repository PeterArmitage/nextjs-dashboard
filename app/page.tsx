import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import classes from './styles/HomePage.module.css';
import { philosopher, lusitana } from './ui/fonts';

const HomePage = () => {
	return (
		<div className={classes.hero}>
			<Overlay
				gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
				opacity={1}
				zIndex={0}
			/>
			<Container className={classes.container} size='md'>
				<Title className={classes.title}>A Health and Fitness tracker.</Title>

				<div className={philosopher.className}>
					<Text className={classes.description} size='xl' mt='xl'>
						Track your daily exercise and food intake for whatever your goal is
						to become and better and healthier you! From exercise libraries to
						food tables, keep track of your daily routine and measure your
						progress.
					</Text>
				</div>

				<Button
					variant='gradient'
					size='xl'
					radius='xl'
					className={classes.control}
					component={Link}
					href='/login'
				>
					<span className={lusitana.className}>Create an Account</span>{' '}
					<ArrowRightIcon className={classes.arrow} />
				</Button>
			</Container>
		</div>
	);
};

export default HomePage;
