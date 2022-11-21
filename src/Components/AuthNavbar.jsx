import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import ProfileLogo from '../assets/svg/profile.png'
import {userNavigate} from 'react-router-dom'

function AuthNavbar({ status }) {
const navigate = useNavigate()
    return (
        <div className="banner">
            <nav className="navbar navbar-expand-lg py-4 px-sm-5 px-3" style={{ boxShadow: 'none' }}>
                <div className="container-fluid d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                        <h1 style={{ color: "#FFB538", fontSize: "25px" }}>
                            ENTHOS<span style={{ color: "white" }}>TALENT</span>
                        </h1>
                    </Link>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center gap-3 text-white px-sm-5 px-3">
                            <Link to="/profile">
                                <img style={{ cursor: "pointer" }} src={ProfileLogo} alt="" />
                            </Link>
                            <span>Hi, John</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3" style={{ color: "#FFB538" }}>
                            {status && status === "EmployerDashboard" ? (
                                <div className="d-flex justify-content-center">
                                    <button className="banner_btn" style={{ background: "#FFB538", color: "white" }} onClick={()=>navigate('/find-talent')}>Post your Jobs Globally</button>
                                </div>
                            ) : (
                                <>
                                    <BsCart3 style={{ color: "#FFB538", textDecoration: "none", fontSize: "45px" }} />
                                    <span>Cart</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AuthNavbar
