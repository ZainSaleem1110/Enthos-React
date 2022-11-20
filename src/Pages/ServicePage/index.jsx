import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CountriesList from '../../Components/CountriesList'
import Banner from '../../Components/Banner'
import AdvantagesCards from '../../Components/AdvantagesCards'
import HiringGap from '../../Components/HiringGap'
import HiringImg1 from '../../assets/svg/Recruiting.png'
import HiringImg2 from '../../assets/svg/Record.png'
import HiringImg3 from '../../assets/svg/Checking.png'
import HiringImg4 from '../../assets/svg/Management.png'

const AdvantageData = [
    { title: "No middle-term or third-party", detail: "We’re based in Canada and our employees across global offices recruit set up, employ, and manage amazing teams for you." },
    { title: "Our team work when you do.", detail: "This Workforce accomodates time zones across north America. working within office hours to align with your teams." },
    { title: "Meet the tech talent you never knew was out there.", detail: "These teams are highly qualified and cager to work. Our global recruiting teams attract and retain the best and brightest in each region." },
    { title: "Bring on the people you need easily.", detail: "This isn’t just payrolling. We sourve talent, perform checks and references, handle compliance requirements and monitor our service end-to-end. " }
]

const HiringData = [
    {Img: HiringImg1, title:"Recruiting" , detail:"Establishing a company, hiring an accounting firm, paying for a virtual or a physical space are all expenses that an organization does not need to incur when all you want is to hire a Tech Professional who will work remotely from the comfort of his/her home."},
    {Img: HiringImg2, title:"Employer of Record" , detail:"With Enthos Talent team you don’t have to worry about recruiting, hiring, payroll processing, asset management, and all the tasks that need to performed to setup a remote team member."},
    {Img: HiringImg3, title:"Background and Reference Check" , detail:"Establishing a company, hiring an accounting firm, paying for a virtual or a physical space are all expenses that an organization does not need to incur when all you want is to hire a Tech Professional who will work remotely from the comfort of his/her home."},
    {Img: HiringImg4, title:"Asset Management" , detail:"Canada with its diverse population has not only become the center of integration for various cultures but is at the forefront of creating an environment of growth, prosperity and inclusiveness. This unique mix has also given Canada a unique position where it is able to accommodate and assimilate talent from all over the world and has created an ecosystem of growth and entrepreneurship."},
]

export default function index() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="mt-5 pt-3 d-flex justify-content-center">
                <div>
                    <h1 className="text-center" style={{ color: "#143975" }}>Work with us to access untapped tech talent.</h1>
                    <p className="mt-3 text-center font-300 " style={{ color: "#143975" }}>Based in Canada, with offices in central
                        Europe, Latin America and <br /> select global locations, we bring highly qualified talent to our
                        clients <br /> across Nort America.</p>
                </div>
            </div>
            <div className="py-5 px-sm-5 px-2 my-3 bg-vector">
                <h1 className="text-center" style={{ color: "#143975" }}>Enthos Talent Advantages
                </h1>
                <p className="mt-3 text-center font-300 " style={{ color: "#143975" }}>Work is expanding in a borderless direction. Work with us and postion your company for success.</p>
                <div className="services d-flex flex-wrap justify-content-center gap-4 my-5">
                    {AdvantageData.map((data) => {
                        return <AdvantagesCards Data={data} />
                    })}
                </div>
            </div>
                <h1 className="text-center" style={{ color: "#143975" }}>Enthos Talent Team bridges the Hiring gap</h1>
                <HiringGap HiringData={HiringData} />
                <div className="countries-work px-5 pb-5 pt-3">
            <h1 className="text-center" style={{color: "#143975"}}>Countries, where we work</h1>
            <CountriesList/>
            </div>
                <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
                <Footer />
            </div>
            )
}
