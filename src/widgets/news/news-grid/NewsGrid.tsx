import { FunctionComponent } from "react";

import Loader from "../../../components/loader";
import { NEWS_DEFAULT_DISPLAY_PER_GRID } from "../../../constants/news";
import { Col, Row } from "../../../layouts";
import { useFetchNewsQuery } from "../../../services/coinsNewsApi";
import { NewsDetails } from "../../../typings/API";
import NewsPreviewCard from "../news-preview-card";

interface NewsGridProps {
  display?: number;
}
const NewsGrid: FunctionComponent<NewsGridProps> = ({
  display,
}: NewsGridProps) => {
  const postsPerGrid: number = display || NEWS_DEFAULT_DISPLAY_PER_GRID;

  const { data: { value: news = [] } = {}, isFetching } = useFetchNewsQuery({
    count: postsPerGrid,
  });

  return (
    <Row>
      {isFetching
        ? Loader
        : news.map((newsDetails: NewsDetails) => (
            <Col
              span={{ xs: 12, md: 6, lg: 4 }}
              key={newsDetails.datePublished}
            >
              <NewsPreviewCard details={newsDetails} />
            </Col>
          ))}
    </Row>
  );
};

NewsGrid.defaultProps = {
  display: undefined,
};

export default NewsGrid;
