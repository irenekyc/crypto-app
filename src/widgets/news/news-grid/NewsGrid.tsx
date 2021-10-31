import { FunctionComponent, useEffect, useState } from "react";

import {
  NEWS_GRID_VARIANT_GENERAL,
  NEWS_GRID_VARIANT_PREVIEW_ONLY,
  NEWS_POST_PER_PAGE_FIRST,
  NEWS_POST_PER_PAGE_OTHERS,
} from "../../../constants/news";
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

interface NewsGridProps {
  news: NewsDetails[];
  page?: number;
  variant:
    | typeof NEWS_GRID_VARIANT_PREVIEW_ONLY
    | typeof NEWS_GRID_VARIANT_GENERAL;
}
const NewsGrid: FunctionComponent<NewsGridProps> = ({
  page,
  news,
  variant,
}: NewsGridProps) => {
  const [newsList, setNewsList] = useState<NewsDetails[]>(news);
  useEffect(() => {
    if (variant === NEWS_GRID_VARIANT_PREVIEW_ONLY) {
      setNewsList(news.slice(0, 5));
    } else if (page && page === 1) {
      setNewsList(news.slice(0, NEWS_POST_PER_PAGE_FIRST));
    } else if (page && page > 1) {
      const postOffset =
        NEWS_POST_PER_PAGE_FIRST + (page - 2) * NEWS_POST_PER_PAGE_OTHERS;
      setNewsList(news.slice(postOffset));
    }
  }, [variant, news, page]);

  if (variant === NEWS_GRID_VARIANT_PREVIEW_ONLY) {
    return (
      <Row>
        {newsList
          ?.slice(0, 5)
          .map((newsDetails: NewsDetails, index: number) => (
            <Col
              span={newsPreviewCardSpan[index]}
              key={newsDetails.datePublished}
            >
              <NewsPreviewCard details={newsDetails} />
            </Col>
          ))}
      </Row>
    );
  }

  const renderGrid = (pageNumber: number | undefined) => {
    if (!pageNumber) return <> </>;
    if (pageNumber === 1) {
      return (
        <>
          {newsList
            ?.slice(0, 5)
            .map((newsDetails: NewsDetails, index: number) => (
              <Col
                span={newsPreviewCardSpan[index]}
                key={newsDetails.datePublished}
              >
                <NewsPreviewCard details={newsDetails} />
              </Col>
            ))}
          {newsList?.slice(5).map((newsDetails: NewsDetails) => (
            <Col span={{ xs: 6, md: 4 }} key={newsDetails.datePublished}>
              <NewsPreviewCard details={newsDetails} />
            </Col>
          ))}
        </>
      );
    }
    if (pageNumber > 1) {
      return newsList?.map((newsDetails: NewsDetails) => (
        <Col span={{ xs: 6, md: 4 }} key={newsDetails.datePublished}>
          <NewsPreviewCard details={newsDetails} />
        </Col>
      ));
    }
    return <></>;
  };
  return <Row>{renderGrid(page)}</Row>;
};

NewsGrid.defaultProps = {
  page: 1,
};

export default NewsGrid;
