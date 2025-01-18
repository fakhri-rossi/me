import { ReactNode, useContext } from "react";
import MyText from "../components/MyText";
import { ProfileContext, ProfileContextType } from "../context/profile.context";
import { Link } from "react-router";

function MediaRow({
  thumbnailUrl,
  children,
  projectId: projectIndex,
}: {
  thumbnailUrl: string;
  children: ReactNode;
  projectId: number;
}) {
  return (
    <Link to={`/projects/${projectIndex + 1}`}>
      <div className="p-4 flex flex-col md:flex-row gap-5 shadow-md border border-solid border-gray-300 rounded-3xl hover:bg-black/20 duration-150 cursor-pointer">
        <div className="overflow-hidden rounded-2xl w-full md:w-[30%]">
          <img className="w-full" src={thumbnailUrl} alt="" />
        </div>

        <div className="md:w-[40%]">{children}</div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const { profileData } = useContext<ProfileContextType>(ProfileContext);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <MyText size="h1" className="text-center font-medium py-5 md:py-8">
        My Projects
      </MyText>

      <div className="w-[90%] md:w-[60%] flex flex-col gap-5">
        {profileData.projects.map((item, i) => {
          return (
            <MediaRow key={i} thumbnailUrl={item.imageUrl} projectId={i}>
              <div
                key={i}
                className="flex flex-col gap-2 items-start justify-start pt-2">
                <MyText size="h2" className="font-medium">
                  {item.name}
                </MyText>

                <MyText size="p" className="text-black/75">
                  {item.techs.flatMap((item) => item.name).join(", ")}
                </MyText>
              </div>
            </MediaRow>
          );
        })}
      </div>
    </div>
  );
}
