import localFont from 'next/font/local';
import {
  Onest,
  Manrope,
  Cormorant_Garamond,
  Inter,
  Jost,
  Golos_Text,
  Playfair_Display,
} from 'next/font/google';

export const ttFirsNeue = localFont({
  src: '../fonts/tt-firs-neue/TTFirsNeue-Variable.woff2',
  variable: '--font-tt-firs',
  display: 'swap',
  weight: '100 900',
  fallback: ['system-ui', 'sans-serif'],
});

export const radiotechnika = localFont({
  src: '../fonts/radiotechnika/Radiotechnika.ttf',
  variable: '--font-radiotechnika',
  display: 'swap',
  weight: '400',
  fallback: ['system-ui', 'sans-serif'],
});

export const monitorca = localFont({
  src: '../fonts/monitorca/Monitorca.ttf',
  variable: '--font-monitorca',
  display: 'swap',
  weight: '400',
  fallback: ['ui-monospace', 'monospace'],
});

export const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const golos = Golos_Text({
  variable: '--font-golos',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const allFontVariables = [
  ttFirsNeue,
  radiotechnika,
  monitorca,
  onest,
  manrope,
  cormorant,
  inter,
  jost,
  golos,
  playfair,
]
  .map((f) => f.variable)
  .join(' ');
