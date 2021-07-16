import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import eventImg from "../../assets/img/home/events-panel.jpg";
import EventItem from "./EventItem";
import { EventData } from "./EventData";
import Carousel from "../UI/Carousel/Carousel";

const EventPanel = (props) => {
  return (
    <Card
      className={`${props.className} grid grid-cols-2 grid-rows-2 p-14 mb-10 `}
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
          className="border-8 ml-14 border-gray-300 -rotate-6 transition-transform duration-500 transform-gpu hover:rotate-0"
          style={{ borderWidth: "12px" }}
        />
      </div>
      <Carousel
        className="mt-8"
        length={EventData.length}
        show={2}
        infiniteLoop={false}
        style={{ width: "35rem" }}
      >
        {EventData.map((item) => {
          return (
            <EventItem
              className="px-3"
              eventCardImg={item.img}
              eventTitle={item.title}
              eventDate={item.date}
              eventLocation={item.location}
            />
          );
        })}
      </Carousel>
    </Card>
  );
};
export default EventPanel;
