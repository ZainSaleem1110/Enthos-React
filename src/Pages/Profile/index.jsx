import React from 'react'
import AuthNavbar from '../../Components/AuthNavbar'
import Banner from '../../Components/Banner'
import Footer from '../../Components/Footer'
import {MdOutlineClose} from 'react-icons/md'
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Location from "../../assets/svg/location.png"

const InterestedTags = ["Technical Support Analyst", "Application Administrator", "Application Support Analyst", "System Administrator", "Technical Support Engineer"]

const TechTags = ["Active Directory", "SQL Server", "Windows Server", "Apache Tomcat"]

export default function index() {
    return (
        <div>
            <AuthNavbar />
            <div className="p-sm-5 py-5 px-2 w-100">
                <div className="w-100 pb-5" style={{ borderBottom: "2px solid #BDBDBD", }}>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <p className="text-center growing px-3"
                            style={{ fontSize: "35px", color: "#143975", borderBottom: "1px solid #BDBDBD", }}>My
                            Profile</p>
                        <Link to="edit-profile" className="d-flex align-items-center" style={{ color: "#FFB538",cursor:"pointer" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="d-flex align-items-start mt-3 px-3 row">
                        <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center px-4 mt-3">
                            <div className="col-12">
                                <div style={{ height: "249px", background: "#C4C4C4", }}></div>
                                <div className="d-flex align-items-center mt-4">
                                    <AiOutlineMail style={{ color: "#30ACB6", }}/>
                                    <span className="px-2 font-500" style={{ color: "#4F4F4F", }}>teklavasadze@gmail.com</span>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <BsTelephone style={{ color: "#30ACB6", }}/>
                                    <span className="px-2 font-500" style={{ color: "#4F4F4F", }}>+995 599132862</span>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <AiFillLinkedin style={{ color: "#30ACB6", }}/>
                                    <span className="px-2 font-500" style={{ color: "#4F4F4F", }}>LinkedIn Link</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 px-lg-4 mt-lg-0 mt-4">
                            <div className="col-12 d-flex flex-column justify-content-between">
                                <p className="w-100 px-3 success" style={{ fontSize: "30px" }}>First Name / Last Name</p>
                                <div className="w-100 d-flex justify-content-between align-items-center mt-2"
                                    style={{ color: "#4F4F4F", }}>
                                    <div className="px-3 d-flex align-items-center">
                                        <img src={Location} alt="" />
                                    </div>
                                    <span className="px-1 w-100 font-500"
                                        style={{ fontSize: "20px", }}>Location</span>
                                </div>
                                <span style={{ fontSize: "20px", }}
                                    className="mt-2 px-3 pt-2 w-100 font-500"
                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 px-4">
                            <div className="mb-5">
                                <button className="mt-4 w-100" style={{ height: "45px", border: "2px solid #FFB538", background: "none", borderRadius: "20px", color: "#FFB538", }}>View your Resume</button>
                                <button className="mt-4 w-100" style={{ height: "45px", border: "2px solid #FFB538", background: "none", borderRadius: "20px", color: "#FFB538", }}>Upload new Resume</button>
                            </div>
                            <div className="mt-2">
                                <button className="mt-4 w-100" style={{ height: "45px", background: "#FFB538", borderRadius: "20px", color: "white", border: "none", }}>Match Your Resume</button>
                            </div>
                            <div className="d-flex justify-content-center mt-3 ">
                                <Link to="/profile/change-pass" className="Link text-center w-100" style={{ color: "#143975", }}>Change my Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-4">
                    <p className="growing px-3"
                        style={{ fontSize: "35px", color: "#143975", borderBottom: "1px solid #BDBDBD", width: "300px" }}>
                        Preferences</p>
                    <div className="px-sm-3 px-1 mt-3">
                        <div className="w-100 row">
                            <div className="col-lg-2 col-6 mt-3">
                                <span style={{fontSize: "20px"}}>I am Interested in:</span>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="Job Title" />
                            </div>
                            <div className="col-lg-6 col-12 d-flex align-items-center flex-wrap mt-2" style={{columnGap: "7px"}}>
                                {InterestedTags.length && InterestedTags.map((tags) => {
                                    return <p className="font-500 px-2 d-flex align-items-center" style={{ fontSize: "18px", background: "#E1E1E1", borderRadius: "15px" }}>
                                        {tags}
                                        <span className='ms-3'>
                                            <MdOutlineClose/>
                                        </span>
                                    </p>
                                })}
                            </div>
                        </div>
                        <div className="w-100 row">
                            <div className="col-lg-2 col-6 mt-3">
                                <span style={{fontSize: "20px"}}>Tech Tags</span>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="Job Title" />
                            </div>
                            <div className="col-lg-6 col-12 d-flex align-items-center flex-wrap mt-2" style={{ columnGap: "7px" }}>
                                {TechTags.length && TechTags.map((items) => {
                                    return <p className="font-500 px-2 d-flex align-items-center" style={{ fontSize: "18px", background: "#E1E1E1", borderRadius: "15px" }}>
                                        {items}
                                        <span className='ms-3'>
                                            <MdOutlineClose/>
                                        </span>
                                    </p>
                                })}
                            </div>
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
