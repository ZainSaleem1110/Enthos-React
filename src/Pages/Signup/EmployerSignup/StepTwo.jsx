import React, { useState, useEffect } from 'react'
import Navbar from '../../../Components/Navbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { BsUpload } from 'react-icons/bs'

export default function StepTwo() {
    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        websiteURL: "",
        companyName: "",
        linkedInLink: "",
        companyInfo: "",
    })
    const [loader, setLoader] = useState(false)
    const [websiteURLError, setWebsiteURLError] = useState(false)
    const [companyNameError, setCompanyNameError] = useState(false)
    const [linkedInLinkError, setLinkedInLinkError] = useState(false)
    const [companyInfoError, setCompanyInfoError] = useState(false)

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    const handleSignup = () => {
        if (signupData.websiteURL === "") {
            setWebsiteURLError(true)
        }
        if (signupData.companyName === "") {
            setCompanyNameError(true)
        }
        if (signupData.companyInfo === "") {
            setCompanyInfoError(true)
        }
        if (signupData.linkedInLink === "") {
            setLinkedInLinkError(true)
        }
        if (signupData.websiteURL !== "" && signupData.companyName !== "" && signupData.linkedInLink !== "" && signupData.companyInfo !== "") {
            setLoader(true)
            console.log(signupData, "signupData")
        }
    }

    useEffect(() => {
        if (loader === true) {
            setTimeout(() => {
                setLoader(false)
                setSignupData({
                    websiteURL: "",
                    companyName: "",
                    linkedInLink: "",
                    companyInfo: "",
                })
                navigate('/employer-signup-step-3')
            }, 2000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])
    return (
        <div>
            <Navbar />
            <div class="row d-flex justify-content-center my-5">
                <div class="col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center pb-5 px-5" style={{ borderBottom: "2px solid #BDBDBD" }}>
                    <div class="d-flex align-items-center w-100 mb-5 pb-5">
                        <div style={{ position: "relative" }}>
                            <div class="d-flex justify-content-center align-items-center rounded-circle"
                                style={{ width: "60px", height: "60px", border: "2px solid #FFB538" }}>1</div>
                            <p style={{ position: "absolute", bottom: "-50px", left: "0px", width: "150px" }}>Sign up</p>
                        </div>
                        <div class="divider" style={{ width: "170px", height: "2px", background: "#FFB538" }}></div>
                        <div style={{ position: "relative" }}>
                            <div class="d-flex justify-content-center align-items-center rounded-circle"
                                style={{ width: "60px", height: "60px", border: "2px solid #FFB538" }}>2</div>
                            <p style={{ position: "absolute", bottom: "-50px", left: "-20px", width: "150px" }}>Create Profile</p>
                        </div>
                        <div class="divider" style={{ width: "170px", height: "2px", background: "#54A8C4" }}></div>
                        <div style={{ position: "relative" }}>
                            <div class="d-flex justify-content-center align-items-center rounded-circle"
                                style={{ width: "60px", height: "60px", border: "2px solid #54A8C4" }}>3</div>
                            <p style={{ position: "absolute", bottom: "-50px", left: "-30px", width: "150px" }}>Post Job Globally</p>
                        </div>
                    </div>
                    <div class="h-100 w-100">
                        <h1 class="text-center success mb-3" style={{ fontSize: "35px", color: "#143975" }}>Create Company Profile</h1>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Website URL" name="websiteURL" onChange={(e) => { handleChange(e) }} onFocus={() => { setWebsiteURLError(false) }} value={signupData.websiteURL} />
                            {websiteURLError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Company Name" name="companyName" onChange={(e) => { handleChange(e) }} onFocus={() => { setCompanyNameError(false) }} value={signupData.companyName} />
                            {companyNameError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <textarea style={{ minHeight: "115px" }} onChange={(e) => { handleChange(e) }} onFocus={() => { setCompanyInfoError(false) }} value={signupData.companyInfo} name="companyInfo" class="candidate-btn px-3 pt-2 w-100 formInp"
                                placeholder="Company Information"></textarea>
                            {companyInfoError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="LinkedIn Link" name="linkedInLink" onChange={(e) => { handleChange(e) }} onFocus={() => { setLinkedInLinkError(false) }} value={signupData.linkedInLink} />
                            {linkedInLinkError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <label for="file-input" class="d-flex align-items-center justify-content-center"
                                style={{ width: "80px", height: "80px", background: " #C4C4C4", borderRadius: "10px", cursor: "pointer" }}>
                                <BsUpload />
                                <input type="file" name="" id="file-input" style={{ display: "none" }} />
                            </label>
                            <span class="mx-3">Upload Logo</span>
                        </div>
                        <button className="banner_btn mt-4 candidate-btn w-100"
                            style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleSignup} disabled={loader === true ? true : false}>
                            <span>Create</span>
                            {loader === true && (
                                <div class="spinner-border ms-3" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            )}
                        </button>
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
