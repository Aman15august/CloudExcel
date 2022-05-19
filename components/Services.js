import React from 'react'
import { FaAppStore,FaDev,FaConnectdevelop,FaPhoneSquareAlt,FaWeixin } from 'react-icons/fa';
import {MdOutlineSecurity} from "react-icons/md"

const Services = () => {
    return (
        <div className="sercolor  container-fluid py-5 wow fadeInUp " data-wow-delay="0.1s"  id="services">
            <section className="services d-flex align-items-center py-5">
                <div className="container text-light ">
                    <div className="text-center pb-4" >

                        <h2 className='green pt-5'>OUR SERVICES</h2>
                        <h2 className="font_services py-2">Explore unlimited possibilities</h2>
                        <p className="para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores, quia accusantium sunt corporis optio recusandae? Nostrum libero pariatur cumque, ipsa dolores voluptatibus voluptate alias sit fuga. Itaque, ea quo.</p>
                    </div>
                    <div className="row gy-4 py-2" data-aos="zoom-in">
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <div className='react_icons'>
                               <FaDev className='Ai'/>
                                </div>
                                <h4 className=" font_services py-2">Web Design</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="button my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                            <FaAppStore className='Ai'/>
                                <h4 className=" font_services py-2"> App Development</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                               <FaConnectdevelop className='Ai'/>
                                <h4 className=" font_services py-2">SEO Optimization</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                               <FaPhoneSquareAlt className='Ai'/>
                                <h4 className=" font_services py-2">MOBILE CONNECTION</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                               <MdOutlineSecurity className='Ai'/>
                                <h4 className="font_services py-2">SECURITY</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <FaWeixin className='Ai'/>
                                <h4 className=" font_services py-2">Any Query</h4>
                                <p className="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                                <div className="my-3">
                                    <a className="btn btn-success " href="#your-link">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services