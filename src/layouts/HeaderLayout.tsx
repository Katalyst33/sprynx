import companyLogo from "../assets/sprynx-logo.png";

function HeaderLayout() {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <img className="w-28" src={companyLogo} />
        </div>
        <ul className="flex gap-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li className="text-blue-500">Our Packages</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default HeaderLayout;
