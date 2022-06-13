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
}

interface PackageCardTypings {
  packageInfo: PackageInfoTypings;
}

export default function PackageCardComponent(props: PackageCardTypings) {
  const packageInfo = props.packageInfo;

  return (
    <>
      <Debug data={packageInfo} />
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
                  <div className="text-sm">{service.description}</div>
                </div>
              )
            )}
          </ul>
        </div>

        <div>
          <h1 className="text-white">Duration: 8 to 9 hours</h1>
          <h1 className="text-white">Regular Car N43,830</h1>{" "}
          <h1 className="text-white">Large Car N43,830</h1>
          <p>
            F{" "}
            <span className="text-xs text-white">
              5,500 extra Logistics fee to Mainland.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
