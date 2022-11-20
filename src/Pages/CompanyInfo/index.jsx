import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import CompanyListing from '../../Components/companyListing';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import CompanyLogo from "../../assets/svg/company-1.png"

const noOfData = [1, 2, 3]

const Index = () => {
    const [companyInfo, setCompanyInfo] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="px-sm-5 pt-5 px-2">
                <div className='px-5'>
                    <div className="d-flex align-items-center gap-2 px-5">
                        <img  src={CompanyLogo} alt="" />
                        <h1 className="mb-0" style={{ color: "#143975" }}>Company Name</h1>
                    </div>
                    <div className='mt-4 px-5'>
                        {companyInfo === false ? (
                            <div className="d-flex align-items-center gap-3 mt-3">
                                <span>Company information</span>
                                <IoIosArrowDown onClick={() => { setCompanyInfo(true) }} />
                            </div>
                        ) : (
                            <div className="mt-3">
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry'sorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </span>
                                <span className='ms-4'>
                                    <IoIosArrowUp onClick={() => { setCompanyInfo(false) }} />
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-5 font-500">
                        <button className="dropdown d-flex align-items-center justify-content-between px-4">
                            <span>Categories</span>
                            <IoIosArrowDown />
                        </button>
                        <button className="dropdown d-flex align-items-center justify-content-between px-4">
                            <span>Full Time</span>
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-sm-5 px-4 mt-3">
                <div className='px-4'>
                    <div style={{ borderTop: "2px solid #BDBDBD" }}>
                        {noOfData.map((items) => {
                            return <CompanyListing tagBgColor="#E1E1E1" tagTextColor="#4F4F4F" borderColor="#BDBDBD" applyIcon="#FFB53B" cartIcon="#2BB19D" />
                        })}
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <button style={{color: "#FFB538", border: "2px solid #FFB538"}} className="d-flex justify-content-center align-items-center pagination">1</button>
                    <button className="d-flex justify-content-center align-items-center pagination">2</button>
                    <button className="d-flex justify-content-center align-items-center pagination">3</button>
                </div>
            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer />
        </div>
    );
}

export default Index;
