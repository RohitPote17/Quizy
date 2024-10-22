import React from "react";
import About from "./About";
import Contact from "./Contact";
import ElementPC from "./ElementPC";
// import "./style.css"

function Landing() {
  return (
    <>
      <div className="w-full h-[100vh] bg-zinc-950 p-4 overflow-hidden">
        <div className="navbar  flex items-center justify-between px-4">
          <h2 className="font-extrabold text-white">The Quizy.</h2>
          <div className="btn">
            <button className="bg-green-700 p-3 font-extrabold rounded-md text-white mx-3">
              Login
            </button>
            <button className=" font-extrabold text-white border-2 rounded-md p-2 border-green-700 border-solid">
              Sign Up
            </button>
          </div>
        </div>
        <h1 className="text-[8rem] uppercase leading-none font-extrabold text-white absolute bottom-5">
          The Ultimate 🥇🚀Study📕📖 Battle ⚔️ Arena
        </h1>
      </div>

      <ElementPC/>
      <About/>
      <Contact/>
     

      <footer className="w-full h-24 font-extrabold bg-black text-white flex items-center justify-center">
        <p>&copy; All rights are reserved by Quizy</p>
      </footer>
    </>
  );
}

export default Landing;
