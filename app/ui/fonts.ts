import { Playfair_Display, Lusitana, Philosopher } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
   subsets: ['latin'],
   weight: ['400', '500', '700'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
});
