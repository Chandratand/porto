import { cn } from '@/lib/utils';

const AccentText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn('relative inline-block text-[#2B567E] dark:text-[#A4E3F6]', className)}>
      <span className="relative z-10">{children}</span>
      <div className="absolute bottom-0 z-0 h-3 w-full -rotate-2 rounded-full bg-[#A4E3F6] dark:bg-[#2B567E] md:bottom-1 md:h-5" />
    </span>
  );
};

export default AccentText;
