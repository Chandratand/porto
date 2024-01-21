'use client';
import Lottie from 'lottie-react';
import { Button } from '../ui/button';
import CodingAnimation from '../../../public/assets/coding-animation.json';
import { MyContactDialog } from '../MyContactDialog';

const CTASection = () => {
  return (
    <section className="flex items-center justify-center bg-primary px-4 py-16">
      <div className="flex w-full max-w-[1000px] items-center justify-between rounded-3xl border bg-background px-8 py-10 shadow-sm sm:rounded-[32px] sm:px-12">
        <div>
          <p className="text-sm font-bold text-primary sm:mb-2 md:text-lg">HAVE ANY PROJECT IDEA?</p>
          <h3 className="mb-3 max-w-[430px] text-2xl font-bold text-foreground sm:mb-5 md:max-w-[530px] lg:text-4xl">Let&apos;s turn your visionary ideas into reality together.</h3>
          <MyContactDialog />
        </div>
        <div className="hidden px-4 sm:block lg:px-8">
          <Lottie animationData={CodingAnimation} loop className="max-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
