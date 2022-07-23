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
  return (
    <>
      <h1>All Services Page</h1>

      <div>
        {isPending ? (
          <div>
            <LoadingData />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className=" lg:w-[500px]">
              <div className="flex justify-end ">
                <Link to="/manager/create-service" className="bg-blue-500">
                  Create Service
                </Link>
              </div>

              <div>
                {allServiceData.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between bg-gray-200 my-2"
                    >
                      <div>
                        <div>{service.title}</div>
                        <div>{service.description}</div>
                      </div>
                      <div className="flex gap-x-4">
                        <Link to={`/manager/edit-service/${service.id}`}>
                          Edit
                        </Link>
                        <button>Delete</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default XAllServicesPage;
