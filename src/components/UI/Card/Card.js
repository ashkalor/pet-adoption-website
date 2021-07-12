import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
<<<<<<< HEAD
     <div className={`${classes.card} ${props.className}`}>{props.children}</div>
=======
    <div
      className={`${classes.card} ${props.className}`}
      style={{ margin: "3rem 10%" }}
    >
      {props.children}
    </div>
>>>>>>> e9095b6e0d1da08c2fe67664f402f9febd61ba5d
  );
};

export default Card;
