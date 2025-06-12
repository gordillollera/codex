import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Directorio de Profesionales de Salud Mental',
  description: 'Encuentra psicólogos, coaches y logopedas cerca de ti.',
  openGraph: {
    title: 'Directorio de Profesionales de Salud Mental',
    description: 'Encuentra profesionales cerca de ti',
    url: 'https://tu-dominio.vercel.app',
    siteName: 'Salud Mental Local',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
