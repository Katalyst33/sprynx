import React from 'react'
import {FaChevronCircleDown} from 'react-icons/fa'
import {FaChevronCircleUp} from 'react-icons/fa'

const DropDown = (props: any) => {
    const [drop, setDrop] = React.useState(false);

    function toggleDrop(){
        setDrop(!drop);
    }
  return (
    <div>
        <li className="package-item bg-white" onClick={toggleDrop}>
            <div className="px-1 py-1">{props.title}</div>
            <div className="flex whole border rounded-full w-4 h-4 text-black-300">
                {drop === false ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
            </div>
        </li>
        {drop && <div className="text-sm mx-3 text-black mb-5">{props.description}</div>}
    </div>
  )
}

export default DropDown