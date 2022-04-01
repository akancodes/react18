import React, { useState, } from 'react'
import ProductList from '../components/ProductList';
import { filterProducts } from '../data';

const DeferredValue = () => {
  const [text, setText] = useState("");
  const filteredProducts = filterProducts(text);

  return (
    <div className="mx-auto flex items-center flex-col mt-4" style={{ width: "30rem" }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ProductList products={filteredProducts} />
    </div>
  );

}

export default DeferredValue