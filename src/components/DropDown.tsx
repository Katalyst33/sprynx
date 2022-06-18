import React from "react";

const DropDown = (props: any) => {
  const [drop, setDrop] = React.useState(false);

  function toggleDrop() {
    setDrop(!drop);
  }
  return (
    <div>
      <li
        className="package-item bg-blue-500 cursor-pointer"
        onClick={toggleDrop}
      >
        <div className="px-1 py-1 text-white">{props.title}</div>
        <div className="flex whole   w-4 h-4 text-white">
          {drop === false ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </div>
      </li>
      {drop && (
        <div className="text-sm mx-3 text-black mb-5">{props.description}</div>
      )}
    </div>
  );
};

export default DropDown;
