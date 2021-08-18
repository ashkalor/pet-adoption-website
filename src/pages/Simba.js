import { Link } from "react-router-dom";
import heroAdopt from "../assets/img/adopt/hero-adopt.jpg";
import HeroSmall from "../components/UI/Hero/HeroSmall";
import "../components/Adopt/pet.css";
import "../components/Adopt/AdoptCard.css";
import firebase from "../firebase";
import Button from "../components/UI/Button/Button";
import { useState, useEffect } from "react";

const Simba = () => {
  const [adoptData, setAdoptData] = useState([]);

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
      <HeroSmall title="Adoption" heroImg={heroAdopt} page="Adopt" />
      {/*meet me*/}
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
          .filter((item) => item.name === "Simba")
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

        {/*about me*/}
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

export default Simba;
