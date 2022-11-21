import React from 'react'
import AuthNavbar from '../../../Components/AuthNavbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import { BsUpload } from 'react-icons/bs'

export default function StepOne() {
    return (
        <div>
            <AuthNavbar />
            <div className="row d-flex justify-content-center my-5">
                <div className="col-lg-6 col-md-8 col-12 d-flex justify-content-center px-5 pb-5">
                    <div className="h-100 w-100">
                        <div className="d-flex align-items-center w-100 mb-5 pb-5">
                            <div style={{ position: "relative" }}>
                                <div className="d-flex justify-content-center align-items-center rounded-circle"
                                    style={{ width: "60px", height: "60px", border: "2px solid #FFB538" }}>1</div>
                                <p style={{ position: "absolute", bottom: "-50px", left: "-30px", width: "150px" }}>Upload resume</p>
                            </div>
                            <div className="divider" style={{ width: "170px", height: "2px", background: "#54A8C4" }}></div>
                            <div style={{ position: "relative" }}>
                                <div className="d-flex justify-content-center align-items-center rounded-circle"
                                    style={{ width: "60px", height: "60px", border: "2px solid #54A8C4" }}>2</div>
                                <p style={{ position: "absolute", bottom: "-50px", left: "-5x", width: "150px" }}>Add Job</p>
                            </div>
                            <div className="divider" style={{ width: "170px", height: "2px", background: "#54A8C4" }}></div>
                            <div style={{ position: "relative" }}>
                                <div className="d-flex justify-content-center align-items-center rounded-circle"
                                    style={{ width: "60px", height: "60px", border: "2px solid #54A8C4" }}>3</div>
                                <p style={{ position: "absolute", bottom: "-50px", left: "-20px", width: "150px" }}>View Results</p>
                            </div>
                        </div>
                        <div className="text-white d-flex flex-column align-items-center col-md-10 col-12">
                            <button className="banner_btn my-2 candidate-btn w-100"
                                style={{ background: "white", color: "black", height: "120px", fontSize: "25px", border: "2px solid #BDBDBD" }}>
                                <label for="file-input" className="px-3" style={{ cursor: "pointer" }}>
                                    <BsUpload />
                                    <span className='ms-3' style={{ color: "#4F4F4F" }}>Upload your resume</span>
                                </label>
                                <input className="" type="file" style={{ border: "none", background: "transparent", display: "none" }} id="file-input" placeholder="Upload Resume" />
                            </button>
                            <div className="d-flex align-items-center gap-3  w-full">
                                <div className="divider" style={{ width: "150px", height: "2px", background: "#BDBDBD" }}></div>
                                <p className="mt-3" style={{ color: "#BDBDBD" }}>or</p>
                                <div className="divider" style={{ width: "150px", height: "2px", background: "#BDBDBD" }}></div>
                            </div>
                            <button className="banner_btn my-2 candidate-btn w-100"
                                style={{ background: "white", color: "black", height: "120px", fontSize: "25px", border: "2px solid #BDBDBD" }}>
                                <label for="file-input" className="px-3" style={{ cursor: "pointer" }}>
                                    <span style={{ color: "#4F4F4F" }}>Choose from uploaded Resumes</span>
                                </label>
                                <input className="" type="file" style={{ border: "none", background: "transparent", display: "none" }} id="file-input" placeholder="Upload Resume" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer />
        </div>
    )
}
