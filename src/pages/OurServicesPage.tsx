import React from "react";
import { FaBullseye } from "react-icons/fa";
import carDetails from "../assets/carDetails.jpg";
import deal2 from "../assets/deal2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../redux/user";
import ServiceImg from "../assets/Serviceimg.jpg";
import ServicesSubImg1 from "../assets/deal2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PageAnimate from "../components/PageAnimate";

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
    <PageAnimate>
      <div className="text-center">
        <div className="lg:flex gap-20 mx-auto w-5/6 lg:py-24 py-16 lg:items-center lg:justify-center">
          <div className=" lg:text-right lg:w-2/6">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
              At your Service
            </h1>
            <p className="mt-2 text-lg">
              Visit us Today, contact or leave us a message on our socials
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ServiceImg} className="h-72 shadow-lg rounded-3xl" />
          </div>
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
              between debris and your car.
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
              swirls, oxidation, dirt, and other minor imperfections.
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
              Headlight restoration is the act of refinishing aged headlight
              lenses that have become discolored or dull due to UV light and
              other environmental factors.
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
              Helps make the engine run a little cooler.
            </p>
          </div>
        </div>

        <div className="mb-20 lg:flex text-lg w-4/6 mx-auto lg:gap-20">
          <div className="w-5/6">
            <img src={ServicesSubImg1} className="rounded-lg shadow-lg mb-8" />
            <div className="text-left">
              <h2 className="text-blue-500 font-bold text-lg lg:mt-0 mt-4">
                Car Detailing
              </h2>
              <p>
                Car detailing involves cleaning and reconditioning the interior
                and exterior of the car. The aim of this is to restore the
                paintwork by eliminating scratches or swirl marks to make the
                car look almost brand new like it did when you first drove it
                out of the shop.
              </p>
            </div>
          </div>
          <div className="w-5/6">
            <img src={ServicesSubImg1} className="rounded-lg shadow-lg mb-8" />
            <div className="text-left">
              <h2 className="text-blue-500 font-bold text-lg lg:mt-0 mt-4">
                Car Wash vs Car Detailing
              </h2>
              <p>
                A car wash can be done by hand or by machines (a drive thru car
                wash) that run bristles, soap, and water to clean your car’s
                exterior.A car wash tends to be a superficial cleanse while an
                auto detail is more thorough and restorative.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex text-lg w-4/6 mx-auto lg:gap-20">
          <div className="w-5/6">
            <img src={ServicesSubImg1} className="rounded-lg shadow-lg mb-8" />
            <div className="text-left">
              <h2 className="text-blue-500 font-bold text-lg lg:mt-0 mt-4">
                Exterior Car Detailing
              </h2>
              <p>
                We begin with an exhaustive exterior wash to remove as much dirt
                as possible. Next, using special brushes and wheel cleaning
                products, the detailer takes off all the dust and filth. The
                paintwork is washed and dried from top to bottom using washing
                mitts and soft microfiber towels as well as polished to
                eliminate any light scratches.Finally, the paint is waxed to
                give it an additional protective layer using high-quality
                carnauba based paste wax.
              </p>
            </div>
          </div>
          <div className="w-5/6">
            <img src={ServicesSubImg1} className="rounded-lg shadow-lg mb-8" />
            <div className="text-left">
              <h2 className="text-blue-500 font-bold text-lg lg:mt-0 mt-4">
                Interior Car Detailing
              </h2>
              <p>
                All of the upholstery inside the car is thoroughly vacuumed and
                shampooed to remove stains and dirt. If the car has leatherwork,
                this is often conditioned and scrubbed to remove dirt that is
                deeply ingrained. Lastly, the interior glass is also cleaned and
                polished then wiped down with a degreaser before rinsing
                everything clean.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="bg-blue-50 py-40 text-black w-5/6 mx-auto rounded-lg mt-32 shadow-lg"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 10000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="px-14 w-3/6 mx-auto">
            <p className="italic text-lg">
              Here at Sprynx Multi, we get to asked a lot of questions. There is
              one question that keeps popping up, however: “What is the
              difference between car detailing and car washing?”. We realize
              that for most non-car enthusiasts, the difference probably isn’t
              very significant.
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-14">
            <p className="italic text-lg">
              However, all car owners, enthusiasts or not, should look at
              getting their car fully detailed every so often, and should also
              perform smaller details regularly to have their car looking at its
              best all the time.
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-14">
            <p className="italic text-lg">
              So, to help our customers understand the many benefits of car
              detailing, also known as auto-detailing, we are going to outline
              what you can expect when you choose to have your car detailed.
              Trust us when we say that you’ll never go back to normal washing!
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-14">
            <p className="italic text-lg">
              Simply put, getting your car detailed means a top-to-bottom
              thorough cleaning of your vehicle using specialized tools and
              products. Normally, a detailer will also perform some light
              cosmetic touch-ups, but the process does not include paintwork or
              body repairs
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="w-4/6 mx-auto my-32 text-lg">
          <h3 className="font-bold text-blue-400 mb-2 mt-4 ">
            Washing Your Car Is Important
          </h3>
          <p className="leading-relaxed">
            A car wash is a low money and time investment with a great return on
            investment. Washing your car is important for a couple of reasons.
            Your car will look better clean and it will have a better resell and
            trade-in value. You will feel better and can even look better
            driving a clean and well maintained vehicle. Keeping your car washed
            is a low cost way to protect value and maintain appearance.
          </p>
        </div>
      </div>
    </PageAnimate>
  );
};

export default OurServicesPage;
