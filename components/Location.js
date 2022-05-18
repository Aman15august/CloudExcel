import React from 'react'
import {FaAddressCard,FaWeixin,FaPhoneAlt} from "react-icons/fa"
import {GiOpenGate} from "react-icons/gi"

const Location = () => {
  return (
    <div>
         <section className="location text-light py-5">
        <div className="container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-3 d-flex align-items-center">
                    <div className="p-2"> <FaAddressCard className='Ai'/></div>
                    <div className="ms-2">
                        <h6 className='font_services'>ADDRESS</h6>
                        <p className='font_services'>Varanasi B.L.W</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><FaPhoneAlt className='Ai'/> </div>
                    <div className="ms-2">
                        <h6 className='font_services'>CALL FOR QUERY</h6>
                        <p className='font_services'>(+91) 7318041396</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"> <FaWeixin className='Ai'/> </div>
                    <div className="ms-2">
                        <h6 className='font_services'>SEND US MESSAGE</h6>
                        <p className='font_services'>Amansingh13611@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><GiOpenGate className='Ai'/> </div>
                    <div className="ms-2">
                        <h6 className='font_services'>OPENING HOURS</h6>
                        <p className='font_services'>09:00 AM - 18:00 PM</p>
                    </div>
                </div>
            </div> 
        </div> 
    </section>
    </div>
  )
}

export default Location