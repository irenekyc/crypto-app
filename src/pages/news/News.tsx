import { FunctionComponent, useState } from "react";

import Loader from "../../components/loader";
import { NEWS_GRID_VARIANT_GENERAL } from "../../constants/news";
import { useFetchAllNewsQuery } from "../../services/coinsNewsApi";
import NewsGrid from "../../widgets/news/news-grid";

const News: FunctionComponent = () => {
  const [page] = useState<number>(1);
  const { data: { value: news = [] } = {}, isFetching } =
    useFetchAllNewsQuery();

  return (
    <>
      <h1>Latest Crypto Currencies News</h1>
      {isFetching ? (
        Loader
      ) : (
        <>
          <NewsGrid
            news={news}
            page={page}
            variant={NEWS_GRID_VARIANT_GENERAL}
          />
          <div>Infinite scroll will be developed soon</div>
        </>
      )}
    </>
  );
};

export default News;
