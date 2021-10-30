import { FunctionComponent } from "react";

import Loader from "../../../components/loader";
import { Col, Row } from "../../../layouts";
import { useFetchCoinsQuery } from "../../../services/coinRankingApi";
import { CoinDetails } from "../../../typings/API";
import CryptoCurrencyCard from "../crypto-currency-card";
import styles from "./CryptoCurrenciesGrid.module.scss";

interface CryptoCurrenciesGridProps {
  display?: number;
}

const CryptoCurrenciesGrid: FunctionComponent<CryptoCurrenciesGridProps> = ({
  display,
}) => {
  const { data: { data: { coins = [] } = {} } = {}, isFetching } =
    useFetchCoinsQuery();

  const coinsList: CoinDetails[] = display ? coins.slice(0, display) : coins;
  return (
    <Row className={styles.cryptoCurrenciesGrid}>
      {isFetching
        ? Loader
        : coinsList.map((coinDetails: CoinDetails) => (
            <Col
              className={styles.cryptoCurrencyCol}
              span={{ xs: 12, md: 6, lg: 4 }}
              key={coinDetails.uuid}
            >
              <CryptoCurrencyCard details={coinDetails} />
            </Col>
          ))}
    </Row>
  );
};

CryptoCurrenciesGrid.defaultProps = {
  display: undefined,
};

export default CryptoCurrenciesGrid;
