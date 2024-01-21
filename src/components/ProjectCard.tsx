import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Project from '../../public/assets/dummy/project-1.jpg';
import { AspectRatio } from './ui/aspect-ratio';
import { Card, CardContent } from './ui/card';

const ProjectCard = () => {
  return (
    <Card className="transition-all hover:rotate-1 hover:cursor-pointer hover:bg-muted">
      <CardContent className="p-4 pb-6">
        <AspectRatio ratio={16 / 9}>
          <Image src={Project} alt="project-image" fill className="rounded-sm object-cover" />
        </AspectRatio>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-semibold lg:text-2xl">Lorem Website</h3>
          <p className="mb-4 line-clamp-6 text-justify text-sm text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione veniam ab inventore aliquam sed cupiditate, atque esse alias laudantium dolorem, facere dignissimos exercitationem labore reiciendis eius quae repellat.
            Similique, doloribus.
          </p>
          <Link href={'/'} className="flex items-center gap-1 text-sm font-semibold text-primary">
            View Project <ExternalLink size={16} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
