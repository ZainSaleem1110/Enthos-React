import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import CountriesList from '../../Components/CountriesList'
import AdvantagesCards from '../../Components/AdvantagesCards'
import Talent from '../../Components/Talent'
import CanadaDetail from '../../assets/svg/Canada-Img-1.png'
import Hiring from '../../assets/svg/Canada-Img-2.png'
import Team from '../../assets/svg/Canada-Img-3.png'
import CanadaMainImg from '../../assets/svg/Canada-main.png'
import Banner from '../../Components/Banner'

const AdvantageData = [
    { title: "Recruiting", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member." },
    { title: "Employer of Record ", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member." },
    { title: "Background and Reference Check ", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset..." },
    { title: "Asset Management", detail: "With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a..." }
]

const TalentData = [
    {Img: CanadaDetail, title:"Why Canada" , detail:"Canada with its diverse population has not only become the center of integration for various cultures but is at the forefront of creating an environment of growth, prosperity and inclusiveness. This unique mix has also given Canada a unique position where it is able to accommodate and assimilate talent from all over the world and has created an ecosystem of growth and entrepreneurship. "},
    {Img: Hiring, title:"Simplifying Hiring in Canada" , detail:"Establishing a company, hiring an accounting firm, paying for a virtual or a physical space are all expenses that an organization does not need to incur when all you want is to hire a Tech Professional who will work remotely from the comfort of his/her home."},
    {Img: Team, title:"Our Team" , detail:"With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member."},
]

export default function index() {
    return (
        <div>
            <Navbar/>
            <img style={{width:"100%"}} src={CanadaMainImg} alt=""/>
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
