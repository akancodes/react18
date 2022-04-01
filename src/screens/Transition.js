import React, { useTransition, useState } from 'react'
import CardLists from '../CardLists';
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
        <CardLists list={filteredProducts} />
      }
    </div>
  )
}

export default Transition