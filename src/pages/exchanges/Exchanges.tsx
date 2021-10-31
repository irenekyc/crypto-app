import { FunctionComponent } from "react";

import Loader from "../../components/loader";
import { useFetchExchangesQuery } from "../../services/coinRankingApi";
import ExchangesAccordion from "../../widgets/exchanges/exchanges-accordion";

const Exchange: FunctionComponent = () => {
  const { data: { data: { exchanges = [] } = {} } = {}, isFetching } =
    useFetchExchangesQuery();

  return (
    <>
      <h1>All Exchanges</h1>
      {isFetching ? Loader : <ExchangesAccordion list={exchanges} />}
    </>
  );
};

export default Exchange;
