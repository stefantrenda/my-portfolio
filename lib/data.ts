import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import blin from "@/public/blin.png";
import sociopedia from "@/public/sociopedia.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Bachelor's Degree in Computer Systems Networking and Telecommunications",
    location: "International Slavic University",
    description:
      "I earned my Bachelor's degree in Computer Systems Networking and Telecommunications, which provided a strong foundation in computing principles and network communication, complementing my hands-on development skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Front-End Development Academy",
    location: "Skopje, Macedonia",
    description:
      "I attended Brainster Academy, a specialized academy for front-end development, enhancing my skills and preparing for advanced industry challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Skopje, Macedonia",
    description:
      "As a full-stack developer at Ultrasoft Systems, I leverage an extensive technology stack to build robust web applications. My expertise spans front-end and back-end development, utilizing technologies such as HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. Additionally, I employ tools like Redux, RTK Query, Framer Motion, i18next for translations, and UI frameworks including MUI, Bootstrap, Tailwind, and SASS. My work also involves sophisticated form handling using React Hook Form.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Calymland",
    description:
      "Caymland is an automated digital marketing platform. As a front-end developer, I was responsible for creating dynamic and responsive user interfaces using React, Redux, i18next for translations, MUI, Tailwind, and Bootstrap. My role involved integrating front-end components with backend APIs to provide real-time marketing analytics and user interaction data, enhancing the platform's automation capabilities.",

    tags: [
      "React",
      "Redux",
      "i18next",
      "MUI",
      "Tailwind",
      "Bootstrap",
      "React Hook Form",
    ],

    imageUrl: corpcommentImg,
  },
  {
    title: "Noise App",
    description:
      "A versatile application designed to enhance focus and serenity through customizable soundscapes. Users can select from a variety of nature sounds, ambient environments, and relaxation tones, or craft their own unique mixes. Features include a dynamic mix creator, a timer for focus sessions, and options to save and share soundscapes with others.",
    tags: ["React", "Tailwind", "Shadcn UI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Shop Mattresses",
    description:
      "As a front-end developer, I was tasked with the redesign and implementation of the 'Shop Mattresses' website from Figma designs to a live site using React and Tailwind CSS. My role was centered around creating a responsive and visually appealing interface, utilizing Shadcn UI for enhanced UI components.",
    tags: ["React", "Tailwind", "Shadcn UI"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Blin",
    description:
      "As a front-end developer, I crafted the interactive UI for Blin, a luxury watch retail site, using React and Tailwind CSS. This project focused on enhancing user experience with a clean and responsive design.",
    tags: ["React", "Tailwind"],
    imageUrl: blin,
  },
  {
    title: "Sociopedia",
    description:
      "Sociopedia is a social networking application similar to Facebook. It allows users to create profiles, connect with friends, share posts, and engage with the community through comments and reactions. Built using the MERN stack (MongoDB, Express, React, Node.js), the app features real-time chat, user authentication, and a responsive design optimized for both web and mobile devices.",
    tags: ["React", "NodeJS", "ExpressJS", "MongoDB", "MUI"],
    imageUrl: sociopedia,
  }
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "RTK Query",
  "Express",
  "Framer Motion",
  "i18next translations",
  "MUI",
  "Bootstrap",
  "SASS",
  "React Hook Form",
  "SCRUM",
  "Apache ECharts",
] as const;
