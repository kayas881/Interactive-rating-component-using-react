import React from "react";
import "./global.css";
import { Rating } from "./components/rating";
const App = () => {
  return (
    <div className=" bg-zinc-900 w-full h-[100vh] flex flex-col justify-center items-center">
      <Rating />
    </div>
  );
};

export default App;
