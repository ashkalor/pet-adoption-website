import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/UI/Card/Card";
import { CharityList } from "../components/donate/CharityList";
import Button from "../components/UI/Button/Button";

const Donate = () => {
  return (
    <>
      <HeroSmall title="Donate" heroImg={contactCover} />
      <div>
        <Card className="p-12">
          <div className="text-4xl font-semibold ">Pet Charity Links</div>
          <div>
            {CharityList.map((item) => {
              return (
                <div className="flex items-center">
                  <div className="overflow-hidden h-36 w-36 ">
                    <img
                      src={item.logo}
                      alt="Charity Logo"
                      className=" object-cover object-top h-36 w-36 rounded-full"
                    />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.url}</p>
                    <Button>Donate</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Donate;
