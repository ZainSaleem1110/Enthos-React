import React from 'react'
import AuthNavbar from '../../../Components/AuthNavbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import { Link } from 'react-router-dom'
import Location from '../../../assets/svg/location.png'

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
                        <div className="d-flex align-items-center">
                            <Link to="/profile" className="Link px-3" style={{color: "#143975"}}>Save</Link>
                            <Link to="/profile"className="Link px-3" style={{color: "#143975"}}>Cancel</Link>
                        </div>
                    </div>
                    <div className="d-flex mt-3 px-3 row">
                        <div className="col-md-3 col-12 d-flex justify-content-center align-items-center px-4">
                            <div className="col-12">
                                <div style={{height: "249px", background: "#C4C4C4"}}></div>
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="E-Mail" />
                                <div className="formInp w-100 candidate-btn d-flex justify-content-between align-items-center mt-2"
                                    style={{color: "#4F4F4F"}}>
                                    <div className="px-3 h-100 d-flex align-items-center">
                                        +995
                                    </div>
                                    <input className="px-3 w-100 formInp" placeholder="Mobile"
                                        style={{border: "none",background: "transparent"}} />
                                </div>
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="LinkedIn Link" />
                            </div>
                        </div>
                        <div className="col-md-7 col-12 px-4 mt-md-0 mt-2">
                            <div className="col-12">
                                <input className="w-100 formInp px-3" type="text" placeholder="First Name / Last Name" />
                                <div className="formInp w-100 candidate-btn d-flex justify-content-between align-items-center mt-2"
                                    style={{color: "#4F4F4F"}}>
                                    <div className="px-3 h-100 d-flex align-items-center">
                                        <img src={Location} alt="" />
                                    </div>
                                    <input className="px-1 w-100 formInp" placeholder="Location"
                                        style={{border: "none",background: "transparent"}} />
                                </div>
                                <textarea style={{minHeight: "305px",fontSize: "20px"}}
                                    className="candidate-btn mt-2 px-3 pt-2 w-100 formInp font-500"
                                    placeholder="Job Key Requirements">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry. </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-4">
                    <p className="growing px-3"
                        style={{fontSize: "35px",color: "#143975", borderBottom: "1px solid #BDBDBD",width: "300px"}}>
                        Preferences</p>
                    <div className="px-sm-3 px-1 mt-3">
                        <div className="w-100 row">
                            <div className="col-lg-2 col-6 mt-3">
                                <span style={{fontSize: "20px"}}>I am Interested in:</span>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12">
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="Job Title" />
                            </div>
                            <div className="col-lg-5 col-12 d-flex align-items-center flex-wrap mt-2" style={{columnGap: "10px"}}>
                                {InterestedTags.length && InterestedTags.map((tags) => {
                                    return <p className="font-500 px-2 d-flex align-items-center" style={{ fontSize: "18px", background: "#E1E1E1", borderRadius: "15px" }}>
                                        {tags}
                                    </p>
                                })}
                            </div>
                        </div>
                        <div className="w-100 row">
                            <div className="col-lg-2 col-6 mt-3">
                                <span style={{fontSize: "20px"}}>Tech Tags</span>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12">
                                <input className="w-100 mt-2 formInp px-3" type="text" placeholder="Tech Tags" />
                            </div>
                            <div className="col-lg-5 col-12 d-flex align-items-center flex-wrap mt-2" style={{columnGap: "10px"}}>
                                {TechTags.length && TechTags.map((items) => {
                                    return <p className="font-500 px-2 d-flex align-items-center" style={{ fontSize: "18px", background: "#E1E1E1", borderRadius: "15px" }}>
                                        {items}
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
