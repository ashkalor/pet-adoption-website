import Hero from "../components/UI/Hero/Hero";
import heroAdopt from "../assets/img/adopt/hero-adopt.jpg";
import AdoptAbout from "../components/Adopt/AdoptAbout";
import Card from "../components/Adopt/Card";
import Filter from "../components/Adopt/Filter";
import "../components/Adopt/Card.css";
import simba from "../assets/img/adopt/simba.jpg";
import leelo from "../assets/img/adopt/leelo.png";
import mylo from "../assets/img/adopt/mylo.jpg";
import river from "../assets/img/adopt/river.JPG";

const Adopt = () => {
    return(
        <>
        <Hero 
            title="Adoption"
            cover={heroAdopt}
            page="Adopt"
        />
        <AdoptAbout />
        <Filter />
        <div className="allCards">
            {/* <div className="cardRpw"> */}
                <Card image={simba} name="SIMBA" gender="Male" age="10 months" breed="Shih Tzu" />
                <Card image={leelo} name="LEELO" gender="Male" age="7 years" breed="Mixed" />
            {/* </div> */}
            {/* <div className="cardRow"> */}
                <Card image={mylo} name="MYLO" gender="Female" age="6 months" breed="Mixed" />
                <Card image={river} name="RIVER" gender="Male" age="1 year" breed="Labrador" />
            {/* </div> */}
        </div>
        </>
    );
}

export default Adopt;