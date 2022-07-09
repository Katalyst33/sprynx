import axios from "axios";

const CreatePackage = () => {
  function addNewPackage(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:5100/packages", {
        id: "4",
        title: "Vibranium Ultra",
        description: "Best package",
        regularCar: "N200,830",
        duration: "24 hours",
        largeCar: "N250,830",
        logistics: "50,500 extra Logistics fee to Mainland.",
        services: [
          {
            title: "Exterior",
            description: "Exterior cleaning",
          },
          {
            title: "Interior",
            description: "Interior cleaning",
          },
        ],
        link: "golden-package",
      })
      .then(() => {
        console.log("a new package was created");
      })
      .catch((error) => {
        console.log("package ws not created", error);
      });
  }

  return (
    <div className="mt-60">
      {JSON.stringify({
        title: "Golden",
        description: "Popular package",
        regularCar: "N43,830",
        duration: "8 - 9 hours",
        largeCar: "N53,830",
        logistics: "5,500 extra Logistics fee to Mainland.",
        services: [
          {
            title: "Exterior",
            description: "Exterior cleaning",
          },
          {
            title: "Interior",
            description: "Interior cleaning",
          },
          {
            title: "Engine",
            description: "Engine cleaning",
          },
        ],
        link: "golden-package",
      })}
      <h1 className="text-lg">i am cr eate package page</h1>

      <section className="flex justify-center">
        <form>
          <main className="w-96 space-y-4">
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
                <textarea
                  cols={5}
                  rows={5}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </main>

          <button className="bg-red-500" onClick={addNewPackage}>
            Create Package
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePackage;
