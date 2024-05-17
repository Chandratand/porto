import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import Provider from '@/components/Provider';

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
    <html lang="en" className={cn('antialiased', montserrat.className)} suppressHydrationWarning>
      <body className={cn('relative', { 'debug-screens': process.env.NODE_ENV === 'development' })}>
        <Provider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="pt-14">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
