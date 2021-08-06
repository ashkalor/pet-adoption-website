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
      <div className="flex flex-col">
        <p className="text-2xl font-medium">{title}</p>
        <a
          href={url}
          className="block"
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          {url}
        </a>
        <a
          className=" bg-purple-700 w-28 py-2 rounded-full text-white text-center mt-6 hover:bg-purple-600"
          href={donateLink}
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          Donate
        </a>
      </div>
    </div>
  );
};

export default CharityItem;
