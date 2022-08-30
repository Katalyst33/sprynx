import React from 'react'
import {FaAward} from "react-icons/fa"
import pic2 from "../assets/2ndhome.jpg"
import pic3 from "../assets/3rdhome.jpg"
import pic1 from "../assets/1sthome.png"
import { Link } from 'react-router-dom'

export const HomePage = () => {
  function Award(props:any){
    return (
      <div className='text-center mb-16 lg:mb-0'>
        <FaAward className='text-4xl text-blue-400 mx-auto mb-2'/>
        <h3 className='text-2xl font-bold'>{props.title}</h3>
        <p className='w-4/6 md:w-3/6 mx-auto lg:w-4/6 text-lg'>Cras a mauris cursus, vestibulum magna sed, laoreet ipsum. Fusce feugiat arcu.</p>
      </div>
    )
  }

  function Details(props:any){
    return (
      <div className='text-center mb-16 lg:mb-0'>
        <h3 className='text-4xl font-bold'>{props.number}</h3>
        <p className='text-lg'>{props.record}</p>
      </div>
    )
  }
  return (
    <div>
      {/* 1st session */}
      <div className='bg-[#ECF3F1] py-14 lg:py-10'>
        <div className='text-center lg:text-left lg:flex items-center'>
          <div className='w-4/6 lg:px-28 mx-auto'>
            <h1 className='text-5xl font-black flex justify-items-center'>Delivering Car Services 
    Directly To your 
    Doorstep.</h1>
            <p className='mt-7 text-lg'>We come to you fully equipped
    We come to you with 
    everything needed to clean and service your car</p>
            <Link to="/services"><button className='bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md'>See Our Services</button></Link>
          </div>
          <div><img src={pic1} className="lg:w-[1000px] -mb-7 hidden lg:flex"/></div>
        </div>
      </div>
      

      {/* 2nd section */}
      <div className='lg:flex w-5/6 mx-auto gap-3 justify-center items-center my-40'>
        <Award title="Service"/>
        <Award title="Budget-Friendly"/>
        <Award title="Efficient"/>
      </div>

      {/* 3rd section */}
      <div className='bg-[#ECF3F1]'>
        <div className='mx-auto w-4/6 lg:flex lg:items-center lg:justify-between mb-32'>
          <div className='flex justify-center'><img src={pic2} className="h-96 shadow-lg rounded-3xl mx-10 -mt-8 mb-16"/></div>
          <div className='mx-auto lg:w-3/6 w-5/6 text-center lg:text-left'>
            <h3 className='text-2xl font-bold mb-2'>A Smart Workshop for car detailing</h3>
            <p className='mb-6 text-lg'>At Sprynx Multi, our complete detail 
  package consists of an exterior 
  detailing using clay treatment 
  and high-end wax, an advanced interior 
  cleaning with stain removal and leather 
  treatment as well as dressing on all the 
  plastics</p>
            <Link to="/all-packages"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md">See Our Packages</button></Link>
          </div>
        </div>

        <div className='mx-auto w-4/6 lg:flex lg:items-center lg:justify-between pb-24'>
          <div className='mx-auto lg:w-3/6 w-5/6 text-center lg:text-right mb-16'>
            <h3 className='text-2xl font-bold mb-2'>How Booking Works</h3>
            <p className='mb-6 text-lg'>You can book directly on our website 
or reach us through our instagram 
page or whatsapp  number for easy and 
quick booking with the package you want. 
Once we receive your booking, we take 
care of the rest!</p>
            <Link to="/about"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md">Learn More About Us</button></Link>
          </div>
          <div className='flex justify-center'><img src={pic3} className="h-96 mx-10 shadow-lg rounded-3xl"/></div>
        </div>
      </div>


      {/* 4th section */}
      <div className='lg:flex w-5/6 mx-auto gap-48 justify-center items-center my-20 lg:my-32'>
        <Details number="180" record="Happy Customers"/>
        <Details number="8" record="Years in Business"/>
        <Details number="10" record="Location"/>
      </div>
    </div>
  )
}
