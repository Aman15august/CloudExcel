import React from 'react'
import Image from 'next/image'
import { AiOutlineAlibaba } from 'react-icons/Ai';


const About = () => {
  return (
    
         <section className="about d-flex align-items-center text-light py-5" id="about">
        <div className="container  " >
            <div className="row d-flex align-items-center ">
                <div className="aboutfont col-lg-7" data-aos="fade-right">
                    <h3 className='green'> <AiOutlineAlibaba/> About us </h3>
                    <h1 className='font_services'>We are top internet <br/> service company</h1>
                    <p className="py-2 para-light"> Aman ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>
                    <p className="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>

                    <div className="my-3">
                        <a className="btn btn-success " href="#your-link">Learn More</a>
                    </div>
                </div>
                <div className="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down"> 
                    <Image className="img-fluid" src="/images/about.jpg" alt="about" width="520px" height="550px" />
                </div>
            </div> 
        </div>
    </section>
    
  )
}

export default About