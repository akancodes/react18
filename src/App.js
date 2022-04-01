import "./output.css";
import "./App.css";
import { Routes, Route, } from "react-router-dom";

import React from 'react';
import Unique from "./screens/Unique";
import Transition from "./screens/Transition";
import DeferredValue from "./screens/DeferredValue";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="unique" element={<Unique />} />
      <Route path="transition" element={<Transition />} />
      <Route path="deferredvalue" element={<DeferredValue />} />
    </Routes>
  );
}

export default App;
