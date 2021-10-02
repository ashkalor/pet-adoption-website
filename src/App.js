import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Shelter from "./pages/Shelter";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/layout/ScrollToTop";
import Pet from "./components/Adopt/Pet";

const App = () => {
  return (
    <>
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
          <Route path="/adopt/:petName">
            <ScrollToTop>
              <Pet />
            </ScrollToTop>
          </Route>
          <Route path="*" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
