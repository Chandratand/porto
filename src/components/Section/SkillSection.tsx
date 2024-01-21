import AccentText from '../AccentText';
import SKILL_LIST from '../../data/skills';

const SkillSection = () => {
  return (
    <section className="container my-4 bg-secondary/0 bg-gradient-to-b from-secondary/80 bg-no-repeat p-4 pt-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Skill , Tools and <AccentText>Technology</AccentText>
        </h2>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {SKILL_LIST.map((skill) => (
          <div className="" key={skill.id}>
            <div className="flex items-center justify-center gap-2 rounded-lg border bg-background p-4 text-muted-foreground shadow-md hover:cursor-default hover:bg-secondary">
              <skill.icon className="size-[36px]" />
              <p className="font-bold">{skill.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
