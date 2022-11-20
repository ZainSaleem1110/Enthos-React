import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import { Link } from 'react-router-dom'
import GoogleLogo from '../../assets/svg/google.png'
import { BsUpload } from 'react-icons/bs'

function CandidateSignup() {
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
        mobileNo: "",
        interested: "",
        techTags: "",
        linkedInLink: "",
        checkbox:false,
    })
    const [loader, setLoader] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [mobileNoError, setMobileNoError] = useState(false)
    const [interestedError, setInterestedError] = useState(false)
    const [techTagsError, setTechTagsError] = useState(false)
    const [linkedInLinkError, setLinkedInLinkError] = useState(false)
    const [checkboxError, setCheckboxError] = useState(false)

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    const handleSignup = () => {
        if (signupData.firstName === "") {
            setFirstNameError(true)
        }
        if (signupData.lastName === "") {
            setLastNameError(true)
        }
        if (signupData.email === "") {
            setEmailError(true)
        }
        if (signupData.password === "") {
            setPasswordError(true)
        }
        if (signupData.mobileNo === "") {
            setMobileNoError(true)
        }
        if (signupData.interested === "") {
            setInterestedError(true)
        }
        if (signupData.techTags === "") {
            setTechTagsError(true)
        }
        if (signupData.linkedInLink === "") {
            setLinkedInLinkError(true)
        }
        if(signupData.checkbox === false){
            setCheckboxError(true)
        }
        if (signupData.firstName !== "" && signupData.lastName !== "" && signupData.email !== "" && signupData.password !== "" && signupData.mobileNo !== "" && signupData.interested !== "" && signupData.techTags !== "" && signupData.linkedInLink !== "" && signupData.checkbox !== false) {
            setLoader(true)
            console.log(signupData, "signupData")
        }
    }

    const handleCheckbox = (e) => {
       const checked = e.target.checked
       setSignupData({...signupData,checkbox:checked})
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            setSignupData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                country: "",
                mobileNo: "",
                interested: "",
                techTags: "",
                linkedInLink: "",
                checkbox: false,
            })
        }, 2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])

    return (
        <>
            <Navbar />
            <div className="row d-flex justify-content-center my-5">
                <div className="col-lg-5 col-md-7 col-12 d-flex justify-content-center px-5">
                    <div className="h-100 w-100">
                        <h1 className="text-center" style={{ fontSize: "40px", color: "#143975" }}>Create Account</h1>
                        <button className="w-100 banner_btn mb-2 mt-4 candidate-btn"
                            style={{ background: "#54A8C4", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }}>
                            Continue with Google
                            <div className="d-flex justify-content-center align-items-center rounded-circle" style={{ position: "absolute", top: "0px", left: "0px", width: "45px", height: "45px", background: "white" }}>
                                <img src={GoogleLogo} alt="" />
                            </div>
                        </button>
                        <div className="d-flex align-items-center gap-3 w-full px-5">
                            <div className="divider w-50" style={{ height: "2px", background: "#BDBDBD" }}></div>
                            <p className="mt-3" style={{ color: "#BDBDBD" }}>or</p>
                            <div className="divider w-50" style={{ height: "2px", background: "#BDBDBD" }}></div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-6 col-12">
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="First Name" name="firstName" onChange={(e) => { handleChange(e) }} onFocus={()=>{setFirstNameError(false)}} value={signupData.firstName} />
                                {firstNameError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className="col-sm-6 col-12 mt-sm-0 mt-4">
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="Last Name" name="lastName" onChange={(e) => { handleChange(e) }} onFocus={()=>{setLastNameError(false)}} value={signupData.lastName} />
                                {lastNameError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="E-Mail" name="email" onChange={(e) => { handleChange(e) }} onFocus={()=>{setEmailError(false)}} value={signupData.email} />
                            {emailError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Password" name="password" onChange={(e) => { handleChange(e) }} onFocus={()=>{setPasswordError(false)}} value={signupData.password} />
                            {passwordError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className="candidate-btn w-100 formInp mt-5 mb-3">
                            <button className="btn w-100 dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#4F4F4F",border:"none",outline:"none" }}>
                                Country
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item">Action</p>
                                <p className="dropdown-item">Another action</p>
                                <p className="dropdown-item">Something else here</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className="formInp w-100 candidate-btn d-flex justify-content-between align-items-center" style={{ color: "#4F4F4F" }}>
                                <div className="px-3 h-100 d-flex align-items-center">
                                    +995
                                </div>
                                <input className="px-3 w-100 formInp" placeholder="Mobile" style={{ border: " none", background: "transparent" }} name="mobileNo" onChange={(e) => { handleChange(e) }} onFocus={()=>{setMobileNoError(false)}} value={signupData.mobileNo} />
                            </div>
                            {mobileNoError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="I am interested in" name="interested" onChange={(e) => { handleChange(e) }} onFocus={()=>{setInterestedError(false)}} value={signupData.interested} />
                            {interestedError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Tech Tags" name="techTags" onChange={(e) => { handleChange(e) }} onFocus={()=>{setTechTagsError(false)}} value={signupData.techTags} />
                            {techTagsError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <label for="file-input" className="d-flex justify-content-between w-100 align-items-center candidate-btn mt-5 mb-3 formInp px-3" style={{ cursor: "pointer" }}>
                            <span style={{ color: "#4F4F4F" }}>Upload Resume</span>
                            <BsUpload className='text-dark' />
                            <input className="" type="file" style={{ border: "none", background: "transparent", display: "none" }} id="file-input" placeholder="Upload Resume" />
                        </label>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="LinkedIn Link" name="linkedInLink" onChange={(e) => { handleChange(e) }} onFocus={()=>{setLinkedInLinkError(false)}} value={signupData.linkedInLink} />
                            {linkedInLinkError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mt-2'>
                        <div className="w-100 px-3 d-flex align-items-center remember">
                            <input className="checkbox" type="checkbox" style={{ width: "18px", height: "18px" }} checked={signupData.checkbox} onClick={(e)=>{
                                handleCheckbox(e)
                                setCheckboxError(false)
                                }} />
                            <label for="" className="font-500 mx-2">Yes, I understand and Agree to the Terms of Service</label>
                        </div>
                        {checkboxError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <button className="banner_btn mt-4 candidate-btn w-100"
                            style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleSignup} disabled={loader === true ? true : false}>
                            <span>Sign In</span>
                            {loader === true && (
                                <div class="spinner-border ms-3" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            )}
                        </button>
                        <p className="font-500 text-center mt-2" style={{ fontSize: "18px" }}>Already have account?<span>
                            <Link to="/candidate-login" className="Link" style={{ color: "#54A8C4" }}> Log in</Link>
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer />
        </>
    )
}

export default CandidateSignup