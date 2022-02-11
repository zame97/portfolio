import { RiComputerLine, RiSunLine } from "react-icons/ri";
import { FaHandHolding, FaHandHoldingHeart, FaServer, FaTheaterMasks } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsBook, BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about: "I am currently developing a few websites with <b> HTML</b>, <b>CSS</b> and some frameworks.",
  },
  {
    Icon: BsBook,
    title: "CS Studying",
    about:
      "Many languages, algorithms, math ... I'm still trying to wrap my head around this whole idea of studying <b>Computer Science</b>.",
  },
  {
    Icon: FaTheaterMasks,
    title: "Theatre",
    about:
      "I'm in a theatre company, and sometimes I get the occasion of acting something more complex than a <b>standing tree</b>.",
  },
  {
    Icon: FaHandHoldingHeart,
    title: "Social Volunteer",
    about: "The world is tough place, let's use a little of our time <b>to help</b> less fortunate than us.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Bash",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript, HTML & CSS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Hugo",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "GNU/Linux",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Windows",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Communication",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Acting",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Leadership",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Teamwork",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Creativity",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Adaptability",
    level: "80",
  },
];

export const projects: IProject[] = [
  { 
    name: "covid19alessandria.help",
    description:
      "This website collects useful informations and offers an online help desks service for the province of Alessandria, Italy.",
    image_path: "/images/covidhelp.webp",
    deployed_url: "https://covid19alessandria.help/",
    github_url: "https://github.com/lab121/covid19alessandria.help",
    category: ["developing"],
    key_techs: ["Developing", "Hugo", "Help desk"],
  },
  {
    name: "Mal D'Aria 2021",
    image_path: "/images/maldaria.jpg",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/zame97/maldaria2021-prova",
    category: ["developing"],
    description:
      "A web app which shows air pollution in Alessandria, Italy",
    key_techs: ["Developing", "Air Quality Control"],
  },

  {
    name: "Cooperativa Il Pane E Le Rose",
    image_path: "/images/rose-rosse.jpg",
    deployed_url: "https://ilpaneelerosecoop.org",
    github_url: "https://github.com/zame97/pane-e-le-rose",
    category: ["developing"],
    description:
      "A static website for Cooperativa Il Pane e Le Rose",
    key_techs: [
      "Developing",
      "Hugo",
      "Community",
    ],
  },

  {
    name: "Comunità San Benedetto Al Porto",
    image_path: "/images/cdq-manu-chao.jpg",
    deployed_url: "https://sanbenedetto.org/strutture/casa-di-quartiere-al/",
    //github_url: "!#",
    category: ["volunteering"],
    description:
      "A free meeting, social and activity point for the city of Alessandria.",
    key_techs: ["Volunteering", "Community"],
  },
  {
    name: "Aula Studio Porto Idee",
    image_path: "/images/aula-studio.png",
    deployed_url: "https://instagram.com/aulastudio_portoidee_/",
    //github_url: "!#",
    category: ["volunteering"],
    description:
      "A socio-cultural centre self-managed by the young people who frequent it",
    key_techs: ["Volunteering", "Culture", "Community"],
  },

  {
    name: "Teatro Stregatti",
    image_path: "/images/rinoceronte-stregatti.jpg",
    deployed_url: "https://www.teatrostregatti.it/",
    //github_url: "!#",
    category: ["theatre"],
    description:
      "the theatre company of which I am a member, I love it.",
    key_techs: ["Theatre", "Community"],
  },

  {
    name: "Your Life In Weeks - YLIW",
    image_path: "/images/years.png",
    deployed_url: "!#",
    //github_url: "!#",
    category: ["developing"],
    description:
      "A web app to keep track of your weeks and life goals. Half calendar, half diary. Tic Toc.",
    key_techs: ["Developing", "self care"],
  },
];
