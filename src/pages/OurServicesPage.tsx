import React from "react";
import { FaBullseye } from "react-icons/fa";
import carDetails from "../assets/carDetails.jpg";
import deal2 from "../assets/deal2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../redux/user";

const OurServicesPage = () => {
  const dispatch = useDispatch();

  function updateEmail(email: string) {
    // console.log("updateEmail", email);
    dispatch(setUserEmail({ email }));

    localStorage.setItem(
      "fruits",
      JSON.stringify(["orange", "banana", "apple"])
    );
  }

  return (
    <div className="text-center">
      <div className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl mt-52">
        Our Services
      </div>
      <div>
        <p className="bg-blue-50 px-20 py-16">
          Here at Sprynx Multi, we get to asked a lot of questions. There is one
          question that keeps popping up, however: “What is the difference
          between car detailing and car washing?” We realize that for most
          non-car enthusiasts, the difference probably isn’t very significant.
          However, all car owners, enthusiasts or not, should look at getting
          their car fully detailed every so often, and should also perform
          smaller details regularly to have their car looking at its best all
          the time. So, to help our customers understand the many benefits of
          car detailing, also known as auto-detailing, we are going to outline
          what you can expect when you choose to have your car detailed. Trust
          us when we say that you’ll never go back to normal washing! Simply
          put, getting your car detailed means a top-to-bottom thorough cleaning
          of your vehicle using specialized tools and products. Normally, a
          detailer will also perform some light cosmetic touch-ups, but the
          process does not include paintwork or body repairs
        </p>
      </div>

      <div className="lg:flex gap-5 w-5/6 mx-auto my-20">
        <div className="w-[370px] mx-auto mb-12 p-4">
          <p className="flex justify-center mb-3 text-2xl text-blue-400">
            <FaBullseye />
          </p>
          <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
            Car Waxing
          </h3>
          <p>
            Car wax smoothes the paint surface and will reduce the friction
            between debris and your car, meaning that tiny debris is more likely
            to slide off your car rather than damage it.
          </p>
        </div>
        <div className="w-[370px] mx-auto mb-12 p-4">
          <p className="flex justify-center mb-3 text-2xl text-blue-400">
            <FaBullseye />
          </p>
          <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
            Car Polishing
          </h3>
          <p>
            Car polish is a product that helps to eliminate surface scratches,
            swirls, oxidation, dirt, and other minor imperfections. Polish
            should be used before wax, as it helps to restore auto paint that
            has lost its shine due to oxidation.
          </p>
        </div>
        <div className="w-[370px] mx-auto mb-12 p-4">
          <p className="flex justify-center mb-3 text-2xl text-blue-400">
            <FaBullseye />
          </p>
          <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
            Headlight Restoration
          </h3>
          <p>
            Headlight restoration or plastic headlight restoration is the act of
            refinishing aged headlight lenses that have become discolored or
            dull due to oxidation primarily due to UV light and other
            environmental factors such as road debris impact rain, and exposure
            to caustic chemicals
          </p>
        </div>
        <div className="w-[370px] mx-auto mb-12 p-4">
          <p className="flex justify-center mb-3 text-2xl text-blue-400">
            <FaBullseye />
          </p>
          <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
            Engine Cleaning
          </h3>
          <p>
            A clean engine makes a used car look newer and better maintained.
            Some shops that perform engine cleaning services claim a clean
            engine even runs a little cooler because removing the gunk formed by
            dirt, oil and grease allows engines to run cooler
          </p>
        </div>
      </div>

      {/* <div>
            <div className='w-5/6 mx-auto my-20'>
                <div className='lg:flex items-center text-white bg-gradient-to-r from-gray-500 to-blue-600 rounded-2xl'>
                    <img className='lg:w-3/6 lg:rounded-l-xl object-cover lg:h-[510px]' src={carDetails}/>
                    <div className='lg:px-16 px-10 py-10 text-white'>
                        <h3 className='text-xl font-bold mb-3'>Car Detailing</h3>
                        <p className=''>Car detailing involves cleaning and reconditioning the interior and exterior of the car. The aim of this is to restore the paintwork by eliminating scratches or swirl marks to make the car look almost brand new like it did when you first drove it out of the shop.

    A simple car wash gets rid of dirt on the outside of your car, and if you clean the interior you might catch some of the grime with a vacuum, but car detailing takes this process much further. Every car we detail has every last imperfection buffed, polished, or vacuumed out, leaving it fit for display in any showroom. Since there are no set guidelines, you will see a great variety in terms of the services included in a complete detail. At Sprynx Multi, our complete detail package consists of an exterior detailing using clay treatment and high-end wax, an advanced interior cleaning with stain removal and leather treatment as well as dressing on all the plastics.</p>
                    </div>
                </div>
            </div>
            <div className='w-5/6 mx-auto my-20'>
                <div className='lg:flex items-center text-white bg-gradient-to-r from-gray-500 to-blue-600 rounded-2xl'>
                    <div className='lg:px-16 px-10 py-10 text-white'>
                        <h3 className='text-xl font-bold mb-3'>What is the difference between a Car Wash and an Auto Detail?</h3>
                        <p className=''>Now that you know what car detailing is, we are going to quickly outline the differences between a car wash and auto detailing, before going on to talk some more about why car detailing is a seriously good idea.

Aside from cost, a typical car wash only covers a fraction of the cleaning that you can get from a detail, and so only achieves a fraction of the result.
So what does a car wash include?
Most car washes take between ten and twenty minutes to go from washing to drying. A car wash can be done by hand or by machines (a drive thru car wash) that run bristles, soap, and water to clean your car’s exterior.
A car wash tends to be a superficial cleanse while an auto detail is more thorough and restorative.</p>
                    </div>
                    <img className='h-[400px] lg:w-3/6 lg:rounded-r-xl object-cover lg:h-[500px]' src={deal2}/>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default OurServicesPage;
