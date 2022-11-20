import React, { useState, useEffect } from 'react'
import Navbar from '../../../Components/Navbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import CountriesList from '../../../Components/CountriesList'
import { useNavigate } from 'react-router-dom'

export default function StepThree() {
    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        jobTitle: "",
        keyRequirements: "",
        salary: "",
        skillTags: "",
        responsibilities: "",
        jobRequirements: "",
        niceToHave: "",
        benefits: "",
    })
    const [loader, setLoader] = useState(false)
    const [jobTitleError, setJobTitleError] = useState(false)
    const [keyRequirementsError, setKeyRequirementsError] = useState(false)
    const [salaryError, setSalaryError] = useState(false)
    const [skillTagsError, setSkillTagsError] = useState(false)
    const [responsibilitiesError, setResponsibilitiesError] = useState(false)
    const [jobRequirementsError, setJobRequirementsError] = useState(false)
    const [niceToHaveError, setNiceToHaveError] = useState(false)
    const [benefitsError, setBenefitsError] = useState(false)

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    const handleSignup = () => {
        if (signupData.jobTitle === "") {
            setJobTitleError(true)
        }
        if (signupData.keyRequirements === "") {
            setKeyRequirementsError(true)
        }
        if (signupData.salary === "") {
            setSalaryError(true)
        }
        if (signupData.skillTags === "") {
            setSkillTagsError(true)
        }
        if (signupData.responsibilities === "") {
            setResponsibilitiesError(true)
        }
        if (signupData.jobRequirements === "") {
            setJobRequirementsError(true)
        }
        if (signupData.niceToHave === "") {
            setNiceToHaveError(true)
        }
        if (signupData.benefits === "") {
            setBenefitsError(true)
        }
        if (signupData.jobTitle !== "" && signupData.keyRequirements !== "" && signupData.salary !== "" && signupData.skillTags !== "" && signupData.responsibilities !== "" && signupData.jobRequirements !== "" && signupData.niceToHave !== "" && signupData.benefits !== "") {
            setLoader(true)
            console.log(signupData, "signupData")
        }
    }

    useEffect(() => {
        if (loader === true) {
            setTimeout(() => {
                setLoader(false)
                setSignupData({
                    jobTitle: "",
                    keyRequirements: "",
                    salary: "",
                    skillTags: "",
                    responsibilities: "",
                    jobRequirements: "",
                    niceToHave: "",
                    benefits: "",
                })
                navigate('/employer-dashboard')
            }, 2000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])

    return (
        <div>
            <Navbar />
            <div class="row my-5 px-sm-5 px-0">
                <div className='col-12 d-flex justify-content-center px-sm-5 px-3'>
                    <div class="col-12 d-flex flex-column align-items-center pb-5 px-5" style={{ borderBottom: "2px solid #BDBDBD" }}>
                        <div className="col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center">
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
                                <div class="divider" style={{ width: "170px", height: "2px", background: "#FFB538" }}></div>
                                <div style={{ position: "relative" }}>
                                    <div class="d-flex justify-content-center align-items-center rounded-circle"
                                        style={{ width: "60px", height: "60px", border: "2px solid #FFB538" }}>3</div>
                                    <p style={{ position: "absolute", bottom: "-50px", left: "-30px", width: "150px" }}>Post Job Globally</p>
                                </div>
                            </div>
                            <h1 className="text-center help-us" style={{ fontSize: "40px", color: "#143975" }}>Post your Jobs Globally
                            </h1>
                            <div className='mb-3 w-100'>
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="Choose a Job Title" name="jobTitle" onChange={(e) => { handleChange(e) }} onFocus={() => { setJobTitleError(false) }} />
                                {jobTitleError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <textarea style={{ minHeight: "115px" }} className="candidate-btn px-3 pt-2 w-100 formInp" name="keyRequirements" onChange={(e) => { handleChange(e) }} onFocus={() => { setKeyRequirementsError(false) }}
                                    placeholder="Job Key Requirements - 5 or less lines"></textarea>
                                {keyRequirementsError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="Salary" name="salary" onChange={(e) => { handleChange(e) }} onFocus={() => { setSalaryError(false) }} />
                                {salaryError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className="candidate-btn w-100 mb-3 formInp">
                                <button
                                    className="btn w-100 dropdown-toggle d-flex justify-content-between align-items-center"
                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" style={{ color: "#4F4F4F", border: "none", outline: "none" }}>
                                    Full Time
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p className="dropdown-item">Action</p>
                                    <p className="dropdown-item">Another action</p>
                                    <p className="dropdown-item">Something else here</p>
                                </div>
                            </div>
                            <div className='mb-3 w-100'>
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="Key Skills Tags" name="skillTags" onChange={(e) => { handleChange(e) }} onFocus={() => { setSkillTagsError(false) }} />
                                {skillTagsError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <textarea style={{ minHeight: "115px" }} className="candidate-btn px-3 pt-2 w-100 formInp"
                                    placeholder="Roles and Responsibilities" onChange={(e) => { handleChange(e) }} onFocus={() => { setResponsibilitiesError(false) }} name="responsibilities"></textarea>
                                {responsibilitiesError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <textarea style={{ minHeight: "115px" }} className="candidate-btn px-3 pt-2 w-100 formInp"
                                    placeholder="Job Requirements" onChange={(e) => { handleChange(e) }} onFocus={() => { setJobRequirementsError(false) }} name="jobRequirements"></textarea>
                                {jobRequirementsError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <textarea style={{ minHeight: "115px" }} className="candidate-btn px-3 pt-2 w-100 formInp" onChange={(e) => { handleChange(e) }} onFocus={() => { setNiceToHaveError(false) }}
                                    placeholder="Nice to Have" name="niceToHave"></textarea>
                                {niceToHaveError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className='mb-3 w-100'>
                                <textarea style={{ minHeight: "115px" }} className="candidate-btn px-3 pt-2 w-100 formInp" onChange={(e) => { handleChange(e) }} onFocus={() => { setBenefitsError(false) }}
                                    placeholder="Benefits" name="benefits"></textarea>
                                {benefitsError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                        </div>
                        <div className="col-12 d-flex flex-column align-items-center pb-5">
                            <p className="col-lg-6 col-md-8 col-12 pt-3 font-500">Select a Country/Countries to post a Job:</p>
                            <CountriesList ImgSize="50px" />
                        </div>
                        <div className="col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center">
                            <button className="banner_btn mt-4 candidate-btn w-100 d-flex align-items-center justify-content-center"
                                style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleSignup} disabled={loader === true ? true : false}>
                                <span>Post Your Jobs Globally</span>
                                {loader === true && (
                                    <div class="spinner-border ms-3" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                )}
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
