import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import logo from '../../pic/bismaa.png'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
        <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.instagram.com/bismayanuario/"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                <a href="https://github.com/bismayanuario"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/yanuario-bisma-jonathan-/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
            </div>
            
          </Col>
        </Row>
        <div className='text-center text-white'>
            @2022 Yanuario Bisma Jonathan
        </div>
      </Container>
      </footer>
        
    )
}

export default Footer;