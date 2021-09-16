import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/UI/contactCover.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Card from "../components/UI/Card/Card";
import ContactForm from "../components/contact/ContactForm";
import contentCover from "../assets/img/content-cover.jpg";

const Contact = () => {
  return (
    <>
      <HeroSmall title="Contact" heroImg={contactCover} />
      <div
        className="w-screen z-3 bg-center bg-no-repeat bg-cover bg-fixed py-10"
        style={{
          backgroundImage: `url(${contentCover})`,
        }}
      >
        <Card className="pt-8 mt-10">
          <div style={{ margin: "3rem 10%" }}>
            <div className="font-semibold text-4xl text-black">
              Contact Information
            </div>
            <div
              className="flex flex-row items-center justify-between"
              style={{ margin: "5rem 10%" }}
            >
              <div className="flex flex-col justify-center items-center">
                <div className="inline-block bg-purple-700 p-6 z-10 rounded-full">
                  <FaPhoneAlt color="white" size="3rem" />
                </div>
                <div className="flex flex-col -mt-12 bg-gray-200  rounded-xl p-10 items-center ">
                  <p className="mt-6 font-medium text-xl">Call Us</p>
                  <p className=" font-medium text-xl">+91-1234567890</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="inline-block bg-purple-700 p-6 z-10 rounded-full">
                  <FaEnvelope color="white" size="3rem" />
                </div>
                <div className="flex flex-col -mt-12 bg-gray-200 rounded-xl p-10 items-center ">
                  <p className="mt-6 font-medium text-xl">Write Us</p>
                  <p className=" font-medium text-xl">paws@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "3rem 10%" }}>
            <div className="font-semibold text-4xl text-black">
              Send us a message
            </div>
            <ContactForm />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Contact;
