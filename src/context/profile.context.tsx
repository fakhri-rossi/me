import { createContext, ReactNode, useState } from "react";
import { UserProfile } from "../data";

export interface SkillType {
  name: string;
  imageUrl: string;
}

export interface FeatureType {
  name: string;
  imageUrl: string;
  description: string;
}

export interface ProjectType {
  name: string;
  imageUrl: string;
  description: string;
  techs: SkillType[];
  features: FeatureType[];
  jobDesk: string;
}

export interface CertificateType {
  name: string;
  issuer: string;
  issuerUrl: string;
  imageUrl: string;
  validationUrl: string;
  type: "Assessment" | "Course Completion" | "Accomplishment";
}

export interface ProfileType {
  fullName: string;
  imageUrl: string;
  job: string;
  summary: string;
  contact: {
    github: string;
    email: string;
    linkedin: string;
    phone: string;
  };
  skills: {
    category: string;
    skills: SkillType[];
  }[];
  projects: ProjectType[];
  certificates: CertificateType[];
}

const profileContextDefault: ProfileType = {
  fullName: "",
  imageUrl: "",
  job: "",
  summary: "",
  contact: {
    email: "",
    github: "",
    linkedin: "",
    phone: "",
  },
  skills: [],
  projects: [],
  certificates: [],
};

export interface ProfileContextType {
  profileData: ProfileType;
  setProfileData: (v: ProfileType) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  profileData: profileContextDefault,
  setProfileData: () => {},
});

export function ProfileContextProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileType>(UserProfile);

  return (
    <ProfileContext.Provider
      value={{ profileData: profile, setProfileData: setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
