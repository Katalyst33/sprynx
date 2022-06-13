import React from "react";
import ReactDom from "react-dom";
import Debug from "./DebugDataComponent";

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

  return (
    <>
      {/* <Debug data={packageInfo} /> */}
      <div className="bg-blue-400 p-4 rounded-2xl">
        <h1 className="text-white">{packageInfo.title}</h1>
        <p className="text-white">{packageInfo.description}</p>

        <div>
          <ul>
            {packageInfo.services.map(
              (service: PackageServiceTypings, index: number) => (
                <div key={index}>
                  <li className="package-item">
                    <div>{service.title}</div>
                    <div className="flex  bg-red-500 border rounded-full w-4 h-4">
                      <span className="text-sm">V</span>
                    </div>
                  </li>
                  <div className="text-sm hidden">{service.description}</div>
                </div>
              )
            )}
          </ul>
        </div>

        <div>
          <h1 className="text-white">Duration: {packageInfo.duration}</h1>
          <h1 className="text-white">Regular Car {packageInfo.regularCar}</h1>{" "}
          <h1 className="text-white">Large Car {packageInfo.largeCar}</h1>
          <p>
            F{" "}
            <span className="text-xs text-white">
              {packageInfo.logistics}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
