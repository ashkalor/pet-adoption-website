import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const EventPanel = () => {
  return (
    <Card className="grid grid-cols-2 grid-rows-5 ">
      <div className=" row-span-2">
        <div>Adoption Events</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi
          veniam, cumque repudiandae voluptatem quae temporibus voluptas
          maiores, dolore odio esse dolorem hic, numquam nemo. Sequi ducimus
          quasi dolore nulla?
        </p>
        <Button>See all Events</Button>
      </div>
    </Card>
  );
};
export default EventPanel;
