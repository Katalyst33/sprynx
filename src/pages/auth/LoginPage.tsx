import {Link} from "react-router-dom"
const LoginPage = () => {
  return (
    <div className="bg-blue-100 w-4/6 mx-auto mt-24 shadow-sm rounded-lg">
        <div className="flex flex-col justify-center items-center py-10 bg-white">
          <h3 className="text-3xl font-semibold text-blue-900 mb-1">Login</h3>
          <p className="mb-10 text-sm">Fill in your details to access your account</p>
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Email Address" type="text" />
          <input className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6" name="" placeholder="Password" type="password" />
          <div className="mb-3 flex justify-between lg:w-2/6 w-5/6">
            <a className="text-sm pointer my-2 text-left w-full cursor-pointer mt-2">Forgot Password?</a>
            <a className="text-sm pointer my-2 text-right w-full cursor-pointer mt-2 text-blue-700 hover:text-blue-400">Sign Up</a>
          </div>
          <div className="text-right w-5/6 lg:w-2/6">
            <button className="sign_button bg-blue-800 rounded-md py-2 px-3 w-2/6 text-white">Sign in</button>
          </div>
          
        </div>
    </div>
  )
}

export default LoginPage