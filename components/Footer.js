
import React from 'react'
import {FaInstagram ,FaFacebook,FaGithubSquare,FaChevronCircleRight} from "react-icons/fa"
import {ImEnvelop} from "react-icons/im"
const Footer = () => {
  return (
    <div className='team'>
        <section className="footer text-light">
        <div className="container">
            <div className="row" data-aos="fade-right">
                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className=" font_services">CloudXcel</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi repudiandae explicabo esse maxime, impedit rem voluptatibus amet error quas.</p>
                    <div className="d-flex">
                        <div className="me-3">
                            <a href="#your-link">
                               <FaInstagram className='Fs'/> 
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <FaFacebook className='Fs'/>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <FaGithubSquare className='Fs' />
                            </a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="font_services py-2">Quick Links</h4>
                        <div className="d-flex align-items-center py-2">
                       <FaChevronCircleRight/>
                            <a href="#about"><p className="ms-3 text-light ">About</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="#"><p className="ms-3 text-light">Services</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="#"><p className="ms-3 text-light">Plans</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="#"><p className="ms-3 text-light">Contact</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="font_services py-2">Useful Links</h4>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="privacy.html"><p className=" ms-3 text-light">Help center</p></a>
                            
                        </div>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="terms.html"><p className="ms-3 text-light">Submit a Ticket</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                       <FaChevronCircleRight/>
                            <a href="#your-link"><p className="ms-3 text-light">Support</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                        <FaChevronCircleRight/>
                            <a href="#your-link"><p className="ms-3 text-light">Blog</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className='font_services'>Newsletter</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                    <div className="d-flex align-items-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email"/>
                            <button className="btn-secondary text-light" type='button'> <ImEnvelop/> </button> 
                            
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    </section>
    </div>
  )
}

export default Footer