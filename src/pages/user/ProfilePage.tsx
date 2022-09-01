import {HiLocationMarker} from "react-icons/hi"
import {BiPackage} from "react-icons/bi"
import {BiTime} from "react-icons/bi"

const Dashboard = () => {

  function Timeline(prop:any){
    return(
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-full w-8 h-8 flex bg-blue-700"><HiLocationMarker className="text-white mx-auto my-auto"/></div>
        <h4 className="font-semibold text-lg">{prop.location}</h4>
        <p className="text-gray-500">{prop.carMake}</p>
      </div>
    )
  }

  function TopPops(props:any){
        
    return (
      <div className="bg-white rounded-lg px-7 py-6 w-max">
        <div className="rounded-full w-8 h-8 flex bg-blue-700">{props.icon}</div>
        <h4 className="font-bold mt-2">{props.popTitle}</h4>
        <p className="text-gray-500">{props.popName}</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-200 py-16 lg:px-20 px-4">
      <h1 className="text-3xl font-bold mb-5">My Profile</h1>
      <div className="lg:flex gap-10 pb-10">
        <div className="lg:w-7/12">
          <div className="flex gap-5">
            <TopPops icon={<BiPackage className="text-white mx-auto my-auto"/>} popTitle="Current Package" popName="Golden Premium" />
            <TopPops icon={<BiTime className="text-white mx-auto my-auto"/>} popTitle="Appointment Date/time" popName="3rd September 2022" />
            <TopPops  popTitle="Current Package" popName="Golden Premium" />
          </div>
          <div className="mt-5 bg-white rounded-lg shadow-md">
            <h3 className="px-7 py-6 font-bold text-lg text-blue-700">My Personal Details</h3>
            <hr className="shadow-md"/>
            <div className="px-7 py-6">
              <div className="md:flex gap-20 md:mb-5">
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Name</h5>
                  <p>Brian Messi</p>
                </div>
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Home Address</h5>
                  <p>27 benvic street, Dawaki. Owerri</p>
                </div>
              </div>
              <div className="md:flex gap-20 md:mb-5">
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Email Address</h5>
                  <p>goldstarfury@company.com</p>
                </div>
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Phone Number</h5>
                  <p>+123456789</p>
                </div>
              </div>
              <div className="md:flex gap-20 md:mb-5">
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Password</h5>
                  <div className="flex gap-3">
                    <p>************</p>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-bold text-blue-700">Phone Number</h5>
                  <p>+123456789</p>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-blue-700">Full Car Details</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis condimentum tortor quis bibendum. Nunc pulvinar ac nunc quis porttitor. Aliquam condimentum vitae urna ac laoreet. Sed tincidunt arcu libero, vel viverra mauris euismod lobortis. Etiam sit amet tempor ante. Vestibulum eget posuere augue, in ultrices ligula.</p>
              </div>
              <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md">Edit Profile</button>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md h-max lg:w-4/12 mt-5 lg:mt-0">
          <h3 className="px-7 py-6 font-bold text-lg text-blue-700">Recent Wash Locations</h3>
          <div className="px-7 py-6">
            <Timeline location="Ikorodu" carMake="Toyota camry"/>
            <Timeline location="Alakija" carMake="Mercedes c300"/>
            <Timeline location="Dutse" carMake="Toyota camry"/>
            <Timeline location="Ikorodu" carMake="Toyota camry"/>
            <Timeline location="Ikorodu" carMake="Mercedes c300"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
