import React from 'react'
import AuthNavbar from '../../../Components/AuthNavbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <AuthNavbar />
            <div className="row d-flex justify-content-center my-5">
                <div className="col-lg-5 col-md-7 col-12 d-flex justify-content-center px-5 pb-5">
                    <div className="h-100 w-100">
                        <h1 className="text-center" style={{ fontSize: "40px", color: "#143975" }}>Change my Password</h1>
                        <div className='w-100'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Old Password" />
                            <input className="candidate-btn mt-3 px-3 w-100 formInp" placeholder="New Password" />
                            <button class="banner_btn mt-4 candidate-btn w-100"
                                style={{ background: "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }}>
                                Save
                            </button>
                            <Link to="/profile" className="d-flex justify-content-center mt-3 Link w-100" style={{ color: "#579CAC" }}>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
            <Footer />
        </div>
    )
}
