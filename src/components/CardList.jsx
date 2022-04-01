const CardList = ({ list }) => {
  return (
    <ul className="m-8 w-full list-none p-0">
      {list?.map((item, index) => {
        return (
          <li
            key={index}
            className="my-4 rounded-xl bg-red-500 p-4 text-center text-white"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
