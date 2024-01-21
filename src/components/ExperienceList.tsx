import Image from 'next/image';

interface ExperienceListProps {
  title: string;
  description: string;
  logo: string;
  period: string;
}

const ExperienceList: React.FC<ExperienceListProps> = ({ title, description, logo, period }) => {
  return (
    <div className="flex gap-2 rounded-lg border p-4 shadow-md transition-all hover:scale-105 hover:cursor-default">
      <div className="flex w-[75px] justify-center">
        <Image src={logo} alt={title + 'logo'} width={150} height={150} className="object-contain" />
      </div>
      <div className="flex-1">
        <p className="font-semibold sm:text-lg">{title}</p>
        <p className="text-sm font-semibold text-muted-foreground">{period}</p>
        <p className="text-sm font-medium text-secondary-foreground sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceList;
