import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import eventImg from "../../assets/img/home/events-panel.jpg";
import eventCard1 from "../../assets/img/home/eventcard1.jpg";
import eventCard2 from "../../assets/img/home/eventcard2.jpg";
import eventCard3 from "../../assets/img/home/eventcard3.jpg";
import EventItem from "./EventItem";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const EventPanel = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Card
      className={`${props.className} grid grid-cols-2 grid-rows-2 p-14 my-10 `}
    >
      <div className="row-span-1 col-span-1">
        <div className="font-bold text-3xl py-3 border-b-2 border-gray-300 inline-block">
          Adoption Events
        </div>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi
          veniam, cumque repudiandae voluptatem quae temporibus voluptas
          maiores, dolore odio esse dolorem hic, numquam nemo. Sequi ducimus
          quasi dolore nulla?
        </p>
        <Button className="font-medium">SEE ALL EVENTS</Button>
        <p className="mt-6 font-medium text-xl">Upcoming Events : </p>
      </div>
      <div className="col-span-1 row-span-3 mt-3 mx-14 ">
        <img
          src={eventImg}
          alt="Events"
          className="border-8 ml-14 border-gray-300 -rotate-6 transition-transform duration-500 transform-gpu hover:rotate-0 hover:scale-110  "
          style={{ "border-width": "12px" }}
        />
      </div>
      <div className="flex flex-col row-span-1 col-span-1">
        <Slider {...settings}>
          <EventItem
            eventCardImg={eventCard1}
            eventTitle="NYC Adoption Fair"
            eventDate="2th August at 4pm"
            eventLocation="Washington square park"
          />
          <EventItem
            eventCardImg={eventCard2}
            eventTitle="Bronx Adoption Fair"
            eventDate="5th September at 4pm"
            eventLocation="Bronx park"
          />
          <EventItem
            eventCardImg={eventCard3}
            eventTitle="Jersey Adoption Fair"
            eventDate="6th October at 4pm"
            eventLocation="Jersey park"
          />
        </Slider>
      </div>
    </Card>
  );
};
export default EventPanel;
