import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { $axios } from "../../service/http";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LoginPage = () => {
  let navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.user.user);

  const [isPending, setIsPending] = useState(true);

  const [formData, setFormData] = React.useState({
    email: "obee@gmail.com",
    password: "123456",
  });
  function handleChange(event: any) {
    var { name, value } = event.target;
    setFormData(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  // login user
  function loginUser(e: any) {
    e.preventDefault();

    $axios
      .post("/login", formData)
      .then((response: any) => {
        // save to local storage
        localStorage.setItem("id-card", response.token);

        // navigate to dashboard
        navigate("/account", { replace: true });

        setIsPending(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
      });
  }

  return (
    <div>
      <div
        id="loginComponent"
        className="bg-blue-100 w-4/6 mx-auto mt-24 shadow-sm rounded-lg"
      >
        <div className="flex flex-col justify-center items-center py-10 bg-white">
          <h3 className="text-3xl font-semibold text-blue-900 mb-1">Login</h3>
          <p className="mb-10 text-sm">
            Fill in your details to access your account
          </p>
          {JSON.stringify(formData)}
          {JSON.stringify(currentUser)}

          <input
            className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6"
            name=""
            placeholder="Email Address"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
          />
          <input
            className="mb-5 shadow-sm shadow-blue-700 focus:ring-2 py-2 px-3 rounded-md lg:w-2/6 w-5/6"
            name=""
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          />
          <div className="mb-3 flex justify-between lg:w-2/6 w-5/6">
            <a className="text-sm pointer my-2 text-left w-full cursor-pointer mt-2">
              Forgot Password?
            </a>
            <a className="text-sm pointer my-2 text-right w-full cursor-pointer mt-2 text-blue-700 hover:text-blue-400">
              Sign Up
            </a>
          </div>
          <div className="text-right w-5/6 lg:w-2/6">
            <button
              onClick={loginUser}
              className="sign_button bg-blue-800 rounded-md py-2 px-3 w-2/6 text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
