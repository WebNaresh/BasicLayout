<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
    </Routes>
  );
};
export default App;
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/About' element={<About />} />
    </Routes>
  )
}
export default App
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002
