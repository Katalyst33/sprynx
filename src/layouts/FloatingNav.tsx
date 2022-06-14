import React from 'react'
import "../css/FloatingNav.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {RiCustomerService2Fill} from "react-icons/ri"
import {FaClipboardList} from "react-icons/fa"
import {BiMessageDetail} from "react-icons/bi"

export default function FloatingNav() {
    const [activeclass, setActiveclass] = React.useState("home");

    function changeclass(event: any) {
        setActiveclass("hash" + event.target.textContent);
    }
  return (
    <div>
        <nav className='nav'>
            <a className={activeclass === "home"? "active": ""} onClick={changeclass}><AiOutlineHome /></a>
            <a className={activeclass === "about"? "active": ""} onClick={changeclass}><AiOutlineUser /></a>
            <a className={activeclass === "services"? "active": ""} onClick={changeclass}><RiCustomerService2Fill /></a>
            <a className={activeclass === "packages"? "active": ""} onClick={changeclass}><FaClipboardList /></a>
            <a className={activeclass === "contact"? "active": ""} onClick={changeclass}><BiMessageDetail /></a>
        </nav>
    </div>
  )
}