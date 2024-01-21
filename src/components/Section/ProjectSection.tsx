import AccentText from '../AccentText';
import ProjectCard from '../ProjectCard';
import PROJECT_LIST from '../../data/projects.json';

const ProjectSection = () => {
  return (
    <section className="container py-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Check out my latest <AccentText>project</AccentText>
        </h2>
        <p className="text-lg text-accent-foreground">These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.</p>
      </div>
      <div className="mx-auto my-8 grid grid-cols-1 gap-4 md:max-w-full md:grid-cols-3 lg:px-10">
        {PROJECT_LIST.map((project, index) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={Math.floor(index / 3) * 100 + (index % 3) * 100}>
            <ProjectCard title={project.title} image={project.image} description={project.description} href={project.href} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
