import React from "react";
import companyLogo from "../assets/sprynx-logo.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import NavMobile from "./NavMobile";
import ReduxComponent from "../components/ReduxComponent";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function HeaderLayout() {
  const currentUser = useSelector((state: RootState) => state.user.user);

  var [toggle, setToggle] = React.useState(false);
  function handleClick() {
    return setToggle(!toggle);
  }
  function closeMenu() {
    setToggle(false);
  }

  function logout() {
    localStorage.removeItem("id-card");
    window.location.reload();
  }

  return (
    <div className="z-50">
      <div className="flex justify-between items-center px-10 sticky top-0 bg-white shadow-sm w-full">
        <div>
          <img className="w-28" src={companyLogo} />
        </div>

        <div>
          {toggle === false ? (
            <GiHamburgerMenu
              className="text-xl lg:hidden cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <GrClose
              onClick={handleClick}
              className="text-xl lg:hidden cursor-pointer"
            />
          )}
          <ul className="lg:flex gap-x-7 hidden items-center">
            <NavLink
              to="/"
              className="font-normal transition ease-in-out duration-400 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Home
            </NavLink>
            <Link
              to="/about"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              About Us
            </Link>
            <NavLink
              to="/all-packages"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Our Packages
            </NavLink>
            <NavLink
              to="/services"
              className=" font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Our Services
            </NavLink>
            <NavLink
              to="/contact-us"
              className=" font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Contact Us
            </NavLink>

            <div>|</div>

            {currentUser? (<NavLink to="/account/dashboard"><div className="text-center"><h3 className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide">My Account</h3></div></NavLink>) : <NavLink to="/account/dashboard" className="hidden">Account</NavLink>}

            {currentUser ? (
              <div>
                <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md">
                  Logout 
                  {/* <div>{JSON.stringify(currentUser?.role[1])}</div> */}
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md"
              >
                Login
              </NavLink>
            )}
          </ul>
          {toggle && <NavMobile isOpen={true} closeMenu={closeMenu} />}
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;
