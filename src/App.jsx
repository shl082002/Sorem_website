import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import bg from "./assets/background.jpg";
import Overview from "./main/Overview";
import Contact from "./main/Contact";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="h-[92vh] text-white overflow-scroll">
          {/* img-container */}
          <div
            className="h-[80vh] flex justify-center items-center flex-col"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="text-[4rem] font-bold">Sorem</span>
            <span className="mb-[8rem] py-[1rem] text-[1.5rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              molestias.
            </span>
          </div>
          {/* Overview */}
          <Overview />
          {/* contact */}
          <Contact />
          {/* footer */}
          <Footer />
        </div>
        {/* Sorem Website */}
      </div>
    </>
  );
}

export default App;
