import "../css/App.css";
import Debug from "../components/DebugDataComponent";
import PackageCardComponent from "../components/PackageCardComponent";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { allPackages } from "../db/packages.json";

function PackagesPage() {
  const packageData = {
    title: "Golden",
    description: "popular package",
    regularCar: "N43,830",
    duration: "8 - 9 hours",
    largeCar: "N53,830",
    logistics: "5,500 extra Logistics fee to Mainland.",
    services: [
      {
        title: "exterior",
        description: "Exterior cleaning",
      },
      {
        title: "interior",
        description: "Interior cleaning",
      },
      {
        title: "Engine",
        description: "Engine cleaning",
      },
    ],
    link: "golden-package",
  };

  function slideright() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft + 320;
  }

  function sliderleft() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft - 320;
  }
  return (
    <>
      <div className="container mx-auto mb-40">
        {/* <h1 className="text-center text-xl lg:text-3xl py-20 bg-yellow-500 md:bg-green-500 lg:bg-red-500">
          Choose a package below and get it <br /> delivered at your door step
        </h1> */}
        <h1 className="text-center text-xl lg:text-3xl py-20 ">
          <i className="fa-solid fa-user"></i>
          Choose a package below and get it <br /> delivered at your door step
        </h1>
        {/* grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 w-5/6 mx-auto */}
        <section className="flex items-center">
          <button>
            <i
              onClick={sliderleft}
              className="fa-regular fa-angle-left text-5xl lg:block hidden text-blue-400 opacity-40  font-extrabold   cursor-pointer hover:opacity-100"
            ></i>
          </button>
          <div
            id="slider"
            className="mx-5 flex gap-8 w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {allPackages.map((packageInfo, index) => (
              <PackageCardComponent key={index} packageInfo={packageInfo} />
            ))}
          </div>
          <button>
            <i
              onClick={slideright}
              className="fa-regular fa-angle-right text-5xl lg:block hidden text-blue-400 opacity-40  font-extrabold   cursor-pointer hover:opacity-100"
            ></i>
          </button>
        </section>
      </div>
    </>
  );
}

export default PackagesPage;
