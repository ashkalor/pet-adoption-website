import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import eventImg from "../../assets/img/home/events-panel.jpg";
import EventItem from "./EventItem";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { EventData } from "./EventData";

const EventPanel = (props) => {
  const [paneOne, setPaneOne] = useState(0);
  const [paneTwo, setPaneTwo] = useState(1);
  const length = 2;
  const prevEvent = () => {
    setPaneOne((prevPane) => (prevPane === length ? 0 : prevPane + 1));
    setPaneTwo((prevPane) => (prevPane === length ? 0 : prevPane + 1));
  };

  const nextEvent = () => {
    setPaneTwo((prevPane) => (prevPane === 0 ? length : prevPane - 1));
    setPaneOne((prevPane) => (prevPane === 0 ? length : prevPane - 1));
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
          style={{ borderWidth: "12px" }}
        />
      </div>
      <div className="relative flex flex-row   items-center justify-start row-span-1 col-span-2">
        <GrFormPrevious
          className="absolute select-none cursor-pointer"
          style={{ top: "50%", left: "-1.4rem" }}
          size="2rem"
          onClick={prevEvent}
        />
        <GrFormNext
          className="absolute select-none cursor-pointer"
          style={{ top: "50%", right: "41rem" }}
          size="2rem"
          onClick={nextEvent}
        />
        {EventData.map((slide, index) => {
          return (
            <div
              className={index === paneOne || index === paneTwo ? "" : ""}
              key={index}
            >
              {index === paneOne && (
                <EventItem
                  eventCardImg={slide.img}
                  eventTitle={slide.title}
                  eventDate={slide.date}
                  eventLocation={slide.location}
                />
              )}
              {index === paneTwo && (
                <EventItem
                  eventCardImg={slide.img}
                  eventTitle={slide.title}
                  eventDate={slide.date}
                  eventLocation={slide.location}
                />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default EventPanel;
