import "./App.scss";

import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Main from "./layouts/main";
import Page from "./layouts/page";
import CryptoDetails from "./pages/crypto-details";
import Cryptocurrencies from "./pages/cryptocurrencies";
import Exchanges from "./pages/exchanges";
import Home from "./pages/home";
import News from "./pages/news";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Page>
        <Nav />
        <Switch>
          <Main>
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={News} />
            <Route path="/exchanges" exact component={Exchanges} />
            <Route
              path="/cryptocurrencies"
              exact
              component={Cryptocurrencies}
            />
            <Route path="/crypto/:slug" component={CryptoDetails} />
          </Main>
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
