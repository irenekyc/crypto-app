import { FunctionComponent } from "react";

import { NewsDetails } from "../../../typings/API";

interface NewsPreviewCardProps {
  details: NewsDetails;
}

const NewsPreviewCard: FunctionComponent<NewsPreviewCardProps> = ({
  details,
}: NewsPreviewCardProps) => {
  return <div>{details.name}</div>;
};

export default NewsPreviewCard;
