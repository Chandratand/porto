'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return null;
};

export default AOSInit;
