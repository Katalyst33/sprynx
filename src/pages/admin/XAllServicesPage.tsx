import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingData from "../../components/LoadingData";
import { $axios } from "../../service/http";
import { PackageServiceTypings } from "../../typings/AllTypings";

const XAllServicesPage = () => {
  const [allServiceData, setAllServicesData] = useState<
    PackageServiceTypings[]
  >([]);
  const [isPending, setIsPending] = useState(true);

  function fetchAllServices() {
    $axios
      .post("/services/all-services")
      .then((response: any) => {
        console.log(response);
        setAllServicesData(response.allServices);
        setIsPending(false);
        // handle success
      })
      .catch((error) => {
        setIsPending(false);
        // handle error
        console.log("i did not fetch anything", error);
      });
  }

  useEffect(() => {
    fetchAllServices();
  }, []);
  return (
    <>
      <div className="lg:flex justify-between items-center w-4/6 mx-auto mb-4">
        <h1 className="text-xl font-semibold text-gray-900">
          All Services Page ({allServiceData.length})
        </h1>
        <div className="">
          <Link
            to="/manager/create-service"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            Create Service
          </Link>
        </div>
      </div>

      <div className="w-4/6 mx-auto">
        {isPending ? (
          <div>
            <LoadingData />
          </div>
        ) : (
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {allServiceData.map((service, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-blue-700 text-md font-semibold">
                              {service.title}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">
                              {service.description}
                            </div>
                          </td>

                          <td className=" px-4 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div className="flex gap-x-4">
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Link
                                  to={`/manager/edit-service/${service.id}`}
                                >
                                  Edit
                                </Link>
                              </a>
                              <button className="text-red-600 hover:text-red-700">
                                <i className="fa-solid fa-trash-xmark"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default XAllServicesPage;
