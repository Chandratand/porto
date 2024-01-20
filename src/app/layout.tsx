import AOSInit from '@/components/AOSInit';
import { cn } from '@/lib/utils';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chandra Tandiono',
  description: `Welcome to the portfolio of Chandra Tandiono, a dedicated software developer. Explore innovative works and cutting-edge technological solutions that I have crafted. I specialize in developing efficient, reliable, and intuitive applications. Browse through my portfolio to learn more about the projects I've worked on, as well as my skills and experience in the field of software development.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('antialiased', montserrat.className)}>
      <body className={cn('relative', { 'debug-screens': process.env.NODE_ENV === 'development' })}>
        <AOSInit />
        <div>{children}</div>
      </body>
    </html>
  );
}
