import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Shelter from "./pages/Shelter";
import Donate from "./pages/Donate";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/adopt" exact>
          <Adopt />
        </Route>
        <Route path="/shelter" exact>
          <Shelter />
        </Route>
        <Route path="/donate" exact>
          <Donate />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/donate/search-by-district" exact>
          <Shelter />
        </Route>
        <Route path="/donate/search-by-pin" exact>
          <Shelter />
        </Route>
        <Route path="/donate/search-by-name" exact>
          <Shelter />
        </Route>
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
