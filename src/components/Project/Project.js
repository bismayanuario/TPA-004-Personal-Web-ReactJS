import React, {useEffect} from 'react'
import './Project.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import webDev from '../../pic/Product.jpg'
import vbaExcel from '../../pic/sistemPKL.png'
import design from '../../pic/Home.jpg'
import { Form } from 'react-bootstrap'

function Project() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='services p-5' id='project'>
            <div className='myServiceText pt-5'>
                <h3>MY <span>PROJECTS</span></h3> <br />
                <hr />
            </div>
            <div className='container text-center mt-5'>
                <div className='row gx-2'>
                    <div className='col-12 col-md-6 col-lg-4  p-3' data-aos="fade-right">
                        <div className='border px-4 py-5 project'>
                            <div className='row'>
                                <img src={webDev}></img>
                            </div>
                            <div className='row'>
                            <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faCode} /></span></p>
                            <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                            <p>Website AIMPROVE merupakan sebuah digital platform yang membantu dalam pengembangan skills yang dibutuhkan, serta informasi mengenai student exchange yang dapat membantu para pengguna dalam mengetahui informasi student exchange.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-up">
                        <div className='border px-4 py-5 project'>
                            <div className='row'>
                                <img src={vbaExcel}></img>
                            </div>
                            <div className='row'>
                            <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faFileExcel} /></span></p>
                            <h5 className='mt-4'>VBA EXCEL</h5>
                            <p>Sistem penjadwalan PKL ini merupakan sistem yang akan memudahkan bagi pelajar untuk mendaftarkan diri di STMIK BANDUNG.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border px-4 py-5 project'>
                            <div className='row'>
                                <img src={design}></img>
                            </div>
                            <div className='row'>
                            <p className='serviceIcon'><span className='border p-2'><FontAwesomeIcon icon={faPen} /></span></p>
                            <h5 className='mt-4'>UI/UX DESIGNER</h5>
                            <p>Desain UI/UX ini merupakan sebuah desain pada project yang sedang dijalankan, yaitu project Studi Independen Skilvul dengan Challenge Partner ASEAN YOUTH ORGANIZATION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;