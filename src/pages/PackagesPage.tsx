import "../css/App.css";
import Debug from "../components/DebugDataComponent";
import PackageCardComponent from "../components/PackageCardComponent";

function PackagesPage() {
  const packageData = {
    title: "Golden",
    description: "popular package",
    regularCar: "N43,830",
    duration: "8 - 9 hours",
    largeCar: "N53,830",
    logistics: "5,500 extra Logistics fee to Mainland.",
    services: [
      {
        title: "exterior",
        description: "Exterior cleaning",
      },
      {
        title: "interior",
        description: "Interior cleaning",
      },
      {
        title: "Engine",
        description: "Engine cleaning",
      },
    ],
    link: "golden-package",
  };

  return (
    <>
      <div className="container mx-auto">
        {/* <h1 className="text-center text-xl lg:text-3xl py-20 bg-yellow-500 md:bg-green-500 lg:bg-red-500">
          Choose a package below and get it <br /> delivered at your door step
        </h1> */}
        <h1 className="text-center text-xl lg:text-3xl py-20 ">
          Choose a package below and get it <br /> delivered at your door step
        </h1>

        <section className="grid grid-cols-3 gap-x-10 ">
          <PackageCardComponent packageInfo={packageData} />
          <div className="bg-blue-400">
            <h1>Golden</h1>
            <h1>package</h1>
            <ul>
              <li>interior</li>
              <li>Exterior</li>
              <li>Engine</li>
            </ul>
          </div>
          <div className="bg-blue-400">
            <h1>Golden</h1>
            <h1>package</h1>
            <ul>
              <li>interior</li>
              <li>Exterior</li>
              <li>Engine</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default PackagesPage;
