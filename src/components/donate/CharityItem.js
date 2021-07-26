import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const CharityItem = (props) => {
  const { logo, url, title, donateLink } = props;

  return (
    <div className="flex items-center p-8 bg-gray-300 my-16 rounded-xl gap-12">
      <div className="overflow-hidden h-36 w-36 ">
        <img
          src={logo}
          alt="Charity Logo"
          className=" object-cover object-top h-36 w-36 rounded-full"
        />
      </div>
      <div>
        <p className="text-2xl font-medium">{title}</p>
        <a
          href={url}
          className="block"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          {url}
        </a>
        <Link to={donateLink}>
          <Button className="">Donate</Button>
        </Link>
      </div>
    </div>
  );
};

export default CharityItem;
