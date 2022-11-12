import React from 'react'
import './Home.css'
import Yousaf from '../../pic/bismaaa.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import { Typewriter } from "react-simple-typewriter"


function Home() {
    return( 
        <div className="w-100 home" id='home'>
            <div className='container' >
                <div className='row pt-5' >
                    <div className='col-12 col-md-6 col-lg-6 text-light homeTextPart' >
                        <div>
                            <h3 className="welcome">
                            WELCOME TO MY WORLD
                            </h3> <br />
                            <h1>
                              Hi, I’m <span>Yanuario Bisma Jonathan</span>
                            </h1>
                            <h2>
                              a
                              <span>
                                <Typewriter words={[" Front End Developer "]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                              </span>
                            </h2>
                            <br/>
                            <div className='icons'>
                                <a href="https://www.instagram.com/bismayanuario/"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                                <a href="https://github.com/bismayanuario"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                                <a href="https://www.linkedin.com/in/yanuario-bisma-jonathan-/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 imagePart'>
                        <img src={Yousaf} alt="Yousaf"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;