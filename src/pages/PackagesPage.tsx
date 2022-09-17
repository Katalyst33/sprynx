import "../css/App.css";
import Debug from "../components/DebugDataComponent";
import PackageCardComponent from "../components/PackageCardComponent";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import PackageImg from "../assets/packageimg.jpg"

import { useEffect, useState } from "react";
import DebugDataComponent from "../components/DebugDataComponent";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { $axios } from "../service/http";

import { PackageInfoTypings } from "../typings/AllTypings";

function PackagesPage(props: any) {
  const [allPackagesData, setAllPackagesData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const navigate = useNavigate();

  function slideright() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft + 320;
  }

  function sliderleft() {
    const slid: any = document.getElementById("slider");
    slid.scrollLeft = slid.scrollLeft - 320;
  }

  function fetchAllPackages() {
    $axios
      .post("/all-packages")
      .then((response: any) => {
        console.log(response);
        setAllPackagesData(response);
        setIsPending(false);
        // handle success
      })
      .catch((error) => {
        setIsPending(false);
        // handle error
        console.log("i did not fetch anything", error);
      });
  }

  function deleteCard(id: any) {
    console.log("i got deleted");
  }

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return (
    <>
      <div className="container mx-auto mb-10">
        {/* {JSON.stringify(allPackagesData)} */}
        <div className="lg:flex gap-20 mx-auto w-5/6 lg:py-24 py-16 lg:items-center lg:justify-center">
          <div className=" lg:text-right text-center lg:w-5/12">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
              Car Packages
            </h1>
            <p className="mt-2 text-lg">
            Choose a package below and get it delivered at your doorstep
            </p>
          </div>
          <div className="flex justify-center mt-10"><img src={PackageImg} className="h-72 shadow-lg rounded-3xl"/></div>
        </div>

        {isPending && (
          <div>
            <div className="p-40">
              <i className="fa-solid fa-spinner-third animate-spin  text-5xl mt-20 text-blue-500"></i>
            </div>
          </div>
        )}

        {allPackagesData && (
          <div>
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
                  <PackageCardComponent
                    key={index}
                    packageInfo={packageInfo}
                    deletePackageCard={deleteCard}
                  />
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

        {/* {allPackagesData.length && (
          <div>
            <h1 className="my-10">Not Packages Yet ...</h1>

            <Link to="/create-package">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className="fa-solid fa-box-archive px-4"></i>
                Create A Package
              </button>
            </Link>
          </div>
        )} */}
      </div>
    </>
  );
}

export default PackagesPage;
