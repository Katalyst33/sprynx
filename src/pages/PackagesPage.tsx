import "../css/App.css";
import Debug from "../components/DebugDataComponent";
import PackageCardComponent from "../components/PackageCardComponent";

function PackagesPage() {
  const allPackages = [
    {
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
    },
    {
      title: "Silver",
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
    },
    {
    title: "Diamond",
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
}
  ]
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
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {allPackages.map((packageInfo, index) => (
            <PackageCardComponent key={index} packageInfo={packageInfo} />
          ))}
        </section>
      
      </div>
    </>
  );
}

export default PackagesPage;
