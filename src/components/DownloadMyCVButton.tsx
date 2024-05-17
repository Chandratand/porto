import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const DownloadMyCVButton = () => {
  return (
    <>
      <Link prefetch={false} target="_blank" href={'/assets/CV-Chandra Tandiono.pdf'} className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'font-semibold hidden sm:inline-flex')}>
        Download my CV
      </Link>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link prefetch={false} target="_blank" href={'/assets/CV-Chandra Tandiono.pdf'} aria-label="Download my CV" className={cn(buttonVariants({ variant: 'secondary', size: 'icon' }), 'font-semibold size-9 sm:hidden')}>
              <Download size={16} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Download My CV</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default DownloadMyCVButton;
