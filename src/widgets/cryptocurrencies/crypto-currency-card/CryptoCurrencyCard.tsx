import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Change from "../../../components/change";
import { CoinDetails } from "../../../typings/API";
import styles from "./CryptoCurrencyCard.module.scss";

interface CryptoCurrencyCardProps {
  details: CoinDetails;
}

const CryptoCurrencyCard: FunctionComponent<CryptoCurrencyCardProps> = ({
  details,
}: CryptoCurrencyCardProps) => {
  return (
    <Link
      to={`/crypto/${details.slug}&${details.id}`}
      className={styles.cryptoCurrencyCard}
    >
      <div className={styles.cryptoCurrencyCardHeader}>
        <span className={styles.cryptoCurrencyRank}>{details.rank}</span>
        <span className={styles.cryptoCurrencyName}>{details.name}</span>
        <div className={styles.cryptoCurrencyIcon}>
          <img src={details.iconUrl} alt={details.name} />
        </div>
      </div>
      <div className={styles.cryptoCurrencyCardContent}>
        <span className={styles.cryptoCurrencyPrice}>
          <span className={styles.currency}>USD </span>
          <span className={styles.value}>
            {parseFloat(details.price).toFixed(2).toLocaleString()}
          </span>
          <Change
            value={details.change}
            withPercentage
            withSymbol
            className={styles.cryptoCurrencyPriceChange}
          />
        </span>
      </div>
      <div className={styles.cryptoCurrencyCardFooter}>
        <span className={styles.cryptoCurrencyPriceHighest}>
          {parseFloat(details.allTimeHigh.price).toFixed(2)}(
          {new Date(details.allTimeHigh.timestamp).toLocaleDateString()})
        </span>
      </div>
    </Link>
  );
};

export default CryptoCurrencyCard;
