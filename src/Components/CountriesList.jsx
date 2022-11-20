import React from 'react'
import CanadaLogo from '../assets/svg/country-job/canada.png'
import USALogo from '../assets/svg/country-job/usa.png'
import PakistanLogo from '../assets/svg/country-job/pakistan.png'
import MacedoniaLogo from '../assets/svg/country-job/Macedonia.png'
import AlbaniaLogo from '../assets/svg/country-job/albania.png'
import BosniaLogo from '../assets/svg/country-job/bosnia.png'
import BrazilLogo from '../assets/svg/country-job/brazil.png'

export default function CountriesList({ImgSize}) {
    return (
            <div className="d-flex flex-wrap align-items-center justify-content-evenly mt-5">
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={CanadaLogo} alt=""/>
                    <p className="mt-4 font-500">Canada</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={USALogo} alt=""/>
                    <p className="mt-4 font-500">USA</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={PakistanLogo} alt=""/>
                    <p className="mt-4 font-500">Pakistan</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={MacedoniaLogo} alt=""/>
                    <p className="mt-4 font-500">Macedonia</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={AlbaniaLogo} alt=""/>
                    <p className="mt-4 font-500">Albania</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={BosniaLogo} alt=""/>
                    <p className="mt-4 font-500">Bosnia</p>
                </div>
                <div className="d-flex flex-column align-items-center px-4">
                    <img style={{height:ImgSize}} src={BrazilLogo} alt=""/>
                    <p className="mt-4 font-500">Brazil</p>
                </div>
            </div>
    )
}
