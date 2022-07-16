import axios from "axios";
import React from "react";

const CreatePackage = () => {
  var [formData, setFormData] = React.useState([
    {
      id: Math.floor(Math.random() * 1000),
      title: "",
      description: "",
      regularCar: "",
      duration: "",
      largeCar: "",
      logistics: "",
      services: [
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
      ],
    },
  ]);

  function handleChange(event: any) {
    var { name, value } = event.target;
    setFormData(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  function addNewPackage(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:5100/packages", formData)
      .then(() => {
        console.log("a new package was created");
      })
      .catch((error) => {
        console.log("package was not created", error);
      });
  }

  return (
    <div className="mt-36">
      <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-3xl lg:text-4xl mb-10">
        Create a package
      </h1>
      <section className="flex justify-center">
        <form>
          <main className="w-96 flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
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

          <button
            className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-3"
            onClick={addNewPackage}
          >
            Create Package
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePackage;
