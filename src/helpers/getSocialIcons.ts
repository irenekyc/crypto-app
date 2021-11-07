import { ReactNode } from "react";

import { ExternalLinkIcon } from "../components/icons";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  MediumIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../components/icons/socials";
import {
  DISCORD,
  FACEBOOK,
  GITHUB,
  MEDIUM,
  REDDIT,
  TELEGRAM,
  TWITTER,
  YOUTUBE,
} from "../constants/socials";

const getSocialIcon = (type: string): ReactNode => {
  switch (type.toUpperCase()) {
    case DISCORD:
      return DiscordIcon;
    case YOUTUBE:
      return YoutubeIcon;
    case FACEBOOK:
      return FacebookIcon;
    case MEDIUM:
      return MediumIcon;
    case TWITTER:
      return TwitterIcon;
    case GITHUB:
      return GithubIcon;
    case REDDIT:
      return RedditIcon;
    case TELEGRAM:
      return TelegramIcon;
    default:
      return ExternalLinkIcon;
  }
};

export default getSocialIcon;
