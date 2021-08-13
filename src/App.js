import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Shelter from "./pages/Shelter";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/layout/ScrollToTop";
import Simba from "./pages/Simba";
import firebase from "./firebase";
import { AdoptData } from "./components/Adopt/AdoptData";

function App() {
  const db = firebase.firestore();
  AdoptData.forEach((item) => {
    db.collection("Adopt")
      .add(item)
      .then((docref) => {
        console.log("Document successfully written!", docref.id);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });

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
          <Donate />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/adopt/simba">
          <Simba />
        </Route>
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
