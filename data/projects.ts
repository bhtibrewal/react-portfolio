import { Project } from "../interface";
import Shop from "./../public/static/images/projects/Shop.png";
import Social from "./../public/static/images/projects/Social.png";
import Stream from "./../public/static/images/projects/Stream.png";
import FoodCheck from "./../public/static/images/projects/foodcheck.webp";
import { SiCss3, SiReact, SiRedux, SiJest , SiTypescript, SiExpress} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export const projects: Project[] = [
  {
    name: "Artsy Shop",
    heading: "Artsy Shop",
    paragraphs: [
      "Artsy Shop is an e-commerce platform built for selling paintings with Reactjs and Razorpay payment intergration.",
    ],
    tech: [
      { name: "ReactJs", Icon: SiReact },
      { name: "CSS", Icon: SiCss3 },
      { name: "Jest", Icon: SiJest },
      { name: "Typescript", Icon: SiTypescript },
    ],
    source: "https://github.com/Olaleye-Blessing/muvus",
    live: "https://artsyshop.netlify.app/",
    image: Shop,
  },

  {
    name: "Artsy Social",
    heading: "Artsy Social",
    paragraphs: ["Artsy Social is an social media platform."],
    tech: [
      { name: "Redux", Icon: SiRedux },
      { name: "ReactJs", Icon: SiReact },
      { name: "CSS", Icon: SiCss3 },
      { name: "Figma", Icon: FiFigma },
      { name: "ExpressJs", Icon: SiExpress },
    ],
    source: "https://github.com/bhtibrewal/artsy-social",
    live: "https://artsysocial.netlify.app/",
    image: Social,
  },
  {
    name: "Artsy Stream",
    heading: "Artsy Stream",
    paragraphs: ["A video streaming platform built with React"],
    tech: [{ name: "ReactJs", Icon: SiReact }],
    source: "https://github.com/bhtibrewal/artsy-stream",
    live: "https://artsystream.netlify.app/videos",
    image: Stream,
  },
];
