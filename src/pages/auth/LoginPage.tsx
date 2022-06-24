import car from "../../Assets/car.jpg"
import "../../css/signup.css"
import {BsArrowRight} from "react-icons/bs"
import {BsFillEnvelopeFill} from "react-icons/bs"

const Signup = () => {
  return (
    <div className="container">
        <div className="sign_img">
            <img src={car} alt=""/>
        </div>
        <div className="sign_form">
            <input name="" placeholder="Email Address" type="text" />
            <input name="" placeholder="Password" type="password" />
            <button className="sign_button">Sign in <BsArrowRight className="arrow"/></button>
        </div>
    </div>
  )
}

export default Signup