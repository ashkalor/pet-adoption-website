import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/Adopt/AdoptCard";
const Contact = () => {
  return (
    <>
      <HeroSmall title="Contact" heroImg={contactCover} />
      <Card />
    </>
  );
};

export default Contact;
