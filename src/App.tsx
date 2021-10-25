import "./App.scss";

import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Main from "./layouts/main";
import Page from "./layouts/page";
import Home from "./pages/home";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Page>
        <Nav />
        <Switch>
          <Main>
            <Route path="/" exact component={Home} />
          </Main>
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
