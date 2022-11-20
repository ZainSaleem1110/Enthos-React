import React from 'react'
import {useNavigate} from 'react-router-dom'
import Img from '../assets/svg/girl.png'

export default function CandidateOrEmployer({route}) {
const Navigate = useNavigate()
const candidateLogin = () => {
Navigate(`/candidate-${route}`)
}
const employerLogin = () => {
Navigate(`/employer-${route}`)
}

    return (
        <div className="banner-content px-lg-0 px-4 py-lg-0 pt-4 d-flex flex-lg-row flex-column align-items-center justify-content-lg-evenly justify-content-center">
                <img className="d-lg-flex d-none" src={Img} alt=""/>
                <div className="px-3 text-white d-flex flex-column align-items-center">
                    <h1 className="connecting" style={{fontSize:"60px",fontWeight:"bolder"}}>Who are you?</h1>
                    <button className="banner_btn my-2 candidate-btn"
                        style={{background: "white",color: "black",width: "500px", height: "120px",fontSize: "30px"}} onClick={candidateLogin}>Candidate</button>
                    <div className="d-flex align-items-center gap-3  w-full">
                        <div className="divider" style={{width: "200px", height: "2px",background: "white"}}></div>
                        <p className="mt-3">or</p>
                        <div className="divider" style={{width: "200px", height: "2px",background: "white"}}></div>
                    </div>
                    <button className="banner_btn my-2 candidate-btn"
                        style={{background: "white",color: "black",width: "500px", height: "120px",fontSize: "30px"}} onClick={employerLogin}>Employer</button>
                </div>
                <img className="d-lg-none d-flex w-75 mt-5" src={Img} alt=""/>
            </div>
    )
}
