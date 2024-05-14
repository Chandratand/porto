import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';
import { Card, CardContent } from './ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, href }) => {
  return (
    <Card className="group transition-all hover:rotate-1 hover:cursor-default hover:bg-muted">
      <CardContent className="p-4 pb-6">
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt={title + 'thumbnail'} fill className="rounded-sm object-cover" />
        </AspectRatio>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-semibold lg:text-2xl">{title}</h3>
          <div className="flex min-h-[210px] flex-col justify-between">
            <p className="mb-4 line-clamp-[8] text-justify text-sm text-muted-foreground">{description}</p>
            {href && (
              <Link href={href || '/'} target="_blank" className="flex items-center gap-1 text-sm font-semibold text-primary">
                View Project <ExternalLink size={16} />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
