import React from "react";
import ReactDom from "react-dom";
import Debug from "./DebugDataComponent";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import DropDown from "./DropDown";

import ServiceDropDownComponent from "./ServiceDropDownComponent";
import {
  PackageCardTypings,
  PackageServiceTypings,
} from "../typings/AllTypings";

export default function PackageCardComponent(props: PackageCardTypings) {
  const packageInfo = props.packageInfo;
  const [drop, setDrop] = React.useState(false);
  function toggleDrop(index: any) {
    setDrop(!drop);
  }

  return (
    <div className="">
      {/* <Debug data={packageInfo} /> */}
      <div className="bg-blue-400 py-4 px-7 w-[320px] shadow-sm shadow-slate-900 rounded-2xl">
        <h1 className="text-white text-3xl mt-2 mb-3">{packageInfo.title}</h1>
        <p className="text-white">{packageInfo.description}</p>

        <div>
          <ul>
            {packageInfo.services.map(
              (service: PackageServiceTypings, index: number) => (
                <div key={index}>
                  <ServiceDropDownComponent service={service} />
                </div>
              )
            )}
          </ul>

          {/*   <ul>
            {packageInfo.services.map(
              (service: PackageServiceTypings, index: number) => (
                <div key={index}>
                  <DropDown
                    title={service.title}
                    description={service.description}
                  />
                </div>
              )
            )}
          </ul> */}
        </div>

        <div>
          <h1 className="text-white">Duration: {packageInfo.duration}</h1>
          <h1 className="text-white">
            Regular Car {packageInfo.regularCar}
          </h1>{" "}
          <h1 className="text-white">Large Car {packageInfo.largeCar}</h1>
          <p className="mt-8">
            F{" "}
            <span className="text-xs text-white">{packageInfo.logistics}</span>
          </p>
          <div className="text-center my-4 ">
            <button className="bg-slate-100 text-blue-600 rounded-xl px-20 py-2 shadow-md shadow-slate-900">
              I Want This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
