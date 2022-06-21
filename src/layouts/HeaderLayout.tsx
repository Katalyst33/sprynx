import companyLogo from "../assets/sprynx-logo.png";
import { Link, NavLink } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <img className="w-28" src={companyLogo} />
        </div>
        <ul className="flex gap-x-4">
          <NavLink to="/">Home</NavLink>
          <Link to="/about">About Us</Link>
          <NavLink to="/all-packages">Our Packages</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </ul>
      </div>
    </>
  );
}

export default HeaderLayout;
