import "./Filter.css";
//import "tachyons";
import Button from "../UI/Button/Button";
const Filter = () => {
    return(
        <div className="filter">
            <Button className="w-48 font-semibold">ALL</Button>
            <Button className="w-48 font-semibold">DOGS</Button>
            <Button className="w-48 font-semibold">CATS</Button>
        </div>
    );
}

export default Filter;