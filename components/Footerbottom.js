import React from 'react'
import {FaCcVisa,FaGooglePay} from "react-icons/fa"
import {SiSamsungpay,SiPaytm } from "react-icons/Si"


const Footerbottom = () => {
    return (
        <div>
            <div className="bottom py-2 text-light" >
                <div className="container d-flex justify-content-between">
                    <div>
                        <p>Copyright © Your name</p>
                        <p>Distributed by: <a href="https://themewagon.com/">Themewagon</a></p>
                    </div>
                    <div>
                        <FaCcVisa /> &nbsp;
                         <SiSamsungpay /> &nbsp;
                        <FaGooglePay />&nbsp;
                        <SiPaytm /> &nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footerbottom