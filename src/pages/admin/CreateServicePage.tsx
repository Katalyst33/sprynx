import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { $axios } from "../../service/http";

const CreateServicePage = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
  });

  // Get the userId param from the URL.
  const { serviceId } = useParams();

  // get unique service data

  function fetchService() {
    console.log("fetchService")
    if (serviceId) {
      $axios
        .get(`/services/one-service/${serviceId}`)
        .then((response: any) => {
          console.log(response)
          setFormData({
            title: response.service.title,
            description: response.service.description
          })
          // setFormData(response);
          
          // handle success
        })
        .catch((error) => {
          // handle error
          console.log("i did not fetch anything", error);
        });
    } else {
      setFormData({
        title: "",
        description: "",
      });
    }
  }

  function addNewService(e: any) {
    e.preventDefault();
    $axios
      .post("/services/add-service", formData)
      .then(() => {
        console.log("a new service was created");
      })
      .catch((error) => {
        console.log("services was not created", error);
      });
  }

  function updateService(e: any) {
    e.preventDefault();
    $axios
      .post(`/services/update-service/${serviceId}`, formData)
      .then(() => {
        console.log("a new service was created");
      })
      .catch((error) => {
        console.log("services was not created", error);
      });
  }

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div className="text-center">
      
      <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-3xl lg:text-4xl mb-10">
        {serviceId ? "Edit Service": "Create a Service"}
      </h1>
      <section className="flex justify-center">
        <form>
          <main className="w-96 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Title:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Description:
              </label>
              <div className="mt-1">
                <textarea
                  rows={6}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Service description"
                  name="largeCar"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </main>

          <div className="flex justify-end mt-4">
            {serviceId ?
              <button
                className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-3"
                onClick={updateService}
              >
                Update Service
              </button> :
              <button

                className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-3"
                onClick={addNewService}
              >
                Create Service
              </button>}


          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateServicePage;
