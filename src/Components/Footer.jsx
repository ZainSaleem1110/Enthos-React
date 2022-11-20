import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer py-5 px-5">
            <div className="mb-4 mt-5 text-white row d-flex justify-content-sm-between justify-content-center">
                <div className="col-md-3 col-12 d-flex flex-column align-items-md-start align-items-center">
                    <h1 style={{color:"#FFB538",fontSize: "25px"}}>
                        ENTHOS<span style={{color: "white"}}>TALENT</span>
                    </h1>
                    <div className="mt-4">
                        <h1 className="text-md-start text-center" style={{fontSize: "18px"}}>HEAD OFFICE</h1>
                        <p className="d-flex flex-column text-md-start text-center">
                            <span className="mt-2 font-300">
                                1920 Yonge St. 2nd Floor <br/>
                                Toronto, ON M4S 3E6
                            </span>
                            <span className="mt-3 font-300">
                                1.416.440.3362 <br/>
                                1.866.763.2528 (fax)
                            </span>
                            <span className="mt-3">
                                <p className="font-300 email">
                                    info@enthostalent.com
                                </p>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-md-0 mt-4 d-flex flex-column align-items-md-start align-items-center">
                    <h1 style={{color:"#FFB538",fontSize: "20px"}}>
                        Services
                    </h1>
                    <div className="mt-4 d-flex flex-column align-items-md-start align-items-center">
                        <h1 style={{fontSize: "18px"}} className="font-300">Employer of Record </h1>
                        <h1 style={{fontSize: "18px"}} className="font-300">Background and Reference Check </h1>
                        <h1 style={{fontSize: "18px"}} className="font-300">Asset Management</h1>
                        <h1 style={{fontSize: "18px"}} className="font-300">Recruitment Process Outsourcing</h1>
                        <h1 style={{fontSize: "18px"}} className="font-300">Global Consulting </h1>
                        <h1 style={{fontSize: "18px"}} className="font-300">Global Talent Hub </h1>
                    </div>
                </div>
                <div className="col-md-5 col-12 mt-md-0 mt-4">
                    <h1 className="text-md-start text-center" style={{color:"#FFB538",fontSize: "20px"}}>
                        Countries
                    </h1>
                    <div className="row d-flex flex-md-row flex-column justify-content-md-between align-items-md-start align-items-center">
                        <div className="mt-4 col-sm-6 col-12 d-flex flex-column align-items-md-start align-items-center">
                            <Link to="/north-macedonia" className="Link">
                            <h1  style={{fontSize: "18px"}} className="font-300">North Macedonia</h1>
                            </Link>
                            <Link to="/albania" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">Albania</h1>
                            </Link>
                            <Link to="/bosnia" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">Bosnia</h1>
                            </Link>
                            <Link to="/pakistan" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">Pakistan</h1>
                            </Link>
                            <Link to="/brazil" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">Brazil</h1>
                            </Link>
                            <Link to="/canada" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">Canada</h1>
                            </Link>
                            <Link to="/usa" className="Link">
                            <h1 style={{fontSize: "18px"}} className="font-300">USA</h1>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-12 mt-4 d-flex flex-column align-items-md-start align-items-center">
                            <h1 style={{fontSize: "18px"}} className="font-300">Privacy Statement</h1>
                            <h1 style={{fontSize: "18px"}} className="font-300">Terms and Conditions</h1>
                            <h1 style={{fontSize: "18px"}} className="font-300">GDPR</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-5" style={{width: "100%",height: "1px",background: "white"}}></div>
            <div className="text-white mt-4 d-flex flex-md-row flex-column justify-content-md-between align-items-center">
                <p style={{fontSize: "15px"}} className="font-300">2022 © <span className="font-700">ENTHOS TALENT.</span> All rights
                    reserved</p>
                <div className="mt-md-0 mt-2 d-flex justify-content-between align-items-center" style={{width: "300px"}}>
                    <p className="Link font-300">Privacy Policy</p>
                    <p className="Link font-300">Site Map</p>
                    <p className="Link font-300">Accessibility</p>
                </div>
            </div>
        </div>
    )
}
