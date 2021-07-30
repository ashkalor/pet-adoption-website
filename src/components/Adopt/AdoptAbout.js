import "./AdoptAbout.css";
import { FaCheckCircle } from "react-icons/fa";
const AdoptAbout = () => {
  return (
    <div>
      <div className="text-5xl font-semibold">Adopt a pet</div>
      <div className="adoptAbout">
        <div className="adopt">
          <p className="">
            Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem
            ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus ac sodales
            felis tiam non metus. lorem ipsum dolor sit amet, consectetur
            adipisicing elit
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-start items-start">
            <FaCheckCircle size="1rem" className="mt-1" />
            <span className="ml-2">All pets are neutered and vaccinated</span>
          </div>
          <div className="flex justify-start items-center">
            <FaCheckCircle size="1rem" />
            <span className="mt-1 ml-2">
              All pets are examined by a vet and treated as required
            </span>
          </div>
          <div className="flex justify-start items-start">
            <FaCheckCircle size="1rem" className="mt-1" />

            <span className="ml-2">
              We help to match you with a pet that meets your needs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptAbout;
