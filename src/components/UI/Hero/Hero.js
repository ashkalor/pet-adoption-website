import { Link } from "react-router-dom";

const Hero = (props) => {
  const { title, hero, cover, content, page } = props;
  console.log(cover);
  return (
    <div className="relative -mt-20 h-screen w-full flex justify-center">
      {cover && (
        <div
          className="scroll w-screen h-screen bg-center bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        ></div>
      )}
      {cover ? (
        <div className="absolute h-screen w-full bg-black bg-opacity-75 "></div>
      ) : (
        <div className="absolute h-auto w-full bg-black bg-opacity-75 "></div>
      )}
      {title && (
        <div
          className="absolute mx-auto font-semibold text-white text-7xl"
          style={{ bottom: "70vh" }}
        >
          {title}
        </div>
      )}
      {content && (
        <div
          className="absolute font-medium text-white text-xl"
          style={{ bottom: "65vh" }}
        >
          {content}
        </div>
      )}
      {hero && (
        <div className="absolute mx-auto " style={{ bottom: "0" }}>
          <img
            src={hero}
            alt="Hero"
            className="object-center object-cover"
            style={{ height: "50vh", width: "70vw" }}
          />
        </div>
      )}

      {page && (
        <div className="absolute">
          <Link to="/home">Home</Link>
          <div>{">"}</div>
          <div>{props.page}</div>
        </div>
      )}
    </div>
  );
};
export default Hero;
