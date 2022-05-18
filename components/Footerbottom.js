import React from 'react'
import {FaAmazonPay} from "react-icons/fa"
import {SiPaytm,SiGooglepay} from "react-icons/si"


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
                        <FaAmazonPay/> &nbsp;
                        <SiPaytm/> &nbsp;
                        <SiGooglepay/> &nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footerbottom