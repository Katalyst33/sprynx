import React from "react";
import car from "../assets/1sthome.jpg";
import { FaBullseye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import AboutImg from "../assets/2021-05-14.jpg";
import PageAnimate from "../components/PageAnimate";

const AboutUsPage = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  function getEnv() {}

  getEnv();

  return (
    <PageAnimate>
      <div className="-z-30 text-center">
        <div className="lg:flex gap-20 mx-auto w-5/6 lg:py-24 py-16 lg:items-center lg:justify-center">
          <div className=" lg:text-right lg:w-2/6">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
              Our Story {appName}
            </h1>
            <p className="mt-2 text-lg">
              Sprynx Multi is a technology start up that delivers car services
              directly to its customers’ doorstep.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={AboutImg} className="h-72 shadow-lg rounded-3xl" />
          </div>
        </div>

        <div className="mt-14 lg:flex md:flex-cols-2 lg:flex-cols-3 w-5/6 mx-auto">
          <div className="mt-6 lg:mt-0 py-10 px-7 rounded-xl lg:w-2/6">
            <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
              OUR PACKAGES
            </h3>
            <p className="text-lg">
              We built the perfect packages, just for you! Whether you want a
              classic car wash or a full detailing, we’ve got you covered!
            </p>
            <Link to="/all-packages">
              <button className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-5">
                Our Packages
              </button>
            </Link>
          </div>
          <div className="mt-6 lg:mt-0 py-10 px-7 rounded-xl lg:w-2/6">
            <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
              BOOK APPOINTMENT
            </h3>
            <p className="text-lg">
              You can book directly on our website or reach us through our
              instagram page or whatsapp number for easy and quick booking with
              the package you want. Once we receive your booking, we take care
              of the rest!
            </p>
            <button className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-5">
              Book Online
            </button>
          </div>
          <div className="mt-6 lg:mt-0 py-10 px-7 rounded-xl lg:w-2/6">
            <h3 className="font-bold text-lg text-blue-400 mb-2 mt-4">
              CONTACT US
            </h3>
            <p className="text-lg">
              Call us on our lines for the best of services
            </p>
            <button className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-5">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-5/6 mx-auto my-20">
          <h3 className="font-bold text-3xl text-blue-900 mb-16">What We Do</h3>
          <div className="lg:flex items-center gap-5 text-white ">
            <img className="lg:w-3/6 rounded-xl mb-3" src={car} />
            <p className="px-16 py-20 text-lg border bg-gradient-to-r from-gray-500 to-blue-600 rounded-2xl">
              Sprynx Multi stands out as a leader in expert mobile detailing and
              car wash services. No more battling traffic or waiting in line
              during your free time as we come to you. Regardless of your busy
              schedule, the flexibility of our convenient mobile detailing
              service provides the professional care and attention your vehicle
              needs at a price you can afford.
            </p>
          </div>
        </div>

        <div className="w-5/6 mx-auto my-32">
          <h3 className="font-bold text-2xl text-blue-900 mb-4">
            Mandatory Requirements for Dealers
          </h3>
          <h4 className="text-lg w-4/6 mx-auto italic mb-20">
            Sprynx Multi works so hard to train detailers who have a special
            attention to detail and are trustworthy, reliable, and skilled in
            their respective field.
          </h4>
          <div className="lg:flex gap-4 mb-10">
            <div className="w-[350px] mx-auto mb-12 p-8">
              <p className="flex justify-center mb-3 text-2xl text-blue-400">
                <FaBullseye />
              </p>
              <p className="font-bold">A CAR WASH/DETAILING BACKGROUND</p>
            </div>
            <div className="w-[350px] mx-auto mb-12 p-8">
              <p className="flex justify-center mb-3 text-2xl text-blue-400">
                <FaBullseye />
              </p>
              <p className="font-bold">
                HAVING THE REQUIRED KNOWLEDGE REGARDING SUPPLIES AND EQUIPMENT
              </p>
            </div>
            <div className="w-[350px] mx-auto mb-12 p-8">
              <p className="flex justify-center mb-3 text-2xl text-blue-400">
                <FaBullseye />
              </p>
              <p className="font-bold">FLUENT COMMUNICATOR</p>
            </div>
            <div className="w-[350px] mx-auto mb-12 p-8">
              <p className="flex justify-center mb-3 text-2xl text-blue-400">
                <FaBullseye />
              </p>
              <p className="font-bold">
                A RIGOROUS TRAINING PROGRAM AT THE SPRYNX MULTI TRAINING CENTRE.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="bg-blue-100 py-40 text-black w-5/6 mx-auto shadow-lg rounded-lg"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="px-14">
            <h3 className="font-bold text-4xl mb-4">Quality-first</h3>
            <p className="italic text-lg">
              “Quality is the value of money— All our decisions are taken toward
              this unique goal.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-14">
            <h3 className="font-bold text-4xl mb-4">Fairness</h3>
            <p className="italic text-lg">
              “Committed to providing an affordable service while always
              compensating our people fairly.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="px-14">
            <h3 className="font-bold text-4xl mb-4">Resilient</h3>
            <p className="italic text-lg">
              “We strive to grow, work hard and thrive in a fast-paced and
              complex environment.”
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="my-48 w-5/6 mx-auto">
          <h1 className="text-4xl font-bold mb-5">Book an appointment today</h1>
          <button className="pointer transition ease-in-out duration-400 hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white shadow-md mt-3">
            Contact Us
          </button>
        </div>
      </div>
    </PageAnimate>
  );
};

export default AboutUsPage;
