import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

type FormErrorProps = {
	message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;
	return (
		<div className='flex flex-col items-center justify-center'>
			<ExclamationTriangleIcon className='w-12 h-12 text-red-500' />
			<p className='text-sm text-red-500 mt-2'>{message}</p>
		</div>
	);
};
