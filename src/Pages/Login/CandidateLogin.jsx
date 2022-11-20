import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import GoogleIcon from '../../assets/svg/google.png'
import Img from '../../assets/svg/girl.png'
import {Link,useNavigate} from 'react-router-dom'

export default function CandidateLogin() {
    const navigate = useNavigate()
    const [value, setValue] = useState({
        username: "",
        password: ""
    })
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
        if (value.username === "" && value.password === "") {
            setUsernameError(true)
            setPasswordError(true)
        } else if (value.username === "") {
            setUsernameError(true)
        } else if (value.password === "") {
            setPasswordError(true)
        } else {
            setLoader(true)
            console.log(value, "values")
        }
    }

    const handleUsernameError = () => {
        setUsernameError(false)
    }

    const handlePasswordError = () => {
        setPasswordError(false)
    }

    useEffect(() => {
        if(loader === true){
            setTimeout(() => {
                setLoader(false)
                setValue({
                    username: "",
                    password: ""
                })
                navigate('/candidate-dashboard')
            }, 2000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])

    return (
        <div>
            <Navbar />
            <div className="banner-content px-lg-0 px-4 py-lg-0 pt-4 d-flex flex-lg-row flex-column align-items-center justify-content-lg-evenly justify-content-center">
                <img className="d-lg-flex d-none" src={Img} alt="" />
                <div className="px-3 text-white d-flex flex-column align-items-center">
                    <h1 className="connecting" style={{ fontSize: "50px" }}>Sign In</h1>
                    <button className="banner_btn my-2 candidate-btn"
                        style={{ background: "white", color: "#54A8C4", width: "500px", height: "45px", fontSize: "18px", position: "relative" }}>
                        Continue with Google
                        <div className="d-flex justify-content-center align-items-center rounded-circle" style={{ position: "absolute", top: "0px", left: "0px", width: "45px", height: "45px", border: "1px solid #54A8C4" }}>
                            <img src={GoogleIcon} alt="" />
                        </div>
                    </button>
                    <div className="d-flex align-items-center gap-3  w-full">
                        <div className="divider" style={{ width: "200px", height: "2px", background: "white" }}></div>
                        <p className="mt-3">or</p>
                        <div className="divider" style={{ width: "200px", height: "2px", background: "white" }}></div>
                    </div>
                    <div className="w-100 my-1">
                        <input className="banner_btn my-2 candidate-btn px-3"
                            style={{ background: "white", color: "black", width: "500px", height: "45px", fontSize: "18px", outline: "none" }} placeholder="Username" name="username" onChange={(e) => { handleChange(e) }} value={value.username} onFocus={handleUsernameError} />
                        {usernameError === true && (
                            <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                        )}
                    </div>
                    <div className="w-100 my-1">
                        <input className="banner_btn my-2 candidate-btn px-3"
                            style={{ background: "white", color: "black", width: "500px", height: "45px", fontSize: "18px", outline: "none" }} placeholder="Password" name="password" onChange={(e) => { handleChange(e) }} value={value.password} onFocus={handlePasswordError} />
                        {passwordError === true && (
                            <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                        )}
                    </div>
                    <div className="w-100 mt-2 px-3 d-flex align-items-center remember">
                        <input className="checkbox" type="checkbox" style={{ width: "18px", height: "18px" }} />
                        <label for="" className="font-500 mx-2">Remember me</label>
                    </div>
                    <button className="banner_btn mt-4 candidate-btn d-flex align-items-center justify-content-center"
                        style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleLogin} disabled={loader === true ? true : false}>
                        <span>Sign In</span>
                        {loader === true && (
                            <div class="spinner-border ms-3" role="status">
                                <span class="sr-only"></span>
                            </div>
                        )}
                    </button>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <p className="font-500" style={{ fontSize: "18px" }}>Don’t have an account? <span>
                            <Link to="/candidate-signup" className="Link" style={{ color: "#FFB538" }}>Sign up</Link>
                        </span>
                        </p>
                        <Link to="/forgot-pass" className="Link" style={{ color: "#FFB538" }}>Forgot password?</Link>
                    </div>
                </div>
                <img className="d-lg-none d-flex w-75 mt-5" src={Img} alt="" />
            </div>
            <div className="py-4">
                <Banner textColor="#143975" />
            </div>
            <Footer />
        </div>
    )
}
