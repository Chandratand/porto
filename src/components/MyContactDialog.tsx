'use client';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Instagram, Linkedin, MailIcon } from 'lucide-react';
import Link from 'next/link';

export function MyContactDialog({ label = 'Contact Me' }: { label?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{label}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] rounded-md sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>You can contact me via email or my social media below</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-1 font-semibold" href={'mailto: chandra.tand@gmail.com'} aria-label="Email link">
            <MailIcon />
            chandra.tand@gmail.com
          </Link>
          <Link className="flex items-center gap-1 font-semibold" href={'https://www.instagram.com/chandratand/'} aria-label="Instagram link">
            <Instagram />
            @chandratand
          </Link>
          <Link className="flex items-center gap-1 font-semibold" href={'https://www.linkedin.com/in/chandratandiono/'} aria-label="LinkedIn link">
            <Linkedin />
            Chandra Tandiono
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
