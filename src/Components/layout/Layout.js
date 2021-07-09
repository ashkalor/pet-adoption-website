import { classes } from "istanbul-lib-coverage";
import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      {/* <Footer/> */}
    </Fragment>
  );
};

export default Layout;
