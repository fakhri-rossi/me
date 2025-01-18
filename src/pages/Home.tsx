import { useContext } from "react";
import { ProfileContext, ProfileContextType } from "../context/profile.context";
import MyText from "../components/MyText";
import Button from "../components/ui/Button";
import SectionContainer from "../components/layout/SectionContainer";
import TechItem from "../components/layout/TechItem";
import { Link, useNavigate } from "react-router";

function ProjectCard({
  thumbnailUrl,
  title,
  className,
  jobDesk,
  projectIndex,
}: {
  thumbnailUrl: string;
  title: string;
  className?: string;
  jobDesk: string;
  projectIndex: number;
}) {
  return (
    <Link to={`/projects/${projectIndex}`}>
      <div
        className={`shadow-md border border-solid border-gray-300 rounded-3xl p-4 hover:bg-black/20 cursor-pointer duration-100 ${className}`}>
        <div className="overflow-hidden rounded-2xl">
          <img className="w-full" src={thumbnailUrl} alt="" />
        </div>

        <div className="mt-3">
          <MyText size="p" className="font-medium text-start">
            {title}
          </MyText>

          <MyText
            size="sm"
            className="font-normal text-start text-black/50 mt-1">
            {jobDesk}
          </MyText>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const { profileData } = useContext<ProfileContextType>(ProfileContext);
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 md:flex md:flex-row-reverse md:gap-0 h-[calc(100vh-50px)] justify-center">
        <div className="w-[60%] md:w-[20%]">
          <img src={profileData.imageUrl} />
        </div>

        <div className="md:w-[50%] xl:w-[20%] text-center md:text-start flex flex-col gap-1 md:gap-3">
          <MyText className="font-light" size="h2">
            Hello, World! I'm
          </MyText>

          <MyText className="font-medium" size="h1">
            {profileData.fullName}
          </MyText>

          <MyText className="font-light text-gray-600" size="h2">
            &lt;&nbsp;A {profileData.job}&nbsp;/&gt;
          </MyText>

          <div className="flex gap-3 mt-5">
            <Button
              onClick={() => navigate("/about#contact_me")}
              variant="outline">
              Contact Me
            </Button>
            <a
              href="https://drive.google.com/file/d/1gFeFYYbZ_XJ2gW9DZrh5ToWlL3krLjsU/view?usp=sharing"
              target="_blank">
              <Button>See My CV</Button>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <SectionContainer title="Skills" className="p-3">
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {profileData.skills.map((group) =>
            group.skills.map((item, i) => {
              return (
                <TechItem logoUrl={item.imageUrl} name={item.name} key={i} />
              );
            })
          )}
        </div>
      </SectionContainer>

      {/* PROJECTS */}
      <SectionContainer
        title="Projects"
        className="py-3 flex flex-col items-center">
        <div className="flex flex-col gap-3 items-center justify-center px-3 w-[90%] md:w-[50%] md:flex-row md:justify-center">
          {profileData.projects.map((item, i) => {
            return (
              <ProjectCard
                projectIndex={i + 1}
                thumbnailUrl={item.imageUrl}
                title={item.name}
                jobDesk={item.jobDesk}
                key={i}
              />
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
