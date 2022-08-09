import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingData from "../../components/LoadingData";
import { $axios } from "../../service/http";
import { PackageServiceTypings } from "../../typings/AllTypings";
import {IoIosAddCircleOutline} from "react-icons/io"

const CreatePackage = () => {
  const [allServiceData, setAllServicesData] = useState<
    PackageServiceTypings[]
  >([]);
  const [isPending, setIsPending] = useState(true);

  const [formData, setFormData] = React.useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    regularCar: "",
    duration: "",
    largeCar: "",
    logistics: "",
    services: [],
  });

  const [theArray, setTheArray] = useState(formData.services);

  function AddServices(service: any, e:any) {
    console.log(service);
    e.preventDefault()
    
    // setFormData({
    //   ...formData,
    //   services: [...formData.service],
    // });
  }

  function handleChange(event: any) {
    var { name, value } = event.target;
    setFormData(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  function addNewPackage(e: any) {
    e.preventDefault();
    $axios
      .post("/packages", formData)
      .then(() => {
        console.log("a new package was created");
      })
      .catch((error) => {
        console.log("package was not created", error);
      });
  }
  function fetchAllServices() {
    $axios
      .get("/services")
      .then((response: any) => {
        console.log(response);
        setAllServicesData(response);
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

  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-3xl lg:text-4xl mb-10">
        Create a package
      </h1>
      <section className="flex justify-center">
        <main>
          <form>
            <main className="w-96 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
                  Title:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Package title"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Description:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Package description"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  RegularCar:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pricing for regular cars"
                    name="regularCar"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Duration:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Package duration"
                    name="duration"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Large Car:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pricing for large cars"
                    name="largeCar"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Logistics:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Logistics cost"
                    name="logistics"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </main>

            <section className="">
            <div className="mt-10">
              {isPending ? (
                <div>
                  <LoadingData />
                </div>
              ) : (
                <div className="">
                  <div className="">
                    {JSON.stringify(formData)}
                    <div>
                      {allServiceData.map((service, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between text-left bg-gray-200 rounded-md my-2 px-4 py-2"
                          >
                            <div className="flex gap-3 items-center">
                              <input type="checkbox" 
                              checked={isChecked} 
                              onChange={(e) => AddServices(service, e)}/>
                              <div>
                                <div className="font-medium">{service.title}</div>
                                <div className="text-gray-700">{service.description}</div>
                              </div>
                            </div>
                            <div className="flex gap-x-4">
                              <button onClick={(e) => AddServices(service, e)}>
                                <IoIosAddCircleOutline className="text-2xl" />
                              </button>
                            </div>
                            
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

            <button
              className="pointer transition mb-10 ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-3"
              onClick={addNewPackage}
            >
              Create Package
            </button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default CreatePackage;
