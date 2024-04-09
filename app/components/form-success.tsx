import { CheckCircleIcon } from '@heroicons/react/24/outline';

type FormSuccessProps = {
	message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<CheckCircleIcon className='w-12 h-12 text-green-500' />
			<p className='text-center text-green-500 text-lg'>{message}</p>
		</div>
	);
};
