import React, { useTransition, useState,useId } from 'react'
import { filterProducts, generatorList } from '../data';

const Transition = () => {
  const [isPending, startTransition] = useTransition({ timeoutMs: 5000 });
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div className="mx-auto flex items-center flex-col mt-4" style={{ width: "30rem" }}>
      <input value={filterTerm} onChange={updateFilterHandler} className="bg-white w-full" />
      {isPending ? <div className="text-white">Loading...</div> :
        <CardList list={filteredProducts} />
      }
    </div>
  )
}

const CardList = ({ list }) => {
  return (
    <ul className="m-8 w-full list-none p-0">
      {list?.map((item) => {
        return (
          <li
            key={useId()}
            className="my-4 rounded-xl bg-red-500 p-4 text-center text-white"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};


export default Transition
