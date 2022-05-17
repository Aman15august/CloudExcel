import React from 'react'
import { FaSearchLocation,FaEnvelopeOpenText} from 'react-icons/Fa'
import {MdCall } from 'react-icons/Md'

import {GiClockwork} from "react-icons/Gi"
const Location = () => {
  return (
    <div>
         <section className="location text-light py-5">
        <div className="container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-3 d-flex align-items-center">
                    <div className="p-2"><FaSearchLocation className='Ai' /></div>
                    <div className="ms-2">
                        <h6>ADDRESS</h6>
                        <p>Varanasi B.L.W</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><MdCall className='Ai'/></div>
                    <div className="ms-2">
                        <h6>CALL FOR QUERY</h6>
                        <p>(+91) 7318041396</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><FaEnvelopeOpenText className='Ai '/></div>
                    <div className="ms-2">
                        <h6>SEND US MESSAGE</h6>
                        <p>Amansingh13611@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><GiClockwork className='Ai'/></div>
                    <div className="ms-2">
                        <h6>OPENING HOURS</h6>
                        <p>09:00 AM - 18:00 PM</p>
                    </div>
                </div>
            </div> 
        </div> 
    </section>
    </div>
  )
}

export default Location