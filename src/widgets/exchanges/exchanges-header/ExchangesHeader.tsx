import classnames from "classnames";
import { FunctionComponent } from "react";

import { CoinIcon, ExternalLinkIcon } from "../../../components/icons";
import {
  EXCHANGE_HEADER_VARIANT_ACCORDION_HEADER,
  EXCHANGE_HEADER_VARIANT_TABLE_HEADER,
} from "../../../constants/exchanges";
import styles from "./ExchangesHeader.module.scss";

interface ExchangesHeaderProps {
  name: string;
  volumn: string;
  market: string;
  icon?: string;
  url?: string;
  variant?:
    | typeof EXCHANGE_HEADER_VARIANT_TABLE_HEADER
    | typeof EXCHANGE_HEADER_VARIANT_ACCORDION_HEADER;
}

const ExchangesHeader: FunctionComponent<ExchangesHeaderProps> = ({
  variant,
  name,
  icon,
  volumn,
  market,
  url,
}: ExchangesHeaderProps) => {
  return (
    <div
      className={classnames(styles.exchangesHeader, {
        [styles.exchangesHeader__tableHeader]:
          variant === EXCHANGE_HEADER_VARIANT_TABLE_HEADER,
      })}
    >
      <div className={styles.exchangesHeaderTitle}>
        {variant !== EXCHANGE_HEADER_VARIANT_TABLE_HEADER && (
          <div className={styles.exchangeHeaderIcon}>
            {icon ? <img src={icon} alt={name} /> : <CoinIcon />}
          </div>
        )}
        <span className={styles.exchangeHeaderName}>{name}</span>
      </div>
      <span className={styles.exchangesHeaderStatistic}>{volumn}</span>
      <span className={styles.exchangesHeaderStatistic}>{market}</span>
      <div className={styles.exchangesHeaderLink}>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            {ExternalLinkIcon}
          </a>
        )}
      </div>
    </div>
  );
};

ExchangesHeader.defaultProps = {
  icon: undefined,
  variant: EXCHANGE_HEADER_VARIANT_ACCORDION_HEADER,
  url: undefined,
};

export default ExchangesHeader;
