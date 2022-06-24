const RegisterPage = () => {
  return (
    <div className="bg-blue-100 w-4/6 mx-auto mt-24 shadow-sm rounded-lg">
        <div className="flex flex-col justify-center items-center py-10 bg-white">
          <h3 className="text-3xl font-semibold text-blue-900 mb-1">Sign Up</h3>
          <p className="mb-10 text-sm">Fill in your details to register</p>
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="First Name" type="text" />
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Last Name" type="text" />
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Email Address" type="text" />
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Password" type="password" />
          <input className="shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Confirm Password" type="password" />
          <div className="text-right w-5/6 mt-7 lg:w-2/6">
            <button className="sign_button bg-blue-800 rounded-md py-2 px-3 w-2/6 text-white">Sign Up</button>
          </div>
          
        </div>
    </div>
  );
};

export default RegisterPage;
