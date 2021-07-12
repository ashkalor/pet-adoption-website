import "./Filter.css";
//import "tachyons";
import Button from "../UI/Button/Button";
const Filter = () => {
    return(
        <div className="filter">
            <Button className="w-48">ALL</Button>
            <Button className="w-48">DOGS</Button>
            <Button className="w-48">CATS</Button>
        </div>
    );
}

export default Filter;