import { Link, useParams } from "react-router";
import MyText from "../components/MyText";
import { useContext } from "react";
import { ProfileContext, ProfileContextType } from "../context/profile.context";
import { BiArrowBack } from "react-icons/bi";
import TechItem from "../components/layout/TechItem";
import SectionContainer from "../components/layout/SectionContainer";

function FeatureItem({
  thumbnailUrl,
  title,
  description,
}: {
  thumbnailUrl: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center px-6">
      <div className="overflow-hidden md:w-[30%] rounded-2xl">
        <img className="w-full" src={thumbnailUrl} alt="" />
      </div>

      <div className="flex flex-col gap-3 text-start py-3">
        <MyText size="h3">{title}</MyText>
        {description && <MyText size="p">{description}</MyText>}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const params = useParams();
  const id = params.projectId;
  const { profileData } = useContext<ProfileContextType>(ProfileContext);
  const item = profileData.projects[Number(id) - 1];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex items-center justify-center md:gap-4 px-5 md:py-8">
        <Link to="/projects">
          <MyText
            size="title"
            className="hover:text-black/50 cursor-pointer duration-150">
            <BiArrowBack />
          </MyText>
        </Link>

        <MyText size="h2" className="text-center font-medium py-5 md:py-8">
          Projects / {item.name}
        </MyText>
      </div>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center gap-3 md:gap-7 md:w-[80%]">
        <div className="overflow-hidden md:rounded-3xl md:w-[40%]">
          <img className="w-full" src={item.imageUrl} alt="" />
        </div>

        <div className="md:py-3">
          <MyText size="h4" className="text-center md:text-starts mt-2">
            {item.description}
          </MyText>

          <div className="flex flex-col py-2 items-center justify-center">
            <MyText
              size="p"
              className="font-medium py-5 text-center text-black/50">
              Tech Used:
            </MyText>

            <div className="flex items-center gap-3">
              {item.techs.map((item, i) => {
                return (
                  <TechItem
                    size="sm"
                    name={item.name}
                    logoUrl={item.imageUrl}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {item.features[0] && (
        <SectionContainer title="Features">
          <div className="flex flex-col gap-8 items-center justify-center w-full">
            {item.features.map((item, i) => {
              return (
                <FeatureItem
                  key={i}
                  thumbnailUrl={item.imageUrl}
                  title={item.name}
                  description={item.description}
                />
              );
            })}
          </div>
        </SectionContainer>
      )}
    </div>
  );
}
