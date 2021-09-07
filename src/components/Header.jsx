import React from 'react'
// import Image from '../assets/background.jpg';
import Typed from "react-typed";


const Header = () => {
    return (
       <div className="header-wraper">
           <div className="main-info">
               <h1>web development and website promotions</h1>
               <Typed
                    className="typed-text"
                    strings={["web Design","web-Development", "Facebook Ads", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
               />
               <a href="#" className="btn-main-offer">contact me</a>
           </div>
       </div>
    )
}

export default Header
