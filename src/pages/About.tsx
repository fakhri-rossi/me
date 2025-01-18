import { useContext } from "react";
import { ProfileContext, ProfileContextType } from "../context/profile.context";
import MyText from "../components/MyText";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/ui/Button";
import ContactItem from "../components/layout/ContactItem";
import SectionContainer from "../components/layout/SectionContainer";
import TechItem from "../components/layout/TechItem";
import { Link } from "react-router";

function CertificateItem({
  name,
  type,
  issuer,
  issuerUrl,
  thumbnailUrl,
  validationUrl,
}: {
  name: string;
  thumbnailUrl: string;
  type: string;
  issuer: string;
  issuerUrl: string;
  validationUrl: string;
}) {
  return (
    <div className="flex flex-col w-full md:w-[80%] md:flex-row justify-center gap-2 md:gap-8">
      <div className="overflow-hidden md:rounded-xl md:w-[50%]">
        <img src={thumbnailUrl} className="w-full" alt="" />
      </div>

      <div className="flex w-full md:w-[45%] flex-col items-center md:items-start gap-2 md:p-8">
        <MyText size="h2" className="font-medium">
          {name}
        </MyText>
        <MyText size="p">
          Issuer:{" "}
          <a
            href={issuerUrl}
            className="underline hover:text-black/50 cursor-pointer"
            target="_blank">
            {issuer}
          </a>
        </MyText>

        <MyText size="p">Type: {type}</MyText>
        <Link to={validationUrl} target="_blank">
          <MyText
            className="text-blue-600 underline hover:text-blue-300"
            size="p">
            Validate
          </MyText>
        </Link>
      </div>
    </div>
  );
}

export default function About() {
  const { profileData } = useContext<ProfileContextType>(ProfileContext);

  return (
    <div className="px-5 min-h-screen">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center py-8">
        <div className="w-[50%] md:w-[20%]">
          <img src={profileData.imageUrl} alt="" />
        </div>

        <div className="flex flex-col mt-2 md:mt-0 gap-2 md:gap-3 w-[100%] md:w-[40%] justify-center text-center md:text-start">
          <MyText size="h2" className="font-medium">
            {profileData.fullName}
          </MyText>
          <MyText size="p" className="text-gray-500 font-medium">
            {profileData.job}
          </MyText>
          <MyText size="p">{profileData.summary}</MyText>

          <div className="flex gap-3 mt-4 items-center justify-center md:justify-start">
            <a
              href="../../public/Fakhri-Rossi _Full-Stack_Web-Developer_Resume.pdf"
              download="CV_Fakhri-Rossi_Full-Stack.pdf">
              <Button variant="outline">Download My CV</Button>
            </a>

            <a
              href="https://drive.google.com/file/d/1gFeFYYbZ_XJ2gW9DZrh5ToWlL3krLjsU/view?usp=sharing"
              target="_blank">
              <Button>See My CV</Button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <SectionContainer
        id="contact_me"
        title="Contact Me"
        className="flex flex-col md:flex-row py-5 md:py-12 md:justify-center md:gap-16 items-center">
        <div className="flex flex-col gap-4 md:flex-row flex-wrap md:w-[40%] md:ps-5 md:border-l-2 md:border-solid md:border-black">
          {/* <div className="flex md:flex-row gap-3"> */}
          <ContactItem
            icon={<MdEmail />}
            label="Email"
            value={profileData.contact.email}
            className="w-full md:w-[45%]"
          />

          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value={profileData.contact.linkedin}
            className="w-full md:w-[45%]"
          />

          <ContactItem
            icon={<FaGithub />}
            label="Github"
            value={profileData.contact.github}
            className="w-full md:w-[45%]"
          />
        </div>
      </SectionContainer>

      {/* SKILLS */}
      <SectionContainer
        title="Skills"
        className="flex flex-col justify-center items-center gap-8">
        {profileData.skills.map((group, i) => {
          return (
            <div key={i} className="flex flex-col">
              <MyText
                className="text-center py-4 font-normal text-black/50"
                size="p">
                {group.category}
              </MyText>

              <div className="flex  flex-wrap items-center justify-center gap-5 ">
                {group.skills.map((item, j) => {
                  return (
                    <TechItem
                      name={item.name}
                      logoUrl={item.imageUrl}
                      key={j}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </SectionContainer>

      {/* CERTIFICATES */}
      <SectionContainer title="Certificates">
        <div className="flex flex-col gap-8 items-center justify-center">
          {profileData.certificates.map((item, i) => {
            return (
              <CertificateItem
                issuerUrl={item.issuerUrl}
                key={i}
                name={item.name}
                issuer={item.issuer}
                type={item.type}
                thumbnailUrl={item.imageUrl}
                validationUrl={item.validationUrl}
              />
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
