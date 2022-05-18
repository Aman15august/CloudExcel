import React from 'react'
import {FaAccusoft } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
        <section className="home py-5 d-flex align-items-center" id="header">
        <div className="container text-light py-5"  data-aos="fade-right"> 
            <h1 className="headline">Best platform <span className="home_text">CloudXcel </span><br/>tool need to grow your business rapidly</h1>
            <p className="para para-light py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempore accusamus quis magnam doloremque itaque ad modi, pariatur iste labore similique officiis impedit aspernatur aperiam facere architecto. Eligendi, repellendus inventore!</p>
            <div className="d-flex align-items-center">
                <p className="p-2"></p>
                <p> <FaAccusoft/> Lorem ipsum dolor sit amet.</p>  
            </div>
            <div className="d-flex align-items-center">
                <p className="p-2">  </p>
                <p><FaAccusoft/> Lorem ipsum dolor sit amet.</p>  
            </div>
            <div className="my-3">
                <a className="btn btn-success rounded-pill" href="#plans">Read More</a>
            </div>
        </div> 
    </section>
    </div>
  )
}

export default Hero;