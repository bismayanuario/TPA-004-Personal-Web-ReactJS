import React, {useEffect} from 'react'
import './About.css'
import AOS from 'aos'
import Yousaf from '../../pic/bismaa.jpg'
import 'aos/dist/aos.css'

function About() {
    useEffect(() => {
        AOS.init({duration: 2500})
    }, [])
    return(
        <div className="w-100 about" id='about'>
            <div className='container ' >
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 aboutImagePart' data-aos="fade-right">
                        <img src={Yousaf} alt="Yousaf"></img>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 text-light aboutTextPart' data-aos="fade-left">
                        <div>
                            <h3 className="welcome">
                                Hello, I Am Yanuario Bisma Jonathan
                            </h3> <br />
                            <p>
                            Saya berasal dari Bandung, Jawa Barat. Saat ini saya fokus untuk memperdalam React Framework. Jika ingin lebih tahu tentang saya
                            Silahkan kunjungi LinkedIn saya <a href="https://www.linkedin.com/in/yanuario-bisma-jonathan-/"> disini</a>
                            </p>
                           
                            <button className='btn downloadcvbtn mt-3'  > <a href='https://drive.google.com/file/d/1mjazahsIJxOrrzy8ZjoY2pV9yiLA6yrm/view?usp=sharing'>Download CV</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;