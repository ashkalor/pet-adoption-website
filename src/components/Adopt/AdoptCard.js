import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { FaSyringe } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { GiHeartPlus, GiJumpingDog } from "react-icons/gi";

const AdoptCard = ({
  image,
  name,
  gender,
  age,
  breed,
  vaccinated,
  petFriendly,
  specialNeeds,
  childFriendly,
}) => {
  return (
    <div className="col-span-1 rounded-3xl h-84 py-6 bg-gray-200">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-around w-full">
          <div className="w-36 h-36 rounded-full overflow-hidden bg-black">
            <img
              src={image}
              alt=""
              className="w-36 h-36 object-center object-cover rounded-full"
            />
          </div>
          <div className="w-2/5 flex flex-col items-start justify-start gap-3">
            <p className="font-semibold text-3xl">{name}</p>
            <div className="w-full">
              <p className="border-b-2 border-dotted flex py-1 border-black">
                <span className="font-medium">Gender: </span>
                <span className="ml-2">{gender}</span>
              </p>

              <p className="border-b-2 border-dotted flex py-1 border-black">
                <span className="font-medium ">Age: </span>
                <span className="ml-2">{age}</span>
              </p>

              <p className="border-b-2 border-dotted flex py-1 border-black">
                <span className="font-medium ">Breed: </span>
                <span className="ml-2">{breed}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-16 w-4/5 px-4 flex bg-white py-2 rounded-xl gap-6 mt-4 -mb-4 justify-center items-center">
          {vaccinated && (
            <div className="flex flex-col items-center gap-1">
              <FaSyringe size="1.3rem" />
              <p className="text-xs">Vaccinated</p>
            </div>
          )}
          {petFriendly && (
            <div className="flex flex-col items-center gap-1">
              <GiJumpingDog size="1.3rem" />
              <p className="text-xs">Pet friendly</p>
            </div>
          )}
          {specialNeeds && (
            <div className="flex flex-col items-center gap-1">
              <GiHeartPlus size="1.3rem" />
              <p className="text-xs">Special needs</p>
            </div>
          )}
          {childFriendly && (
            <div className="flex flex-col items-center gap-1">
              <MdChildFriendly size="1.3rem" />
              <p className="text-xs">Child friendly</p>
            </div>
          )}
        </div>
        <Link to={`/adopt/${name}`}>
          <Button className=" w-44">More Info</Button>
        </Link>
      </div>
    </div>
  );
};
export default AdoptCard;
