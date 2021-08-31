import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Shelter from "./pages/Shelter";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/layout/ScrollToTop";
import Simba from "./components/Adopt/Simba";
import River from "./components/Adopt/River";
import Mylo from "./components/Adopt/Mylo";
import Leelo from "./components/Adopt/Leelo";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <ScrollToTop>
            <Home />
          </ScrollToTop>
        </Route>
        <Route path="/adopt" exact>
          <ScrollToTop>
            <Adopt />
          </ScrollToTop>
        </Route>
        <Route path="/shelter" exact>
          <Redirect to="/shelter/:searchType" exact />
        </Route>
        <Route path="/shelter/:searchType" exact>
          <Shelter />
        </Route>
        <Route path="/donate" exact>
          <ScrollToTop>
            <Donate />
          </ScrollToTop>
        </Route>
        <Route path="/contact" exact>
          <ScrollToTop>
            <Contact />
          </ScrollToTop>
        </Route>
        <Route path="/adopt/simba">
          <ScrollToTop>
            <Simba />
          </ScrollToTop>
        </Route>
        <Route path="/adopt/river">
          <ScrollToTop>
            <River />
          </ScrollToTop>
        </Route>
        <Route path="/adopt/mylo">
          <ScrollToTop>
            <Mylo />
          </ScrollToTop>
        </Route>
        <Route path="/adopt/leelo">
          <ScrollToTop>
            <Leelo />
          </ScrollToTop>
        </Route>
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
