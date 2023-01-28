import { Project } from "../interface";
import Shop from "./../public/static/images/projects/Shop.png";
import Social from "./../public/static/images/projects/Social.png";
import Stream from "./../public/static/images/projects/Stream.png";
import FoodCheck from "./../public/static/images/projects/foodcheck.webp";

export const projects: Project[] = [
  {
    name: "muvus",
    heading: "Artsy Shop",
    paragraphs: [],
    tech: ["nextjs", "scss", "tailwindcss", "firebase", "API"],
    source: "https://github.com/Olaleye-Blessing/muvus",
    live: "https://artsyshop.netlify.app/",
    image: Shop,
  },

  {
    name: "covid",
    heading: "Artsy Social",
    paragraphs: [],
    tech: ["nextjs", "scss", "tailwindcss", "API"],
    source: "https://github.com/bhtibrewal/artsy-social",
    live: "https://artsysocial.netlify.app/",
    image: Social,
  },

  {
    name: "crypto",
    heading: "Artsy Stream",
    paragraphs: [],
    tech: ["nextjs", "typescript", "scss", "tailwindcss", "API"],
    source: "https://github.com/bhtibrewal/artsy-stream",
    live: "https://artsystream.netlify.app/videos",
    image: Stream,
  },

  {
    name: "foodcheck",
    heading: "FoodCheck - Get your recipe for your favorite dish.",
    paragraphs: [],
    tech: ["reactjs", "styled-components", "API", "Testing"],
    source: "https://github.com/Olaleye-Blessing/foodcheck",
    live: "https://foodcheck.vercel.app/",
    image: FoodCheck,
  },
];
