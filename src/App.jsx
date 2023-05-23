import { useState } from "react";
import Logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return <div className='app'>
    <Navbar />
    <Showcase />
  </div>;
}

export default App;
