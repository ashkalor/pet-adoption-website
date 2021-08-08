import classes from "./Carousel.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState, useEffect } from "react";

const Carousel = (props) => {
  const { children, className, show, style, infiniteLoop } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children, infiniteLoop, show]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevCurrentIndex) => prevCurrentIndex - 1);
    }
  };

  return (
    <div className={`${classes.container} ${className}`} style={style}>
      <div className={classes.wrapper}>
        {currentIndex > 0 && (
          <GrFormPrevious size="2rem" className={classes.prev} onClick={prev} />
        )}
        <div className={classes["content-wrapper"]}>
          <div
            className={`${classes.content} ${classes.show - show}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - show && (
          <GrFormNext size="2rem" className={classes.next} onClick={next} />
        )}
      </div>
    </div>
  );
};

export default Carousel;
