import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "As a full-stack developer at Ultrasoft Systems, I leverage an extensive technology stack to build robust web applications. My expertise spans front-end and back-end development, utilizing technologies such as HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. Additionally, I employ tools like Redux, RTK Query, Framer Motion, i18next for translations, and UI frameworks including MUI, Bootstrap, Tailwind, and SASS. My work also involves sophisticated form handling using React Hook Form.",

    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
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
] as const;
