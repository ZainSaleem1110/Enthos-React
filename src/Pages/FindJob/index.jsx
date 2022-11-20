import React from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import CompanyListing from '../../Components/companyListing';
import { IoIosArrowDown } from 'react-icons/io'
import CompanySlider from '../../Components/CompanySlider';

const noOfData = [1, 2, 3]

const Index = () => {
    return (
        <div>
            <Navbar />
            <div className="px-lg-0 px-4 py-5 banner-content">
                <div className="text-white d-flex flex-column align-items-center">
                    <p className="mt-5 help-us font-500" style={{fontSize: "35px",fontWeight: "300"}}>Start your search</p>
                    <h1 className="connecting" style={{fontSize:"60px",fontWeight:"bolder"}}>Find your dream job</h1>
                </div>
                <div className="mt-5 d-flex flex-wrap align-items-center justify-content-center" style={{gap: "30px"}}>
                    <div className="px-3 gap-2 d-flex align-items-center justify-content-between"
                    style={{height: "40px",borderRadius: "20px",boxShadow: "2px 2px 5px #888888",width: "350px",background: "white"}}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input type="text" className="w-100 h-100" style={{border: "none",outline: "none"}} name=""
                        placeholder="Key words, company, skills..." id=""/>
                </div>
                <div className="px-3 gap-2 d-flex align-items-center justify-content-center"
                    style={{height: "40px",borderRadius: "20px",boxShadow: "2px 2px 5px #888888",width: "350px",background: "white"}}>
                    <i className="bi bi-geo-alt"></i>
                    <input type="text" className="w-50 h-100" style={{border: "none",outline: "none"}} name=""
                        placeholder="Jobs by Locations" id=""/>
                </div>
                <div className="px-3 gap-2 d-flex align-items-center justify-content-center"
                    style={{height: "40px",borderRadius: "20px",width: "350px",background: "#FFB538"}}>
                    <div className="d-flex justify-content-center align-items-center text-white">
                        Find jobs
                    </div>
                </div>
                </div>
                <div className="mt-5 pb-5 d-flex flex-wrap align-items-center justify-content-center" style={{gap: "30px"}}>   
                <div className="px-3 gap-2 d-flex align-items-center justify-content-center"
                    style={{height: "40px" ,borderRadius: "20px",width: "300px",background: "white",color: "#4F4F4F"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        Date
                    </div>
                </div>
                <div className="px-3 gap-2 d-flex align-items-center justify-content-center"
                    style={{height: "40px" ,borderRadius: "20px",width: "300px",background: "white",color: "#4F4F4F"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        Type
                    </div>
                </div>
                <div className="px-3 gap-2 d-flex align-items-center justify-content-center"
                    style={{height: "40px" ,borderRadius: "20px",width: "300px",background: "white",color: "#4F4F4F"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        Clear filters
                    </div>
                </div>
                </div>
            </div>
            <CompanySlider/>
            <div className="px-sm-5 px-2">
                <div className='px-5'>
                    <div className="d-flex justify-content-end gap-3 font-500">
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
