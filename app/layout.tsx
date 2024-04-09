import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Personal health and fitness tracking app.',
	description: 'Pathway to a healthier you!',
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
				<link rel='shortcut icon' href='/heart.svg' />
			</head>
			<body className={`${inter.className} antialiased`}>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
