import React from 'react'
import Image from "next/image"
import {FaFacebookF} from "react-icons/fa"
import{AiFillInstagram} from "react-icons/Ai"
import {AiOutlineLinkedin} from "react-icons/Ai"
const Team = () => {
  return (
    <div  >
          <section className="team page-section  " id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="green section-heading text-uppercase pb-2 pt-5" >Our Team</h2>
                    <h3 className="font_services section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <Image className="mx-auto rounded-circle" src="/images/team-1.jpg" alt="..." height="200px" width="200px" />
                            <h4 className='font_services text-light'>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><FaFacebookF/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiFillInstagram/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiOutlineLinkedin/></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <Image className="mx-auto rounded-circle" src="/images/team-2.jpg" alt="..."  height="200px" width="200px" />
                            <h4 className='font_services text-light'>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><FaFacebookF/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiFillInstagram/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiOutlineLinkedin/></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <Image className="mx-auto rounded-circle" src="/images/team-3.jpg" alt="..."    height="200px" width="200px"/>
                            <h4 className='font_services text-light'>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><FaFacebookF/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiFillInstagram/></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><AiOutlineLinkedin/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team