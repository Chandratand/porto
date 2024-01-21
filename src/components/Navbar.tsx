'use client';

import { cn } from '@/lib/utils';
import AOS from 'aos';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { buttonVariants } from './ui/button';

const Navbar = () => {
  const headerRef = useRef<HTMLInputElement>(null);

  const onScroll = () => {
    if (window.pageYOffset > 0) {
      headerRef.current?.classList.add('shadow-lg');
    } else {
      headerRef.current?.classList.remove('shadow-lg');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed z-50 w-full border-b bg-white">
      <nav className="container flex items-center justify-between p-4 py-3">
        <Link href={'/'} className="font-extrabold">
          Chandratand
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link target="_blank" href={'/assets/CV-Chandra Tandiono.pdf'} className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'font-bold')}>
            Download my CV
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
