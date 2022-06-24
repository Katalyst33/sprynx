import axios from "axios";
import { useEffect } from "react";
import DebugDataComponent from "../components/DebugDataComponent";
import {MdEmail} from "react-icons/md"
import {BsTelephoneFill} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const ContactPage = () => {
    return (
      <div className=" ">
        <div>
          <h1 className="mt-32 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-2">Visit us Today, contact or leave us a message on our socials</p>
        </div>
        <div className="my-16 lg:flex lg:gap-4 w-5/6 mx-auto">
          <div className="lg:w-4/6 py-10">
            <h3 className="font-bold text-lg mt-20 text-blue-900">COVERAGE</h3>
            <p><span className="font-bold">Island: </span>Ikoyi, Victoria Island, Lekki, Ajah, Ado/Badore, Sangotedo, Abijo, Awoyaya, Lakowe, Eputu  & environs.</p>
            <p className="mt-2"><span className="font-bold">Mainland: </span>Surulere, Fadeyi, Yaba, (T & C Applies).</p>
            <div className="mt-3 flex gap-4 justify-center">
              <p className="flex items-center gap-1"><BsTelephoneFill /> 07064793621</p>
              <p className="flex items-center gap-1"><MdEmail />Contact@sprynxmulti.com</p>
            </div>
            <h3 className="mb-2 font-bold text-lg mt-16 text-blue-900">WE ARE SOCIAL</h3>
            <div className="w-2/6 m-auto flex gap-2 justify-center">
              <div className="bg-white border-2 border-blue-400 hover:bg-blue-400 w-min p-2 rounded-md"><BsInstagram /></div>
              <div className="bg-white border-2 border-blue-400 hover:bg-blue-400 w-min p-2 rounded-md"><BsFacebook /></div>
            </div>
          </div>
          <div className="mt-6 mb-8 lg:w-4/6 shadow-sm shadow-blue-200 flex flex-col items-center gap-5 py-20">
            <input placeholder="Name" className="px-4 py-6 border-2 border-black bg-blue-100"/>
            <input placeholder="Email" className="px-4 py-6 bg-blue-100"/>
            <textarea className="px-4 py-6 bg-blue-100 rounded-md" placeholder="Feedback" rows={6} cols={34}/>
            <button className="pointer hover:bg-blue-700 bg-blue-900 rounded-md px-5 py-2 text-white">Send Message</button>
          </div>
        </div>
      </div>
    )
  };
  
  export default ContactPage;
  