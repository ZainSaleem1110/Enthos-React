import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../assets/svg/girl.png'

export default function Header() {
    const navigate = useNavigate()
    return (
            <div className="banner-content px-lg-0 px-4 py-lg-0 pt-4 d-flex flex-lg-row flex-column align-items-center justify-content-lg-evenly justify-content-center">
                <img className="d-lg-flex d-none" src={Img} alt=""/>
                <div className="pe-3 ps-5 text-white d-flex flex-column align-items-lg-start align-items-center">
                    <h1 className="connecting text-lg-start text-center" style={{fontSize:"70px", fontWeight: "bolder"}}>Connecting the world to work</h1>
                    <p className="mt-3 help-us font-500 text-lg-start text-center" style={{fontSize: "30px"}}>Let us help you realize your career potential</p>
                    <div className="mt-sm-5 mt-3 pt-3 w-100 banner_btn_main d-flex flex-md-row flex-column justify-content-lg-start justify-content-center align-items-center">
                        <button className="banner_btn" style={{background: "#FFB538", color: "white"}} onClick={()=>{navigate('/find-job')}}>Find a Job</button>
                        <button className="banner_btn" style={{background: "white", color: "black"}} onClick={()=>{navigate('/find-talent')}}>Find Talent</button>
                    </div>
                </div>
                <img className="d-lg-none d-flex w-75 mt-5" src={Img} alt=""/>
            </div>
    )
}
