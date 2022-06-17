import React from "react";
import ReactDom from "react-dom";
import Debug from "./DebugDataComponent";
import { Disclosure } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";

interface PackageServiceTypings {
  title: string;
  description: string;
}

interface PackageInfoTypings {
  title: string;
  description: string;
  services: PackageServiceTypings[];
  link: string;
  duration: string;
  regularCar: string;
  largeCar: string;
  logistics: string;
}

interface PackageCardTypings {
  packageInfo: PackageInfoTypings;
}

export default function PackageCardComponent(props: PackageCardTypings) {
  const packageInfo = props.packageInfo;
  const [drop, setDrop] = React.useState(false);
  function toggleDrop(index: any){
    setDrop(!drop)
  }

  return (
    <div className="">
      {/* <Debug data={packageInfo} /> */}
      <div className="bg-blue-400 py-4 px-7 w-[320px] shadow-sm shadow-slate-900 rounded-2xl">
        <h1 className="text-white text-3xl mt-2 mb-3">{packageInfo.title}</h1>
        <p className="text-white">{packageInfo.description}</p>

        {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Interior</span>
                <BsChevronDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white border-b-1">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Exterior</span>
                <BsChevronDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white border-b-1">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}

        <div>
          <ul>
            {packageInfo.services.map(
              (service: PackageServiceTypings, index: number) => (
                <div key={index}>
                  <li className="package-item bg-white" onClick={toggleDrop}>
                    <div className="px-1 py-1">{service.title}</div>
                    <div className="flex whole bg-red-500 border rounded-full w-4 h-4">
                      <span className="text-sm">V</span>
                    </div>
                  </li>
                  {drop && <div className="text-sm">{service.description}</div>}
                </div>
              )
            )}
          </ul>
        </div>

        <div>
          <h1 className="text-white">Duration: {packageInfo.duration}</h1>
          <h1 className="text-white">Regular Car {packageInfo.regularCar}</h1>{" "}
          <h1 className="text-white">Large Car {packageInfo.largeCar}</h1>
          <p className="mt-8">
            F{" "}
            <span className="text-xs text-white">
              {packageInfo.logistics}
            </span>
          </p>
          <div className="text-center my-4 "><button className="bg-slate-100 text-blue-600 rounded-xl px-20 py-2 shadow-md shadow-slate-900">I Want This</button></div>
        </div>
      </div>
    </div>
  );
}
