import {
	TextInput,
	PasswordInput,
	Checkbox,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
} from '@mantine/core';
import Link from 'next/link';
import classes from '../styles/Login.module.css';

export default function Login() {
	return (
		<Container size={420} my={40}>
			<Title ta='center' className={classes.title}>
				Welcome back!
			</Title>
			<Text c='dimmed' size='sm' ta='center' mt={5}>
				Please fill in the details below.{' '}
			</Text>

			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<TextInput label='Email' placeholder='you@mantine.dev' required />
				<PasswordInput
					label='Password'
					placeholder='Your password'
					required
					mt='md'
				/>
				<Group justify='space-between' mt='lg'>
					<Checkbox label='Remember me' />
					<Link href='/forgotpassword'>
						<Anchor component='button' size='sm'>
							Forgot password?
						</Anchor>
					</Link>
				</Group>
				<Button fullWidth mt='xl'>
					Sign in
				</Button>
			</Paper>
		</Container>
	);
}
