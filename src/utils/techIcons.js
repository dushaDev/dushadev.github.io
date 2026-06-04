import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap, FaFlask } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiFirebase, SiFlask, SiArduino, SiCplusplus } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";
import { TbBrandAdobeIllustrator, TbBrandAdobeXd, TbBrandAdobePhotoshop } from "react-icons/tb";

const mapping = {
  "flutter": FaFlutter,
  "react": FaReact,
  "firebase": SiFirebase,
  "gemini vision": RiGeminiFill,
  "figma": FaFigma,
  "python": FaPython,
  "flask": SiFlask,
  "chatgpt": AiFillOpenAI,
  "github": FaGithub,
  "java": FaJava,
  "php": FaPhp,
  "sql": FaDatabase,
  "android": FaAndroid,
  "bootstrap": FaBootstrap,
  "adobe xd": TbBrandAdobeXd,
  "photoshop": TbBrandAdobePhotoshop,
  "adobe illustrator": TbBrandAdobeIllustrator,
  "arduino": SiArduino,
  "c++": SiCplusplus,
};

export const getTechIcon = (name) => {
  return mapping[name.trim().toLowerCase()] || null;
};
