import { Instagram, Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '../../../public/assets/profile.png';
import { Button } from '../ui/button';
import AccentText from '../AccentText';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* <div className="ellipse" /> */}
      <section className="container relative flex flex-col py-10 md:py-12 lg:flex-row">
        {/* Text Part */}
        <div className="flex flex-1 flex-col justify-center space-y-4 text-center lg:pr-4 lg:text-start">
          <h1 className="text-4xl font-bold md:text-6xl">
            <AccentText>Helping</AccentText> you turn ideas into reality
          </h1>
          <div className="space-y-5">
            <p className="mb-5 text-lg text-accent-foreground">
              I’m a software engineer living in Medan. I have the ability to code on the backend and frontend sides and very passionate about modern technology while taking into consideration the latest trends and techniques.
            </p>
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-8 lg:justify-start ">
              <Button>Schedule a meeting</Button>
              <div className="flex justify-center gap-4">
                <Link href={'https://www.instagram.com/chandratand/'} aria-label="Instagram link">
                  <Instagram />
                </Link>
                <Link href={'https://www.linkedin.com/in/chandratandiono/'} aria-label="LinkedIn link">
                  <Linkedin />
                </Link>
                <Link href={'mailto: chandra.tand@gmail.com'} aria-label="Email link">
                  <MailIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Part */}
        <div className="flex-1 px-8">
          <Image src={Profile} alt="profile" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
