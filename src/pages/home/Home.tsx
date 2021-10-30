import { FunctionComponent } from "react";

import Loader from "../../components/loader";
import convertNumbers from "../../helpers/convertNumbers";
import { Col, Row, Statistic } from "../../layouts";
import { useFetchStatsQuery } from "../../services/coinRankingApi";
import { StatsResponse } from "../../typings/API";

const Home: FunctionComponent = () => {
  const { data = {}, isFetching } = useFetchStatsQuery();
  const {
    data: {
      totalCoins = 0,
      total24hVolume = 0,
      totalExchanges = 0,
      totalMarketCap = 0,
      totalMarkets = 0,
    } = {},
  } = data as StatsResponse;

  return (
    <>
      <Row>
        {isFetching ? (
          Loader
        ) : (
          <>
            <Col span={{ xs: 6, md: 4 }}>
              <Statistic label="Total coins" value={totalCoins} />
            </Col>
            <Col span={{ xs: 6, md: 4 }}>
              <Statistic
                label="Last 24h volume"
                value={convertNumbers(total24hVolume, { long: true })}
              />
            </Col>
            <Col span={{ xs: 6, md: 4 }}>
              <Statistic label="Total Exchange" value={totalExchanges} />
            </Col>
            <Col span={{ xs: 6, md: 4 }}>
              <Statistic
                label="Total Market Capacity"
                value={convertNumbers(totalMarketCap, { long: true })}
              />
            </Col>
            <Col span={{ xs: 6, md: 4 }}>
              <Statistic
                label="Total Market"
                value={convertNumbers(totalMarkets, { long: true })}
              />
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default Home;
