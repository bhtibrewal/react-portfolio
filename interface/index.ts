import { IconType } from "react-icons";

export interface Project {
  id?: number;
  heading: string;
  paragraphs: string[];
  tech: { name: string; Icon: IconType }[];
  source: string;
  live: string;
  youtubeUrl?: string;
  image: StaticImageData;
  name: string;
}

export interface Request<D> {
  loading: boolean;
  data: D;
  error: string | null;
}

// export interface OSRequest extends Request<Contribution[]> {}

export interface Contribution {
  title: string;
  html_url: string;
  state: string;
  state_reason: string;
}

export interface ContributionIcon {
  [key: string]:
    | {
        [key: string]: string;
      }
    | string;
}
