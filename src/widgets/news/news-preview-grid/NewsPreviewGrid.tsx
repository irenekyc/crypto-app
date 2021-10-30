import { FunctionComponent } from "react";

import { Col, Row } from "../../../layouts";
import { NewsDetails } from "../../../typings/API";
import { ResponsiveColSpan } from "../../../typings/Responsive";
import NewsPreviewCard from "../news-preview-card";

const newsPreviewCardSpan: ResponsiveColSpan[] = [
  {
    xs: 12,
    md: 6,
    lg: 6,
  },
  {
    xs: 6,
  },
  {
    xs: 6,
    md: 4,
  },
  {
    xs: 6,
    md: 4,
  },
  {
    xs: 6,
    md: 4,
  },
];

interface NewsPreviewGridProps {
  news: NewsDetails[];
}
const NewsPreviewGrid: FunctionComponent<NewsPreviewGridProps> = ({
  news,
}: NewsPreviewGridProps) => {
  return (
    <Row>
      {news.map((newsDetails: NewsDetails, index: number) => (
        <Col span={newsPreviewCardSpan[index]} key={newsDetails.datePublished}>
          <NewsPreviewCard details={newsDetails} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsPreviewGrid;
