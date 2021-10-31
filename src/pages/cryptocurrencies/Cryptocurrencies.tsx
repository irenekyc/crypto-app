import { FunctionComponent } from "react";

import CryptoCurrenciesGrid from "../../widgets/cryptocurrencies/crypto-currencies-grid";

const Cryptocurrencies: FunctionComponent = () => {
  return (
    <>
      <h1>All Crypto currencies</h1>
      <div>Filter / Search / Sort will be developed</div>
      <CryptoCurrenciesGrid display={50} />
    </>
  );
};

export default Cryptocurrencies;
