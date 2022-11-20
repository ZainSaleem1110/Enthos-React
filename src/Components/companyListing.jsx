import React, { useState } from 'react';
import EmployerLogo from '../assets/svg/company-1.png'
import { BsFillLightningFill, BsCart3 } from 'react-icons/bs'

const CompanyListing = ({ tagBgColor, tagTextColor, applyIcon, cartIcon, borderColor, mainText }) => {
    const [detail, setDetail] = useState(false)

    const handleDetailPage = () => {
        setDetail(!detail)
    }

    return (
        <div className="d-flex justify-content-between align-items-start row my-2 py-3 px-1 px-lg-5" style={{ borderBottom: `2px solid ${borderColor}`, width: "100%" }}>
            <div className="col-lg-8 col-12 w-full pe-sm-5">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-3">
                    <h1 className="mb-0 font-500" style={{ fontSize: "20px" }}>Job Title - remote</h1>
                    <div className="d-flex align-items-center gap-2">
                        <img className='w-25' src={EmployerLogo} alt="" />
                        <h1 className="mb-0 font-500" style={{ fontSize: "20px" }}>Employer</h1>
                    </div>
                    <h1 className="mb-0 font-500" style={{ fontSize: "20px" }}>Salary $500.00</h1>
                    <h1 className="mb-0 font-500" style={{ fontSize: "20px" }}>Full Time</h1>
                </div>
                {detail === false ? (
                    <>
                        <p className="my-3 font-500" style={{ wordSpacing: "5px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and
                            typesetting industry. </p>
                        <div className="d-flex flex-wrap align-items-center justify-content-sm-start gap-3 justify-content-center">
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>C++</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Java</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Python</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Microservices</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Angular</p>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 class="mt-5 font-700" style={{ fontSize: "20px" }}>Employer Information</h1>
                        <p className="my-3 font-500" style={{ wordSpacing: "5px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and
                            typesetting industry. </p>
                        <h1 class="mt-5 font-700" style={{ fontSize: "20px" }}>About Job</h1>
                        <p className="my-3 font-500" style={{ wordSpacing: "5px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry.
                         </p>
                    </>
                )}
            </div>
            <div className="col-lg-4 col-12 d-flex flex-column justify-content-between align-items-center h-full mt-lg-0 mt-4">
                <div className="d-flex flex-lg-column flex-sm-row flex-column gap-3 flex-wrap align-items-lg-start align-items-center justify-content-lg-center justify-content-between">
                    <p className="px-3 my-0 d-flex justify-content-center align-items-center font-500" style={{ color: "#FFB538", height: "45px", border: "2px solid #FFB538", borderRadius: "20px", textDecoration: "none", background: "white", cursor: "pointer" }} onClick={handleDetailPage}>View detailed Job Position</p>
                    <p className="my-0 font-300">7 Days ago</p>
                    <p className="d-flex align-items-center gap-3 mt-lg-3 mb-0" style={{ color: `${mainText}`, textDecoration: "none" }}>
                        <BsFillLightningFill style={{ color: `${applyIcon}` }} />
                        <p className="mb-0 font-300">Apply now</p>
                    </p>
                    <p className="d-flex align-items-center gap-3 my-0" style={{ color: `${mainText}` }}>
                        <BsCart3 style={{ color: `${cartIcon}`, textDecoration: "none" }} />
                        <p className="mb-0 font-300">Add Job to the Cart</p>
                    </p>
                </div>
                <div>
                {detail === true ? (
                    <>
                        <div className="d-flex flex-wrap align-items-center gap-3 justify-content-center mt-5 pt-5">
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>C++</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Java</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Python</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Microservices</p>
                            <p className="px-3 d-flex justify-content-center align-items-center font-500"
                                style={{ color: `${tagTextColor}`, background: `${tagBgColor}`, height: "25px", borderRadius: "5px" }}>Angular</p>
                        </div>
                    </>
                ) : (
                    ""
                )}
                </div>
            </div>
        </div>
    );
}

export default CompanyListing;
