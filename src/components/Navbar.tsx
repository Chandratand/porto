'use client';

import AOS from 'aos';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import DownloadMyCVButton from './DownloadMyCVButton';
import ThemeToggle from './ThemeToggle';

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
    <header ref={headerRef} className="fixed z-50 w-full border-b bg-background">
      <nav className="container flex items-center justify-between p-4 py-3">
        <Link href={'/'} className="font-extrabold">
          Chandratand
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <DownloadMyCVButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
