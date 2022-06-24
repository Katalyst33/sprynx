import React from "react";
import companyLogo from "../assets/sprynx-logo.png";

const Footer = () => {
  return (
    <section className="bg-blue-400 mt-14">
      <div className="text-center text-white pt-20 pb-8 flex flex-col flex-wrap w-5/6 mx-auto">
        <h1 className="text-black-900 text-3xl">Get In Touch</h1>
        <h2 className="text-base mt-3">
          Contact Address - 7 Aremu Bukola Crescent Pero Close Ogombo Off
          Abraham Adesanya Estate Ajah, Lekki, Lagos.
        </h2>
        <h4 className="mt-5 md:mt-2 lg:mt-1">
          Mon, Tues & Wed: 8am - 7pm Thurs: 8am - 4pm Fri: 8am - 7pm Sat: 9am -
          7pm Sun: Off
        </h4>
        <img className="w-28" src={companyLogo} />

        <h4 className="mt-3">
          Sprynx Multi is a technology start up delivering car services directly
          to its customers’ doorstep. <br />
          We believe in exceptional customer service, outstanding quality and
          well-crafted software.
        </h4>
        <div className="flex justify-center text-gray-600 gap-10 my-10 flex-col md:flex-row lg:gap-y-0">
          <a className="hover:text-blue-900 cursor-pointer">Home</a>
          <a className="hover:text-blue-900 cursor-pointer">Service</a>
          <a className="hover:text-blue-900 cursor-pointer">About Us</a>
          <a className="hover:text-blue-900 cursor-pointer">Contact Us</a>
          <a className="hover:text-blue-900 cursor-pointer">
            Terms and Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
