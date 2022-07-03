import "../css/App.css";
import Debug from "../components/DebugDataComponent";
import PackageCardComponent from "../components/PackageCardComponent";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import axios from "axios";
import { useEffect, useState } from "react";
import DebugDataComponent from "../components/DebugDataComponent";

function PackagesPage() {
  const [allPackagesData, setAllPackagesData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  function slideright() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft + 320;
  }

  function sliderleft() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft - 320;
  }

  function fetchAllPackages() {
    axios
      .get("http://localhost:5100/packages")
      .then((response) => {
        setAllPackagesData(response.data);
        setIsPending(false);

        // handle success
        console.log("i fetched succesfully  ", response);
      })
      .catch((error) => {
        setIsPending(false);

        // handle error
        console.log("i did not fetch anything", error);
      });
  }

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return (
    <>
      <div className="container mx-auto mb-40">
        {/* {JSON.stringify(allPackagesData)} */}

        {isPending && (
          <div>
            <div className="p-40">
              <i className="fa-solid fa-spinner-third animate-spin  text-5xl mt-20 text-blue-500"></i>
            </div>
          </div>
        )}

        {allPackagesData && (
          <div>
            <h1 className="text-center text-xl lg:text-3xl py-10 ">
              Choose a package below and get it <br /> delivered at your door
              step
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
                {allPackagesData.map((packageInfo, index) => (
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
        )}

        {!allPackagesData.length && (
          <div>
            <h1 className="my-10">Not Packages Yet ...</h1>

            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <i className="fa-solid fa-box-archive px-4"></i>
              Create A Package
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PackagesPage;
