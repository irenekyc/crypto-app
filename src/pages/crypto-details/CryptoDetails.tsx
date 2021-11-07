/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/loader";
import StatisticTable from "../../components/statisitc-table";
import getSocialIcon from "../../helpers/getSocialIcons";
import { Col, Row } from "../../layouts";
import { useFetchCoinDetailsQuery } from "../../services/coinRankingApi";
import { CoinDetailsResponse, ExternalLinkType } from "../../typings/API";
import styles from "./CryptoDetails.module.scss";

type ParamsType = {
  [string: string]: string;
};

const CryptoDetails: FunctionComponent = () => {
  const params: ParamsType = useParams();
  const [, id] = params.slug.split("&");
  const { data: coinDetails = {}, isFetching } = useFetchCoinDetailsQuery(id);
  const { data: { coin } = {} } = coinDetails as CoinDetailsResponse;

  return (
    <div>
      {isFetching && Loader}
      {coin && (
        <>
          <h1>{coin.name}</h1>
          <Row>
            <Col span={{ xs: 12, md: 6 }}>
              <StatisticTable
                title={`${coin.name} Value Statistic`}
                data={[
                  {
                    label: "Price in USD",
                    value: coin?.price,
                  },
                  { label: "Rank", value: coin.rank },
                  { label: "24h volume", value: coin.volume },
                  { label: "Market Cap", value: coin.marketCap },
                  {
                    label: "Highest",
                    value: `${coin.allTimeHigh.price} (${new Date(
                      coin.allTimeHigh.timestamp
                    )})`,
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
