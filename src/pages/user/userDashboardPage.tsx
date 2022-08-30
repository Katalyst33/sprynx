import {HiThumbUp} from "react-icons/hi"

const UserDashboardPage = () => {
  function Timeline(prop:any){
    return(
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-full w-8 h-8 flex bg-blue-700"><HiThumbUp className="text-white mx-auto my-auto"/></div>
        <h4 className="font-semibold text-lg">{prop.packageName}</h4>
      </div>
    )
  }
  
  return (
    <div className="bg-gray-200 pt-32 lg:px-20 px-4">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <div className="lg:flex gap-10 mb-10">
        <div className="mt-5 bg-white rounded-lg shadow-md lg:w-7/12">
          <h3 className="px-7 py-6 font-bold text-lg text-blue-700">Your Car Details</h3>
          <hr className="shadow-md"/>
          <div className="px-7 py-6">
            <div className="md:flex gap-20 md:mb-5">
              <div className="mb-5">
                <h5 className="font-bold text-blue-700">Car Type</h5>
                <p>Salon</p>
              </div>
              <div className="mb-5">
                <h5 className="font-bold text-blue-700">Car Make</h5>
                <p>Honda Civic</p>
              </div>
            </div>
            <div className="flex gap-20 mb-5">
              <div className="mb-5">
                <h5 className="font-bold text-blue-700">Current Package</h5>
                <p>Golden Premium</p>
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
          </div>
        </div>
        <div className="mt-5 bg-white rounded-lg shadow-md lg:w-4/12">
          <h3 className="px-7 py-6 font-bold text-lg text-blue-700">Your Recent Packages</h3>
          <div className="px-7 py-6">
            <Timeline packageName="Silver Package"/>
            <Timeline packageName="Gold Package"/>
            <Timeline packageName="Silver Package"/>
            <Timeline packageName="Aluminium Package"/>
          </div>
          <div className="py-6 px-7">
            <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md">New Package</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
