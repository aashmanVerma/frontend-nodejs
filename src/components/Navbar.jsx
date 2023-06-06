import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Telegram from "../assets/telegram.png";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [color, setColor] = useState("light");
  const mode = useSelector((state) => state.toggle.mode);

  useEffect(() => {
    if (mode == "light") {
      setColor("light");
    } else {
      setColor("dark");
    }
  }, [mode]);

  return (
    <div className="w-[90%] mx-auto mb-4 flex items-center flex-col md:flex-row md:justify-between">
      <div className="img">
        <Link to="/">
        <img src={Logo} alt="" className="w-[18rem] sm:w-[14rem]" />        
        </Link>
      </div>
      <div className="flex space-x-3 my-2">
        <div className={`px-[0.40rem] py-1 rounded-lg ${color}`}>
          <i className={`${color}`}>INR</i>
        </div>
        <div className={`px-[0.40rem] py-1 rounded-lg ${color}`}>
          <i className={`${color}`}>USDT</i>
        </div>
        <div className={`px-[0.40rem] py-1 rounded-lg ${color}`}>
          <i className={`${color}`}>BUY USDT</i>
        </div>
      </div>
      <div className="my-2 flex flex-col items-center md:flex md:flex-row gap-x-2 ">
        <div className="bgcolor flex gap-x-2 justify-center px-1 py-2 rounded-lg">
          <img src={Telegram} alt="" className="w-6" />
          <Link to={"/tel"} className="text-white">Connect Telegram</Link>
        </div>
        <div className="mt-2 inline-block my-auto">
          <Toggle />
        </div>
      </div>
    </div>
  );
}
