import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import CountriesList from '../../Components/CountriesList'
import AdvantagesCards from '../../Components/AdvantagesCards'
import Talent from '../../Components/Talent'
import LahoreDetail from '../../assets/svg/lahore-img-1.png'
import Hiring from '../../assets/svg/lahore-img-2.png'
import Team from '../../assets/svg/lahore-img-3.png'
import LahoreMain from '../../assets/svg/lahore-main.png'
import Banner from '../../Components/Banner'

const AdvantageData = [
    { title: "Recruiting", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member." },
    { title: "Employer of Record ", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member." },
    { title: "Background and Reference Check ", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset..." },
    { title: "Asset Management", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a..." }
]

const TalentData = [
    {Img: LahoreDetail, title:"Why Pakistan" , detail:"North Macedonia is the birth place of some great people like Mother Teresa, Alexander the Great among others notable leaders and scholars. Lake Ohrid a UNESCO heritage site is located in the southwest of the country and is know for its ecosystem and is a major tourist attraction year-round. You don’t need to be know Macedonian in order to hire Tech Talent for your organization."},
    {Img: Hiring, title:"Simplifying Hiring in Pakistan" , detail:"Opening an office in the Balkan countries is a lengthy process and usually takes 3-6 months minimum to incorporate a company. If your goal is to hire Tech Talent who speaks fluent English and can integrate into your organization then you don’t need to go through the hassle of starting your own office."},
    {Img: Team, title:"Our Team" , detail:"Enthos Talent local team in North Macedonia can help your organization in recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member."},
]

export default function index() {
    return (
        <div>
            <Navbar/>
            <img style={{width:"100%"}} src={LahoreMain} alt=""/>
            <div className="mt-5 mb-3">
            <h1 className="text-center" style={{ color: "#143975" }}>Work with us to access untapped tech talent.
                </h1>
                <p className="mt-3 text-center font-300" style={{ color: "#143975" }}>Based in Canada, with offices in central Europe, Latin America and <br/> select global locations, we bring highly qualified talent to our clients <br/> across Nort America.</p>
            </div>
            <Talent TalentData={TalentData}/>
            <div className="py-5 px-sm-5 px-2 my-3">
                <h1 className="text-center" style={{ color: "#143975" }}>Services In Canada
                </h1>
                <div className="services d-flex flex-wrap justify-content-center gap-4 my-5">
                    {AdvantageData.map((data) => {
                        return <AdvantagesCards Data={data} />
                    })}
                </div>
            </div>
            <div className="countries-work px-5 pb-5 pt-3">
            <h1 className="text-center" style={{color: "#143975"}}>Countries, where we work</h1>
            <CountriesList ImgSize="100px"/>
            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer/>
        </div>
    )
}
