import { ProfileType } from "./context/profile.context";

export const UserProfile: ProfileType = {
  fullName: "Fakhri Rossi",
  imageUrl:
    "https://res.cloudinary.com/dint9hqlc/image/upload/v1732971688/kbnqse565m2xc1uek9q3.webp",
  job: "Web Developer",
  summary:
    "Requirement-Oriented Full Stack Web Developer. Able to learn techs directly from the official documentation.",
  contact: {
    email: "rossifakhri@gmail.com",
    github: "github.com/fakhri-rossi",
    linkedin: "linkedin.com/in/fakhri-rossi",
  },
  skills: [
    {
      category: "Programming Language",
      skills: [
        {
          name: "JavaScript",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737030610/ovgq29cegxmz959xrqvl.webp",
        },
        {
          name: "TypeScript",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737030611/odrmavyjo4xrtvnw4cuq.webp",
        },
      ],
    },
    {
      category: "Front End",
      skills: [
        {
          name: "React",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737062036/mzbsicdbmkkcrtncmsvb.webp",
        },
        {
          name: "Vue.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737029759/famhz1dzl1ytxj3n1ffq.webp",
        },
      ],
    },
    {
      category: "Back End",
      skills: [
        {
          name: "Express.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737030610/luqtkk5bn8alx1tcmvnx.webp",
        },
        {
          name: "Node.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737030610/osimmfrmjqfifnhfovds.webp",
        },
        {
          name: "Nest.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737030611/twjcvlyj4tixtlmr9bac.webp",
        },
      ],
    },
    {
      category: "Database",
      skills: [
        {
          name: "MySQL",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737029759/oaskuom7m2h3ytzscdho.webp",
        },
        {
          name: "Mongo DB",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737187896/hykumevji5naytbrye1i.webp",
        },
      ],
    },
  ],
  certificates: [
    {
      name: "JavaScript (Basic)",
      issuer: "HackerRank",
      issuerUrl: "https://www.hackerrank.com",
      type: "Accomplishment",
      validationUrl: "https://www.hackerrank.com/certificates/d4039fdd05e7",
      imageUrl:
        "https://res.cloudinary.com/dint9hqlc/image/upload/v1737154794/acv1m0k7q1vpu00p4mpg.webp",
    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      issuerUrl: "https://www.hackerrank.com",
      type: "Accomplishment",
      validationUrl: "https://www.hackerrank.com/certificates/d52ae51deed0",
      imageUrl:
        "https://res.cloudinary.com/dint9hqlc/image/upload/v1737156088/gigjl3rchg1cstqmsbcp.webp",
    },
    {
      name: "Problem Solving (Basic)",
      issuer: "HackerRank",
      issuerUrl: "https://www.hackerrank.com",
      type: "Accomplishment",
      validationUrl: "https://www.hackerrank.com/certificates/a90cd08e34af",
      imageUrl:
        "https://res.cloudinary.com/dint9hqlc/image/upload/v1737154795/pzoshl2ffvdgld8gziu9.webp",
    },
  ],
  projects: [
    {
      name: "Twitter Clone ABCDEFGH",
      description: "Social Media like Twitter",
      imageUrl:
        "https://res.cloudinary.com/dint9hqlc/image/upload/v1733180209/m7l6xpyr2ayux7gmcdqj.png",
      techs: [
        {
          name: "Nuxt.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737029759/famhz1dzl1ytxj3n1ffq.webp",
        },
        {
          name: "Mongo DB",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737187896/hykumevji5naytbrye1i.webp",
        },
      ],
      jobDesk: "Full Stack",
      features: [
        {
          name: "Post Tweets",
          description: "Tweet text and images",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1733180209/m7l6xpyr2ayux7gmcdqj.png",
        },
        {
          name: "Post Tweets",
          description: "Tweet text and images",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1733180209/m7l6xpyr2ayux7gmcdqj.png",
        },
      ],
    },
    {
      name: "Twitter Clone",
      description: "Social Media like Twitter",
      imageUrl:
        "https://res.cloudinary.com/dint9hqlc/image/upload/v1733180209/m7l6xpyr2ayux7gmcdqj.png",
      techs: [
        {
          name: "Nuxt.Js",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737029759/famhz1dzl1ytxj3n1ffq.webp",
        },
        {
          name: "Mongo DB",
          imageUrl:
            "https://res.cloudinary.com/dint9hqlc/image/upload/v1737187896/hykumevji5naytbrye1i.webp",
        },
      ],
      jobDesk: "Full Stack",
      features: [],
    },
  ],
};
