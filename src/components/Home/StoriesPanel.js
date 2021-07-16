import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import storiesImg from "../../assets/img/home/stories-panel.jpg";
import { StoriesData } from "./StoriesData";
import Carousel from "../UI/Carousel/Carousel";
import StoriesItem from "./StoriesItem";

const StoriesPanel = (props) => {
  return (
    <Card className={`${props.className} grid grid-cols-2 grid-rows-2 p-14 `}>
      <div className="row-span-2 col-span-1">
        <div className="font-bold text-3xl py-3 border-b-2 border-gray-300 inline-block">
          Adoption Stories
        </div>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi
          veniam, cumque repudiandae voluptatem quae temporibus voluptas
          maiores, dolore odio esse dolorem hic, numquam nemo. Sequi ducimus
          quasi dolore nulla?
        </p>
        <Button className="font-medium">SEE ALL STORIES</Button>
        <Carousel
          className=""
          length={StoriesData.length}
          show={1}
          infiniteLoop={false}
          style={{ width: "36rem" }}
        >
          {StoriesData.map((item) => {
            return (
              <StoriesItem
                className="px-3"
                storyAuthor={item.storyAuthor}
                storyQuote={item.storyQuote}
                storyImg={item.storyImg}
                storyName={item.storyName}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="col-span-1 row-span-3 mt-3 mx-14 ">
        <img
          src={storiesImg}
          alt="Events"
          className="border-8 ml-14 border-gray-300 -rotate-6 transition-transform duration-500 transform-gpu hover:rotate-0"
          style={{ "border-width": "12px" }}
        />
      </div>
    </Card>
  );
};
export default StoriesPanel;
