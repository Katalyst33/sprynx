import React from "react";
import ReactDom from "react-dom";
import Debug from "./DebugDataComponent";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import DropDown from "./DropDown";
import { Link, NavLink } from "react-router-dom";

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

  function handleDelete(props: any) {}

  return (
    <div className="my-40 ">
      {/* <Debug data={packageInfo} /> */}
      <div className="group bg-blue-500 py-8 px-7 w-[320px] shadow-sm shadow-slate-900 rounded-2xl">
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
        </div>

        <div className="text-left space-y-2">
          <h1 className="text-white">
            <i className="fa-regular fa-timer"></i>: {packageInfo.duration}
          </h1>
          <h1 className="text-white">
            Regular Car{" "}
            <span className="text-xl"> {packageInfo.regularCar}</span>
          </h1>{" "}
          <h1 className="text-white">
            Large Car<span className="text-xl">{packageInfo.largeCar}</span>
          </h1>
          <div className="mt-8 flex items-center gap-x-2 py-2">
            <i className="fa-regular fa-circle-exclamation text-yellow-500"></i>
            <p className="text-xs text-white">{packageInfo.logistics}</p>
          </div>
          <div className="text-center my-4 ">
            <NavLink
              to="/booking"
              className="bg-slate-100 text-blue-600 px-14 group-hover:px-20 py-2 shadow-md  transition-all duration-200"
            >
              I Want This
            </NavLink>
          </div>
          <button
            onClick={handleDelete}
            className="bg-slate-100 text-blue-600 px-14 hover:text-blue-900 py-2 shadow-md  transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
