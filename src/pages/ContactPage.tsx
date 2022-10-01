import axios from "axios";
import { useEffect } from "react";
import DebugDataComponent from "../components/DebugDataComponent";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ContactImg from "../assets/contactImg.jpg";
import PageAnimate from "../components/PageAnimate";

const ContactPage = () => {
  return (
    <PageAnimate>
      <div className="text-center">
        <div className="lg:flex gap-20 mx-auto w-5/6 lg:py-24 py-16 lg:items-center lg:justify-center">
          <div className=" lg:text-right lg:w-2/6">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
              Get in touch
            </h1>
            <p className="mt-2 text-lg">
              Visit us Today, contact or leave us a message on our socials
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ContactImg} className="h-72 shadow-lg rounded-3xl" />
          </div>
        </div>

        <div className="mb-16 lg:flex lg:gap-4 w-5/6 mx-auto">
          <div className="lg:w-4/6 py-10">
            <h3 className="font-bold text-lg mt-20 text-blue-900">COVERAGE</h3>
            <p className="text-lg">
              <span className="font-bold">Island: </span>Ikoyi, Victoria Island,
              Lekki, Ajah, Ado/Badore, Sangotedo, Abijo, Awoyaya, Lakowe, Eputu
              & environs.
            </p>
            <p className="mt-2 text-lg">
              <span className="font-bold">Mainland: </span>Surulere, Fadeyi,
              Yaba, (T & C Applies).
            </p>
            <div className="mt-3 flex gap-2 justify-center text-lg">
              <p className="flex items-center gap-1">
                <BsTelephoneFill /> 07064793621
              </p>
              <p className="flex items-center gap-1">
                <MdEmail />
                Contact@sprynxmulti.com
              </p>
            </div>
            <h3 className="mb-2 font-bold text-lg mt-16 text-blue-900">
              WE ARE SOCIAL
            </h3>
            <div className="w-2/6 m-auto flex gap-2 justify-center">
              <div className="bg-white border-2 border-blue-400 hover:bg-blue-400 w-min p-2 rounded-md">
                <BsInstagram />
              </div>
              <div className="bg-white border-2 border-blue-400 hover:bg-blue-400 w-min p-2 rounded-md">
                <BsFacebook />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-8 text-lg lg:w-4/6 shadow-sm shadow-blue-200 flex flex-col items-center gap-5 py-20">
            <input
              placeholder="Name"
              className="px-3 py-2 shadow-sm shadow-blue-700 focus:ring-2 rounded-md w-4/6"
            />
            <input
              placeholder="Email"
              className="px-3 py-2 shadow-sm shadow-blue-700 focus:ring-2 rounded-md w-4/6"
            />
            <textarea
              className="px-4 py-2 shadow-sm shadow-blue-700 focus:ring-2 rounded-md w-4/6"
              placeholder="Feedback"
              rows={6}
            />
            <button className="pointer hover:bg-blue-600 bg-blue-900 rounded-md px-5 py-2 text-white">
              Send Message
            </button>
          </div>
        </div>
        <div className="my-20">
          <h3 className="text-2xl text-blue-900 font-semibold">
            Frequently Asked Question
          </h3>
          <div className="w-5/6 mx-auto lg:flex lg:gap-10 rounded-xl bg-gradient-to-r from-blue-100 to-green-100 px-10 py-6 mt-10">
            <div className="mt-7 lg:w-[30%] text-lg">
              <h4 className="font-bold text-lg text-blue-400">
                How does booking work?
              </h4>
              <p>
                You can book directly on our website or reach us through our
                instagram page or whatsapp number for easy and quick booking
                with the package you want. Once we receive your booking, we take
                care of the rest!
              </p>
            </div>
            <div className="mt-7 lg:w-[30%]">
              <h4 className="font-bold text-lg text-blue-400">
                Do i need to have any equipment?
              </h4>
              <p>
                The detailers, on the Sprynx Multi-platform, arrive at your
                location fully-equipped with all the supplies they need to
                ensure that your car is spotless.
              </p>
            </div>
            <div className="mt-7 lg:w-[30%]">
              <h4 className="font-bold text-lg text-blue-400">
                Water based wash?
              </h4>
              <p>
                If you prefer a water-based wash, we do ask that you specify
                that prior to the wash by selecting the correct add-on during
                the booking flow. We also ask the customer to provide the water
                supply and we will send out a tech equipped with a power wash
                hookup and hose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  );
};

export default ContactPage;
