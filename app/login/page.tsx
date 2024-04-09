'use client';

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
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Link from 'next/link';
import classes from '../styles/Login.module.css';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function Login() {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const { pending } = useFormStatus();

	return (
		<Container size={420} my={40}>
			<form action={dispatch} className='space-y-3'>
				<Title ta='center' className={classes.title}>
					Welcome back!
				</Title>
				<Text c='dimmed' size='sm' ta='center' mt={5}>
					Please fill in the details below.{' '}
				</Text>

				<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
					<div className='flex items-center w-full gap-x-2'>
						<Button
							size='md'
							fullWidth
							variant='outline'
							color='rgba(0, 0, 0, 0.20)'
						>
							<FcGoogle className='h-5 w-5' />
						</Button>
						<Button
							size='md'
							fullWidth
							variant='outline'
							color='rgba(0, 0, 0, 0.20)'
						>
							<IoLogoGithub color='black' className='h-5 w-5' />
						</Button>
					</div>

					<TextInput
						label='Email'
						placeholder='you@mantine.dev'
						required
						// {...form.getInputProps('email')}
					/>
					<PasswordInput
						label='Password'
						placeholder='******'
						required
						mt='md'
						// {...form.getInputProps('password')}
					/>

					<Group justify='space-between' mt='lg'>
						<Checkbox label='Remember me' />
						<Link href='/forgotpassword'>
							<Anchor component='button' size='sm'>
								Forgot password?
							</Anchor>
						</Link>
					</Group>

					<Button fullWidth mt='xl' type='submit' aria-disabled={pending}>
						Sign in
					</Button>
					<div
						className='flex h-8 items-end space-x-1'
						aria-live='polite'
						aria-atomic='true'
					>
						{errorMessage && (
							<>
								<ExclamationCircleIcon className='h-5 w-5 text-red-500' />
								<p className='text-sm text-red-500'>{errorMessage}</p>
							</>
						)}
					</div>
				</Paper>
			</form>
		</Container>
	);
}
