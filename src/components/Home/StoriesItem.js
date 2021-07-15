const StoriesItem = (props) => {
  const { storyQuote, storyAuthor, storyImg, className } = props;
  return (
    <div
      className={`${className} flex flex-col gap-5 justify-center rounded-xl items-center mt-10  bg-gray-200`}
    >
      <div className="text-xl font-medium px-20 my-5 text-center">
        {storyQuote}
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <img
          src={storyImg}
          alt="story"
          className="w-36 border-8 border-purple-600 rounded-full"
        />
        <div className="font-bold mb-5">{storyAuthor}</div>
      </div>
    </div>
  );
};

export default StoriesItem;
