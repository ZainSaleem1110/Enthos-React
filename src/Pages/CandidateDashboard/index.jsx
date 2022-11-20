import React from 'react'
import AuthNavbar from '../../Components/AuthNavbar'
import DashboardOptions from '../../Components/DashboardOptions'
import JobOfferLogo from '../../assets/svg/jobOffer.png'
import ScheduledLogo from '../../assets/svg/schedule.png'
import JobAppliedLogo from '../../assets/svg/jobApplied.png'
import RecommendedJobLogo from '../../assets/svg/recommended.png'
import CompanyListing from '../../Components/companyListing'
import ScheduleTable from '../../Components/ScheduleTable'
import Banner from '../../Components/Banner'
import Footer from '../../Components/Footer'
import ShortCall from '../../assets/svg/shortCall.png'
import InterviewLogo from '../../assets/svg/Interview.png'
import TestLogo from '../../assets/svg/Test.png'

const Options = [
    { Img: JobOfferLogo, Heading: "Job Offers", Count: "15" },
    { Img: ScheduledLogo, Heading: "Scheduled Activities", Count: "50" },
    { Img: JobAppliedLogo, Heading: "Jobs Applied", Count: "25" },
    { Img: RecommendedJobLogo, Heading: "Recommended  Jobs", Count: "21" },
]

const noOfData = [1, 2]

export default function index() {
    return (
        <div>
            <AuthNavbar />
            <div className="d-flex justify-content-center align-items-center px-sm-5 px-2 mt-5 pb-5 flex-wrap" style={{ columnGap: "20px" }}>
                {Options.map((items) => {
                    return <DashboardOptions Data={items} />
                })}
            </div>
            <div className="p-sm-5 py-5">
                <h1 className="my-3 mx-5 pb-2 pe-5" style={{ fontSize: "30px", color: "#143975", borderBottom: "2px solid #BDBDBD", width: "fit-content" }}>Job Offers</h1>
                <div className="px-sm-5 px-4 mt-3">
                    <div className='px-4'>
                        <div>
                            {noOfData.map((items) => {
                                return <CompanyListing tagBgColor="#E1E1E1" tagTextColor="#4F4F4F" borderColor="#BDBDBD" applyIcon="#FFB53B" cartIcon="#2BB19D" />
                            })}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-3 pb-4">
                    <button className="banner_btn" style={{ background: "#FFB538", color: "white" }}>See more</button>
                </div>
            </div>
            <div className="px-sm-5 pt-2 px-0 pb-5">
                <div className='px-5'>
                    <p className="growing pe-sm-5 pe-0"
                        style={{ fontSize: "30px", color: "#143975", borderBottom: "2px solid #BDBDBD", width: "fit-content" }}>
                        Scheduled Activities
                    </p>
                    <div>
                        <div className="d-flex align-items-start flex-md-row flex-column mt-4">
                            <div className="d-flex align-items-center mt-3 ms-sm-5 ms-0" style={{ width: "200px" }}>
                                <img src={ShortCall} alt="" />
                                <p className="m-0 ps-3">Short Call</p>
                            </div>
                            <ScheduleTable />
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-start flex-md-row flex-column mt-4">
                            <div className="d-flex align-items-center mt-3 ms-sm-5 ms-0" style={{ width: "200px" }}>
                                <img src={InterviewLogo} alt="" />
                                <p className="m-0 ps-3">Interview</p>
                            </div>
                            <ScheduleTable />
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-start flex-md-row flex-column mt-4">
                            <div className="d-flex align-items-center mt-3 ms-sm-5 ms-0" style={{ width: "200px" }}>
                                <img src={TestLogo} alt="" />
                                <p className="m-0 ps-3">Test</p>
                            </div>
                            <ScheduleTable />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-sm-5 py-5 px-4">
                <h1 className="my-3 mx-5 pb-2 pe-5" style={{ fontSize: "30px", color: "#143975", borderBottom: "2px solid #BDBDBD", width: "fit-content" }}>Job Applied</h1>
                <div className="px-sm-5 px-4 mt-3">
                    <div className='px-4'>
                        <div>
                            {noOfData.map((items) => {
                                return <CompanyListing tagBgColor="#E1E1E1" tagTextColor="#4F4F4F" borderColor="#BDBDBD" applyIcon="#FFB53B" cartIcon="#2BB19D" />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-sm-5 py-5 px-4">
                <h1 className="my-3 mx-5 pb-2 pe-5" style={{ fontSize: "30px", color: "#143975", borderBottom: "2px solid #BDBDBD", width: "fit-content" }}>Recommended Job</h1>
                <div className="px-sm-5 px-4 mt-3">
                    <div className='px-4'>
                        <div>
                            {noOfData.map((items) => {
                                return <CompanyListing tagBgColor="#E1E1E1" tagTextColor="#4F4F4F" borderColor="#BDBDBD" applyIcon="#FFB53B" cartIcon="#2BB19D" />
                            })}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-3 pb-4">
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
