import { MdEmail } from "react-icons/md";
import MyText from "./MyText";
import { ReactNode, useContext } from "react";
import { ProfileContext, ProfileContextType } from "../context/profile.context";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FooterLink({
  icon,
  value,
  className,
}: {
  icon: ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex gap-2 items-center">
        <MyText size="h4" className="text-white">
          {icon}
        </MyText>

        <MyText
          size="p"
          className="font-medium underline hover:text-white/50 cursor-pointer duration-100 text-white">
          {value}
        </MyText>
      </div>
    </div>
  );
}

export default function Footer() {
  const { profileData } = useContext<ProfileContextType>(ProfileContext);

  return (
    <div className="border-t-2 border-gray-100 bg-black mt-6">
      <section className="flex flex-col md:flex-row py-5 md:py-12 md:justify-center gap-5 md:gap-16 items-center">
        <div>
          <MyText className="text-white" size="h1">
            {profileData.fullName}
          </MyText>
          <MyText className="text-white" size="h3">
            {profileData.job}
          </MyText>
        </div>

        <div className="flex flex-col gap-4 md:flex-row flex-wrap md:w-[40%] md:ps-5 md:border-l-2 md:border-solid md:border-white">
          {/* <div className="flex md:flex-row gap-3"> */}
          <FooterLink
            icon={<MdEmail />}
            value={profileData.contact.email}
            className="w-full md:w-[45%]"
          />

          <FooterLink
            icon={<IoLogoWhatsapp />}
            value={profileData.contact.phone}
            className="w-full md:w-[45%]"
          />
          {/* </div> */}

          {/* <div className="flex gap-3"> */}
          <FooterLink
            icon={<FaLinkedin />}
            value={profileData.contact.linkedin}
            className="w-full md:w-[45%]"
          />

          <FooterLink
            icon={<FaGithub />}
            value={profileData.contact.github}
            className="w-full md:w-[45%]"
          />
        </div>
      </section>

      <MyText className="p-2 ps-5 bg-black text-white text-center" size="sm">
        &copy; 2025 by Fakhri Rossi &nbsp; | &nbsp; All Rights Reserved
      </MyText>
    </div>
  );
}
