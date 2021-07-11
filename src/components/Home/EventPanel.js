import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import eventImg from "../../assets/img/home/events-panel.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";

const EventPanel = (props) => {
  return (
    <Card
      className={`${props.className} grid grid-cols-2 grid-rows-3 p-14 my-10 `}
    >
      <div className="row-span-2 col-span-1">
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
      <div className="row-span-1 col-span-1">
        <div className="flex-col inline-flex items-center">
          <img src="" alt="" />
          <div className="mb-2 text-lg">NYC Adoption Fair</div>
          <div className="flex items-center">
            <AiFillCalendar size="1.3rem" />
            <span className="ml-2 text-gray-500">2nd August at 4pm </span>
          </div>
          <div className="flex items-center">
            <MdLocationOn size="1.3rem" />
            <span className="ml-2 text-gray-500">Washington square park</span>
          </div>
          <Button>More Info</Button>
        </div>
      </div>
    </Card>
  );
};
export default EventPanel;
