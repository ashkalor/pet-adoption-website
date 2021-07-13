import Button from "../UI/Button/Button";
import "./AdoptCard.css";

const Card = ({ image, name, gender, age, breed }) => {
  return (
    <div className="card mb-10">
      <div className="outerImage">
        <img
          className="image"
          src={image}
          alt="pet"
          width="150rem"
          height="150rem"
        />
      </div>
      <div className="details">
        <p
          style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "15%" }}
        >
          {name}
        </p>
        <p className="line">
          <strong>GENDER: </strong>
          {gender}
        </p>
        <p className="line">
          <strong>AGE: </strong>
          {age}
        </p>
        <p className="line">
          <strong>BREED: </strong>
          {breed}
        </p>

        <Button className="">MORE INFO</Button>
      </div>
    </div>
  );
};
export default Card;
