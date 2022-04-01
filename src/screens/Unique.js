
import React, { useId } from "react";

const Unique = () => {
  const id = useId()
  return <div className="flex items-center justify-center h-screen text-xl text-white"><span className="text-red-500 font-semibold">id=&nbsp;</span>{id}</div>;
};

export default Unique;
