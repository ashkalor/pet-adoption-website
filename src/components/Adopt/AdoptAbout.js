import "./AdoptAbout.css";
import bullet from "../../assets/img/adopt/bullet.png";
const AdoptAbout = () => {
  return (
    <div>
      <div className="text-5xl font-semibold">Adopt a pet</div>
      <div className="adoptAbout">
        <div className="adopt">
          <p className="info">
            Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem
            ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus ac sodales
            felis tiam non metus. lorem ipsum dolor sit amet, consectetur
            adipisicing elit
          </p>
        </div>
        <div className="list">
          <div>
            <img src={bullet} alt="bullet" width="20px" />
            <span className="listItem">
              All pets are neutered and vaccinated
            </span>
          </div>
          <div>
            <img src={bullet} alt="bullet" width="20px" />
            <span className="listItem">
              All pets are examined by a vet and treated as required
            </span>
          </div>
          <div>
            <img src={bullet} alt="bullet" width="20px" />
            <span className="listItem">
              We help to match you with a pet that meets your needs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptAbout;
