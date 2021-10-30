import { FunctionComponent } from "react";

import { NewsDetails } from "../../../typings/API";
import styles from "./NewsPreviewCard.module.scss";

interface NewsPreviewCardProps {
  details: NewsDetails;
}

const NewsPreviewCard: FunctionComponent<NewsPreviewCardProps> = ({
  details,
}: NewsPreviewCardProps) => {
  return (
    <div className={styles.newsPreviewCard}>
      <div className={styles.newsPreviewImage}>
        <img src={details.image.thumbnail.contentUrl} alt={details.name} />
      </div>
      <div className={styles.newsContent}>
        <span className={styles.newsDate}>
          {new Date(details.datePublished).toLocaleDateString()}
        </span>
        <span className={styles.newsTitle}>{details.name}</span>
        <div className={styles.newsProvider}>
          <div className={styles.newsProviderThumbnail}>
            <img
              src={details.provider[0].image.thumbnail.contentUrl}
              alt={details.provider[0].name}
            />
          </div>
          <span>{details.provider[0].name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsPreviewCard;
