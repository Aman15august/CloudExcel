import React from 'react'
import Image from 'next/image'
import { IoMdHome} from 'react-icons/Io';
import {AiOutlineFileDone,AiOutlineCloud} from 'react-icons/Ai';
import {HiOutlineInbox} from 'react-icons/Hi';


const Applyus = () => {
  return (
    <div className='about'>
      <section className="pt-4 pt-md-5">

        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5"><Image className="Apply img-fluid mb-5 " src="/images/1.png" alt="" height="600px" width="520px" /></div>
            <div className="col-lg-6">
              <h2 className='text-light font_services'> Making The Web a Better Place</h2>
              <p className="lead text-muted mb-3"> Its no secret that big software companies occasionally harbour big security holes. This jeopardizes everyone data from personal information to finances.</p>
              <p className="lead text-muted mb-3"> If you have a knack for finding bugs and want to use your talent for good instead of evil both Google and Facebook are open to paying you for the bounties you find.</p>
              <div className="row">
                <div className="col-6 pt-5"> <IoMdHome className='Io'/> <br/>
                  <h5 className='text-light font_services'>Marketing Strategy</h5>
                  <p className="text-muted mb-0">A marketing strategy refers to a business overall game plan for reaching consumers</p>
                </div>
                <div className="col-6 pt-5"><AiOutlineFileDone className="Io"/>
                  <h5  className='text-light font_services'>Marketing Articles</h5>
                  <p className="text-muted mb-0">Marketing articles to help you at every stage of your entrepreneurial journey. </p>
                </div>
                <div className="col-6 pt-5"><HiOutlineInbox className="Io" />
                  <h5  className='text-light font_services'>Marketing Resources</h5>
                  <p className="text-muted mb-0">Social media marketing is one of the most popular types of marketing strategies</p>
                </div>
                <div className="col-6 pt-5"><AiOutlineCloud className="Io"/>
                  <h5  className='text-light font_services'>Cloud Services</h5>
                  <p className="text-muted mb-0">Is designed to make it easy for you to start planning your Internet marketing strategy </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Applyus