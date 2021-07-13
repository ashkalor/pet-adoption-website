import "./Filter.css";
//import "tachyons";
import Button from "../UI/Button/Button";
const Filter = () => {
  return (
    <div className="filter flex flex-row p-2 items-center justify-center bg-gray-200">
      <Button className="w-48 mx-5 mb-6 font-semibold">ALL</Button>
      <Button className="w-48 mx-5 mb-6 font-semibold">DOGS</Button>
      <Button className="w-48  mx-5 mb-6 font-semibold">CATS</Button>
    </div>
  );
};

export default Filter;
