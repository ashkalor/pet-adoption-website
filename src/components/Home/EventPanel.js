import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import eventImg from "../../assets/img/home/events-panel.jpg";
import eventCard1 from "../../assets/img/home/eventcard1.jpg";
import eventCard2 from "../../assets/img/home/eventcard2.jpg";
import eventCard3 from "../../assets/img/home/eventcard3.jpg";
import EventItem from "./EventItem";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

const EventPanel = (props) => {
  const { current, setCurrent } = useState(0);
  const length = 3;

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
      <div className="relative flex flex-row row-span-1 col-span-2">
        <GrFormPrevious size="2rem" />
        <GrFormNext size="2rem" />
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
      </div>
    </Card>
  );
};
export default EventPanel;
