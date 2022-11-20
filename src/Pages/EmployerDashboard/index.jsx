import React from 'react'
import AuthNavbar from '../../Components/AuthNavbar'
import Banner from '../../Components/Banner'
import Footer from '../../Components/Footer'
import DashboardOptions from '../../Components/DashboardOptions'
import JobOfferLogo from '../../assets/svg/jobOffer.png'
import ScheduledLogo from '../../assets/svg/schedule.png'
import NewPosition from '../../assets/svg/newPosition.png'
import RecommendedJobLogo from '../../assets/svg/recommended.png'
import { BiChevronDown } from 'react-icons/bi'
import CompanyListing from '../../Components/companyListing'


const Options = [
    { Img: NewPosition, Heading: "Open Positions", Count: "21" },
    { Img: ScheduledLogo, Heading: "Interviews Booked", Count: "50" },
    { Img: RecommendedJobLogo, Heading: "New Applicants", Count: "15" },
    { Img: JobOfferLogo, Heading: "Job Offers", Count: "25" },
]

const noOfData = [1, 2, 3]

const Filters = ["Job Title", "Active", "Date Posted", "Expiry Date", "Application Count", "New Applicants", "Location"]

export default function index() {
    return (
        <div>
            <AuthNavbar />
            <div className="d-flex justify-content-center align-items-center px-sm-5 px-2 mt-5 pb-5 flex-wrap" style={{ columnGap: "20px" }}>
                {Options.map((items) => {
                    return <DashboardOptions Data={items} />
                })}
                <div className="w-100 d-flex flex-md-row flex-column mt-5 justify-content-md-between justify-content-center align-items-center mb-2 pb-2"
                    style={{ borderBottom: "2px solid #BDBDBD" }}>
                    <p className="text-center growing" style={{ fontSize: "30px", color: "#143975" }}>Open Positions
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-md-0 mt-2 pe-5" style={{ columnGap: "15px" }}>
                        <div className="px-3 gap-3 d-flex align-items-center justify-content-between"
                            style={{ height: "45px", borderRadius: "20px", width: "265px", background: "white", border: "1px solid #4F4F4F" }}>
                            <div>
                                <svg style={{ color: "#4f4f4f" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <input type="text" className="w-100 h-100 pt-1" style={{ border: "none", outline: "none" }} name="" placeholder="Search Job" id="" />
                        </div>
                    </div>
                </div>
                <div className="dropdown_slider" style={{ width: "100%", overflow: "auto" }}>
                    <div className="d-flex gap-3 mt-3 font-500" style={{ width: "1250px" }}>
                        {Filters.length && Filters.map((items) => {
                            return <button className="dropdown d-flex align-items-center justify-content-between px-4"
                                style={{ height: "45px", columnGap: "8px", width: "auto" }}>
                                <span>{items}</span>
                                <BiChevronDown style={{ fontSize: "20px" }} />
                            </button>
                        })}
                    </div>
                </div>
                <div className="pb-3 mt-4" style={{ borderTop: "2px solid #BDBDBD" }}>
                    <div className="">
                        <div className='px-4'>
                            <div>
                                {noOfData.map((items) => {
                                    return <CompanyListing tagBgColor="#E1E1E1" tagTextColor="#4F4F4F" borderColor="#BDBDBD" applyIcon="#FFB53B" cartIcon="#2BB19D" />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pb-4">
                    <button className="banner_btn" style={{ background: "#FFB538", color: "white" }}>See more</button>
                </div>

            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer />
        </div>
    )
}
