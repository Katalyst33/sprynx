import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { $axios } from "../../service/http";
import { PackageInfoTypings } from "../../typings/AllTypings";


const XAllPackagesPage = () => {
  const [allPackagesData, setAllPackagesData] = useState<PackageInfoTypings[]>(
    []
  );
  const [isPending, setIsPending] = useState(true);

  function fetchAllPackages() {
    $axios
      .get("/packages")
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

  function handleDelete(id: string) {
    // prompt user to confirm deletion
    if (window.confirm("Are you sure you want to delete this package?")) {
      $axios
        .delete(`/packages/${id}`)
        .then((response: any) => {
          fetchAllPackages();
          // handle success
        })
        .catch((error) => {
          // handle error
          return error;
        });
    }

    // if confirmed, delete the package
  }

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return (
    <div className="">
      <div className="px-6 lg:px-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              All Packages ({allPackagesData.length})
            </h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the Packages </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link
              to="/manager/create-package"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              Create Package
            </Link>
          </div>
        </div>
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
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Logistics
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
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
                    {allPackagesData.map((packageInfo, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-blue-700 text-md font-semibold">
                            {packageInfo.title}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {packageInfo.description}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            Regular: {packageInfo.regularCar}
                            <br></br>
                            Large: {packageInfo.largeCar}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {packageInfo.logistics}
                            <br />
                            <p className="text-xs"> {packageInfo.logistics}</p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>

                        <td className=" px-4 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex gap-x-4">
                            <a
                              href="#"
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </a>
                            <button
                              onClick={() => handleDelete(packageInfo.id)}
                              className="text-red-600 hover:text-red-700"
                            >
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
      </div>
    </div>
  );
};

export default XAllPackagesPage;
