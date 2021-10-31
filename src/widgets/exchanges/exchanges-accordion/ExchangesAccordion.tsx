import { FunctionComponent, MouseEvent, useState } from "react";

import Accordion from "../../../components/accordion";
import { NO_SELECT } from "../../../constants/accordion";
import { EXCHANGE_HEADER_VARIANT_TABLE_HEADER } from "../../../constants/exchanges";
import convertNumbers from "../../../helpers/convertNumbers";
import { ExchangeDetails } from "../../../typings/API";
import ExchangesCollapse from "../exchanges-collapse";
import ExchangesHeader from "../exchanges-header";

interface ExchangesAccordionProps {
  list: ExchangeDetails[];
}

const ExchangesAccordion: FunctionComponent<ExchangesAccordionProps> = ({
  list,
}: ExchangesAccordionProps) => {
  const [select, setSelect] = useState<string>(NO_SELECT);
  const selectHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const selectKey = e.currentTarget.id;

    if (selectKey && selectKey === select) {
      setSelect(NO_SELECT);
    } else if (selectKey && selectKey !== select) {
      setSelect(selectKey);
    }
  };

  return (
    <>
      <ExchangesHeader
        name="Crypto currencies"
        volumn="24h volumn"
        market="Markets"
        url={undefined}
        variant={EXCHANGE_HEADER_VARIANT_TABLE_HEADER}
      />
      {list.map((exchangeDetails: ExchangeDetails) => (
        <Accordion
          key={exchangeDetails.uuid}
          Header={
            <ExchangesHeader
              name={exchangeDetails.name}
              icon={exchangeDetails.iconUrl}
              volumn={convertNumbers(exchangeDetails.volume)}
              market={exchangeDetails.numberOfMarkets.toString()}
              url={exchangeDetails.websiteUrl}
            />
          }
          Collapse={
            <ExchangesCollapse description={exchangeDetails.description} />
          }
          activeKey={exchangeDetails.uuid}
          selectHandler={selectHandler}
          active={select === exchangeDetails.uuid}
        />
      ))}
    </>
  );
};
export default ExchangesAccordion;
