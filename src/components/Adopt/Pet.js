import { Link, useParams } from "react-router-dom";
import HeroSmall from "../UI/Hero/HeroSmall";
import "./pet.css";
import "./AdoptCard.css";
import firebase from "../../firebase";
import Button from "../UI/Button/Button";
import { useState, useEffect } from "react";
import contactCover from "../../assets/img/UI/contactCover.jpg";

const Pet = () => {
  const [adoptData, setAdoptData] = useState([]);
  const params = useParams();
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("Adopt")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setAdoptData(documents);
        console.log(documents);
      });
  }, []);
  return (
    <>
      {console.log(params.petName)}
      <HeroSmall title="Adoption" heroImg={contactCover} />
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "3%",
          marginBottom: "3%",
          backgroundColor: "white",
        }}
      >
        {adoptData
          .filter((item) => item.name === params.petName)
          .map((item) => {
            return (
              <div className="meet">
                <div className="outerImage">
                  <img
                    className="image"
                    src={item.image}
                    alt="pet"
                    width="150rem"
                    height="150rem"
                  />
                </div>
                <div className="info">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                      marginBottom: "5%",
                    }}
                  >
                    MEET {item.name}
                  </p>
                  <p className="line">
                    <strong>GENDER: </strong>
                    {item.gender}
                  </p>
                  <p className="line">
                    <strong>AGE: </strong>
                    {item.age}
                  </p>
                  <p className="line">
                    <strong>BREED: </strong>
                    {item.breed}
                  </p>
                </div>
              </div>
            );
          })}

        <div>
          <p
            style={{ fontWeight: "bold", fontSize: "30px", marginLeft: "10%" }}
          >
            ABOUT ME
          </p>
          <p className="info" style={{ marginTop: "2%", marginBottom: "2%" }}>
            Aliquam erat volutpat In id fermentum augue, pellentesque leo.
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
            Etiam rhoncus leo a dolor placeratnec elementum ipsum convall. Etiam
            rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas
            at arcu risus scelerisque laoree. Aliquam erat volutpat In id
            fermentum augue, pellentesque leo. Maecenas at arcu risus. Donec
            commodo sodales ex, scelerisque laoreet nibh hendrerit id. In
            aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor
            placeratnec elementum ipsum convall. Etiam rhoncus leo a dolor
            placerat, nec elementum ipsum convall Maecenas at arcu risus
            scelerisque laoree.
          </p>
        </div>

        <Link to="/contact/">
          <div className="btnAdoptMe">
            <Button>ADOPT ME</Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Pet;
