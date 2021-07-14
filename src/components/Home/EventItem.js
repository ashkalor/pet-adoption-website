import Button from "../UI/Button/Button";
import { MdLocationOn } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";

const EventItem = (props) => {
  const { className, eventCardImg, eventTitle, eventDate, eventLocation } =
    props;

  return (
    <div
      className={`${className} inline-flex mx-3 flex-col items-center rounded-lg bg-gray-200`}
      style={{ width: "16rem" }}
    >
      <div className="w-64 h-40 mb-3 rounded-t-lg overflow-hidden">
        <img
          className="w-64 h-40 rounded-t-lg mb-3 object-cover transition-transform duration-700 transform-gpu hover:scale-110"
          src={eventCardImg}
          alt="event"
        />
      </div>
      <div className="mb-2 text-lg">{eventTitle}</div>
      <div className="flex items-center ">
        <AiFillCalendar size="1.3rem" />
        <span className="ml-2 text-gray-500">{eventDate} </span>
      </div>
      <div className="flex items-center">
        <MdLocationOn size="1.3rem" />
        <span className="ml-2 text-gray-500">{eventLocation}</span>
      </div>
      <Button className="mb-3">More Info</Button>
    </div>
  );
};
export default EventItem;
