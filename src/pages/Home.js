import Hero from "../components/UI/Hero/Hero";
import hero from "../../src/assets/img/home/hero.png";
import heroCover from "../assets/img/home/hero-cover.jpg";
import HomeAbout from "../components/Home/HomeAbout";

const Home = () => {
  return (
    <>
      <Hero
        title="WELCOME TO PAWS"
        hero={hero}
        cover={heroCover}
        content="The one stop for all your pet adoption needs"
      />
      <HomeAbout />
    </>
  );
};
export default Home;
