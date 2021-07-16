import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      {props.children}
    </div>
  );
};

export default Card;
