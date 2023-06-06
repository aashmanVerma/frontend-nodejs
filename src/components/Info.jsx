import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Info() {
  const [data, setData] = useState(null);
  const start=1

  useEffect(() => {
    const info = axios.get("https://nodejs-server-8q35.onrender.com/infodb");
    info.then((d) => {
      console.log(d.data);
      setData(d.data);
    });
  }, []);

  const mode = useSelector((state) => state.toggle.mode);

  return (
    <div className="w-[90%] mx-auto mt-14">
      <div className="">
        <div className="flex justify-between px-2">
          <i className="gcolor text-sm md:text-base lg:text-xl">#</i>
          <i className="gcolor text-sm md:text-base lg:text-xl">Name</i>
          <i className="gcolor text-sm md:text-base lg:text-xl">
            Last Traded Price
          </i>
          <i className="gcolor text-sm md:text-base lg:text-xl">
            Buy / Sell Price
          </i>
          <i className="gcolor text-sm md:text-base lg:text-xl">Volume</i>
          <i className="gcolor text-sm md:text-base lg:text-xl">Base Unit</i>
        </div>
      </div>
      <div className="mt-4">
        <table className="w-[100%]">
        <tbody className="">
        {data &&
          data.map((e,i) => {
            return (
              <tr key={e.id} className={`px-1 py-2 w-[100%] my-10 ${
                mode == "light" ? "infol" : "infod"
              } rounded-md`}>
                <td className="align-middle lg:text-xl">{i+1}</td>
                <td className="align-middle lg:text-xl">{e.name}</td>
                <td className="align-middle lg:text-xl">{e.last.toLocaleString('en-IN')}</td>
                <td className="align-middle lg:text-xl">{e.buy.toLocaleString('en-IN')+"/"+e.sell.toLocaleString('en-IN')}</td>
                <td className="align-middle lg:text-xl">{e.volume.toLocaleString('en-IN')}</td>
                <td className="align-middle lg:text-xl">{e.base_unit}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

{/* <div
                key={e.id}
                className={`my-3 flex rounded-md px-2 py-2 info ${
                  mode == "light" ? "infol" : "infod"
                }`}
              >
                <i className={`text-sm md:text-base lg:text-xl lg:font-medium`}>
                  1
                </i>
                <i className={`text-sm ml-[7.7rem] md:text-base lg:text-xl lg:font-medium`}>
                  {e.name}
                </i>
                <i className={`text-sm ml-[10rem] md:text-base lg:text-xl lg:font-medium`}>
                  {e.last.toLocaleString('en-IN')}
                </i>
                <i className={`text-sm ml-[5rem] md:text-base lg:text-xl lg:font-medium`}>
                  {e.buy.toLocaleString('en-IN')+"/"+e.sell.toLocaleString('en-IN')}
                </i>
                <i className={`text-sm md:text-base lg:text-xl lg:font-medium`}>
                  {e.volume.toLocaleString('en-IN')}
                </i>
                <i className={`text-sm md:text-base lg:text-xl lg:font-medium`}>
                  {e.base_unit}
                </i>
              </div> */}