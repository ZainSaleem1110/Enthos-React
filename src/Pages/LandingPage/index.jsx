import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CompanySlider from '../../Components/CompanySlider'
import RecommendedJob from '../../Components/RecommendedJob'
import CountriesList from '../../Components/CountriesList'
import Banner from '../../Components/Banner'
import CompanyLogo1 from '../../assets/svg/company-1.png'
import CompanyLogo2 from '../../assets/svg/company-2.png'
import CompanyLogo3 from '../../assets/svg/company-3.png'
import TeamImg01 from '../../assets/svg/team-2.png'
import TeamImg02 from '../../assets/svg/team-3.png'
import TeamImg03 from '../../assets/svg/team-1.png'

export default function index() {
    return (
        <div className="main-div">
            <Navbar/>
            <Header/>
            <CompanySlider/>
            <div className="w-100 px-md-5 px-2 pb-4">
            <div className="d-flex flex-column align-items-center px-md-5 px-2">
                <div className="row d-flex justify-content-center">
                    <h1 className="col-lg-8 col-12 text-center success" style={{fontSize: "45px", color: "#143975"}}>We're here to ensure you
                        achieve
                        breakthrough success</h1>
                </div>
                <div className="my-lg-5 my-3 w-100 row d-flex justify-content-between align-items-center">
                    <div className="px-4 col-lg-5 col-12 order-lg-1 order-2 mt-lg-0 mt-4">
                        <div className="team-card p-xl-5 px-3 col-12 d-flex flex-column justify-content-center align-items-sm-start align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <img src={CompanyLogo1} alt=""/>
                                <h3 className="font-500">Company Name</h3>
                            </div>
                            <p className="mt-4 font-500 text-sm-start text-center">Position for which they are hiring position for which they are hiring
                                position for which they are hiring position for which they are hiring position for which
                                they are hiring position for which they are hiring</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 pl-4 order-lg-2 order-1">
                        <img className="col-12" src={TeamImg01} alt=""/>
                    </div>
                </div>
                <div className="my-lg-5 my-3 w-100 row d-flex justify-content-between align-items-center">
                    <div className="col-lg-7  pl-4">
                        <img className="col-12" src={TeamImg02} alt=""/>
                    </div>
                    <div className="px-4 col-lg-5 col-12 mt-lg-0 mt-4">
                        <div className="team-card p-xl-5 px-3 col-12 d-flex flex-column justify-content-center align-items-sm-start align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <img src={CompanyLogo2} alt=""/>
                                <h3 className="font-500">Company Name</h3>
                            </div>
                            <p className="mt-4 font-500 text-sm-start text-center">Position for which they are hiring position for which they are hiring
                                position for which they are hiringposition for which they are hiring position for which
                                they are hiring position for which they are hiring</p>
                        </div>
                    </div>
                </div>
                <div className="my-lg-5 my-3 w-100 row d-flex justify-content-between align-items-center">
                    <div className="px-4 col-lg-5 col-12 order-lg-1 order-2 mt-lg-0 mt-4">
                        <div className="team-card p-xl-5 px-3 col-12 d-flex flex-column justify-content-center align-items-sm-start align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <img src={CompanyLogo3} alt=""/>
                                <h3 className="font-500">Company Name</h3>
                            </div>
                            <p className="mt-4 font-500 text-sm-start text-center">Position for which they are hiring position for which they are hiring
                                position for which they are hiringposition for which they are hiring position for which
                                they are hiring position for which they are hiring</p>
                        </div>
                    </div>
                    <div className="col-lg-7 order-lg-2 order-1 pl-4">
                        <img className="col-12" src={TeamImg03} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <RecommendedJob/>
        <div className="countries-work px-5 py-5">
            <h1 className="text-center" style={{color: "#143975"}}>Countries, where we work</h1>
            <CountriesList ImgSize="100px"/>
            </div>
        <div className="banner-content py-4">
        <Banner textColor="white"/>
        </div>
            <Footer/>
        </div>
    )
}
