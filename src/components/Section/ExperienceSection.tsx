import Image from 'next/image';
import ILExperience from '../../../public/assets/il-experience.svg';
import AccentText from '../AccentText';
import EXPERIENCE_DATA from '../../data/experiences.json';
import ExperienceList from '../ExperienceList';

const ExperienceSection = () => {
  return (
    <section className="container py-8 lg:px-8">
      <div className="rounded-xl bg-secondary px-4 py-6 sm:px-8 sm:py-12 md:rounded-2xl lg:rounded-3xl lg:px-12 lg:pb-14 lg:pt-12">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          My <AccentText>Experience</AccentText>
        </h2>
        <div className="mt-10 flex w-full flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-10">
          <div className="w-full max-w-[300px] justify-center sm:flex md:max-w-[600px]">
            <Image data-aos="fade-up" src={ILExperience} alt="experience-illustration" className="-scale-x-100" width={450} height={450} />
          </div>
          <div className="flex flex-col gap-4">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={exp.id} data-aos="fade-right" data-aos-delay={(index + 1) * 150}>
                <ExperienceList title={exp.title} description={exp.description} logo={exp.logo} period={exp.period} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
