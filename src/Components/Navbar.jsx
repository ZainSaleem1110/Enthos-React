import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Navbar() {
const Navigate = useNavigate()
const handleLogin = () => {
    Navigate("/candidateOrEmployer")
}

const handleSignup = () => {
Navigate("/signup")
}

    return (
        <div className="banner">
            <nav class="navbar navbar-expand-lg py-4 px-sm-5 px-3" style={{ boxShadow: 'none' }}>
                <div class="container-fluid d-flex align-items-center">
                    <Link class="navbar-brand" to="/">
                        <h1 style={{ color: "#FFB538", fontSize: "25px" }}>
                            ENTHOS<span style={{ color: "white" }}>TALENT</span>
                        </h1>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-end align-items-center w-100">
                            <ul style={{ listStyleType: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "20px", width: "auto", columnGap: "40px" }}>
                                <li>
                                    <Link to="/services" className="Link">
                                        For companies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="Link">
                                        For job seekers
                                    </Link>
                                </li>
                                <li>
                                    <button className="login_btn" onClick={handleLogin}>Log in</button>
                                </li>
                                <li>
                                    <button className="login_btn" style={{ background: "#FFB538", color: "white" }} onClick={handleSignup}>Sign up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
