import { FunctionComponent } from "react";

import { CoinDetails } from "../../../typings/API";
import styles from "./CryptoCurrencyCard.module.scss";

interface CryptoCurrencyCardProps {
  details: CoinDetails;
}

const CryptoCurrencyCard: FunctionComponent<CryptoCurrencyCardProps> = ({
  details,
}: CryptoCurrencyCardProps) => {
  return <div className={styles.cryptoCurrencyCard}>{details.name}</div>;
};

export default CryptoCurrencyCard;
