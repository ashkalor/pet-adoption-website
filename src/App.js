import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";
import Home from "./pages/Home";

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
        <Route path="/about" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/adopt" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/shelter" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/donate" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
