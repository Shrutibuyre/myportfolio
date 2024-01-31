import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail, 
} from "react-icons/io5";
import img1 from "./images/thumb-keepers-app.png";
import img2 from "./images/thumb-simon-says.png";
import img3 from "./images/thumb-netflix.png";
import img4 from "./images/thumb-this-portfolio.png";

export const Experience = [
  {
    id: 1,
    date: "01/2023 - 03/2023",
    iconsSrc: <IoCodeWorking />,
    title: "Web Developer",
    location: "online",
    Company: "Twilearn",
    description:
      "Enthusiastic and detail-oriented web developer with a strong foundation in front-end and back-end technologies, eager to contribute technical expertise and collaborate on innovative projects.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "A Keeper's APP",
    imageSrc: img1,
    techs: "React Js, Material UI",
    github: "https://mykeeper969.netlify.app/",
  },
  {
    id: 2,
    name: "Simon Says ",
    imageSrc: img2,
    techs: "React Js",
    github: "https://github.com/Shrutibuyre/simon-says.git",
  },
  {
    id: 3,
    name: "Netflix Clone",
    imageSrc: img3,
    techs: "HTML, CSS, Javascript",
    github: "https://github.com/Shrutibuyre/netflix-start-Ui.git",
  },

  {
    id: 6,
    name: "This portfolio",
    imageSrc: img4,
    techs: "React.js, tailwind",
    github: "https://github.com/Shrutibuyre/myportfolio.git",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Shrutibuyre",
  },

  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shruti-buyre20/",
  },
  {
    id: 1,
    iconSrc: (
      <IoMail className="text-red-600 text-3xl cursor-pointer" /> 
    ),
    name: "Email",
    link: "shrutibuyre11@gmail.com", 
  },
];
