const CreatePackage = () => {
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

      <section>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatePackage;
