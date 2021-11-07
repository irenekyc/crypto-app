/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import { FunctionComponent, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../../components/button";
import {
  BackIcon,
  NumberHashIcon,
  StatisticChart,
  TrophyIcon,
} from "../../components/icons";
import Loader from "../../components/loader";
import PriceChart from "../../components/price-chart";
import StatisticTable from "../../components/statisitc-table";
import {
  TIME_PERIOD_3H,
  TIME_PERIOD_24H,
  TIME_PERIOD_DEFAULT,
  TIME_PERIOD_OPTIONS,
} from "../../constants/time-period";
import convertNumbers from "../../helpers/convertNumbers";
import getSocialIcon from "../../helpers/getSocialIcons";
import { Col, Row } from "../../layouts";
import {
  useFetchCoinDetailsQuery,
  useFetchCoinPriceHistoryQuery,
} from "../../services/coinRankingApi";
import {
  CoinDetailsResponse,
  CoinPriceHistory,
  ExternalLinkType,
  PriceHistory,
} from "../../typings/API";
import { TimePeriodType } from "../../typings/TimePeriod";
import styles from "./CryptoDetails.module.scss";

type ParamsType = {
  [string: string]: string;
};

const CryptoDetails: FunctionComponent = () => {
  const [timePeriod, setTimePeriod] =
    useState<TimePeriodType>(TIME_PERIOD_DEFAULT);
  const params: ParamsType = useParams();
  const [, id] = params.slug.split("&");
  const { data: coinDetails = {}, isFetching } = useFetchCoinDetailsQuery(id);
  const { data: coinHistory = {}, isFetching: isCoinHistoryFetching } =
    useFetchCoinPriceHistoryQuery({
      id,
      timePeriod,
    });

  const { data: { coin } = {} } = coinDetails as CoinDetailsResponse;
  const { data: { history } = {} } = coinHistory as CoinPriceHistory;

  return (
    <div>
      {isFetching && Loader}
      {coin && (
        <>
          <h1 className={styles.pageTitle}>
            <Link to="/cryptocurrencies"> {BackIcon}</Link>
            {coin.name}
          </h1>
          <h2>Price Statistic</h2>
          <div className={styles.timePeriodButtonRow}>
            {TIME_PERIOD_OPTIONS.map((periodOption: string) => (
              <Button
                label={periodOption.toUpperCase()}
                key={periodOption}
                active={timePeriod === periodOption}
                onClick={() => setTimePeriod(periodOption as TimePeriodType)}
              />
            ))}
          </div>
          {isCoinHistoryFetching
            ? Loader
            : history && (
                <PriceChart
                  yAxesLabel="Price In USD"
                  value={history.map((historyEntry: PriceHistory) =>
                    parseFloat(historyEntry.price)
                  )}
                  labels={history.map((historyEntry: PriceHistory) => {
                    if (
                      timePeriod === TIME_PERIOD_24H ||
                      timePeriod === TIME_PERIOD_3H
                    ) {
                      return new Date(
                        historyEntry.timestamp
                      ).toLocaleTimeString();
                    }
                    return new Date(
                      historyEntry.timestamp
                    ).toLocaleDateString();
                  })}
                />
              )}

          <Row>
            <Col span={{ xs: 12, md: 6 }}>
              <StatisticTable
                title={`${coin.name} Value Statistic`}
                data={[
                  {
                    withIcon: true,
                    icon: StatisticChart,
                    label: "Price in USD",
                    value: convertNumbers(parseFloat(coin.price)),
                  },
                  {
                    withIcon: true,
                    icon: NumberHashIcon,
                    label: "Rank",
                    value: coin.rank,
                  },
                  {
                    withIcon: true,
                    icon: StatisticChart,
                    label: "24h volume",
                    value: convertNumbers(coin.volume, { long: true }),
                  },
                  {
                    withIcon: true,
                    icon: StatisticChart,
                    label: "Market Cap",
                    value: convertNumbers(coin.marketCap, { long: true }),
                  },
                  {
                    withIcon: true,
                    icon: TrophyIcon,
                    label: "All Time Highest",
                    value: `${convertNumbers(
                      parseFloat(coin.allTimeHigh.price)
                    )} (${new Date(
                      coin.allTimeHigh.timestamp
                    ).toLocaleDateString()})`,
                  },
                ]}
              />
            </Col>
            <Col span={{ xs: 12, md: 6 }}>
              <StatisticTable
                title="Other Statistics"
                data={[
                  {
                    label: "Number of Market",
                    value: coin.numberOfMarkets,
                  },
                  {
                    label: "Number of Exchanges",
                    value: coin.numberOfExchanges,
                  },
                  { label: "Approved Supply", value: "Yes" },
                  { label: "Total Supply", value: coin.totalSupply },
                  {
                    label: "Circulating Supply",
                    value: coin.circulatingSupply,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row className={styles.descriptionRow}>
            <Col span={{ xs: 12, lg: 6 }}>
              <h2>What is {coin.name}</h2>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: coin.description }}
              />
            </Col>
            <Col span={{ xs: 12, lg: 6 }}>
              <StatisticTable
                title="Social"
                data={coin.socials.map((social: ExternalLinkType) => {
                  return {
                    label: social.type,
                    value: (
                      <a href={social.url} target="_blank" rel="noreferrer">
                        {getSocialIcon(social.type)}
                      </a>
                    ),
                  };
                })}
              />
            </Col>
          </Row>
          <Row>
            <h2>Other References</h2>
            <div className={styles.otherLinksDiv}>
              {coin.links.map((link: ExternalLinkType) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Row>
        </>
      )}
    </div>
  );
};

export default CryptoDetails;
