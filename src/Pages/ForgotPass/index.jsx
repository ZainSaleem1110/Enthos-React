import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Img from '../../assets/svg/girl.png'

export default function Index() {
    const [value, setValue] = useState({
        email: "",
    })
    const [emailError, setEmailError] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
        if (value.email === "") {
            setEmailError(true)
        } else {
            setLoader(true)
            console.log(value, "values")
        }
    }

    const handleUsernameError = () => {
        setEmailError(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            setValue({
                email: "",
            })
        }, 2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])

    return (
        <div>
            <Navbar />
            <div className="banner-content px-lg-0 px-4 py-lg-0 pt-4 d-flex flex-lg-row flex-column align-items-center justify-content-lg-evenly justify-content-center">
                <img className="d-lg-flex d-none" src={Img} alt="" />
                <div className="px-3 text-white d-flex flex-column align-items-center">
                    <h1 className="connecting" style={{ fontSize: "50px", fontWeight: "bolder" }}>Forgot Password?</h1>
                    <div>
                        <div className="w-100 my-1 d-flex align-items-center justify-content-center">
                            <input className="banner_btn my-2 candidate-btn px-3"
                                style={{ background: "white", color: "black", width: "500px", height: "45px", fontSize: "18px", outline: "none" }} placeholder="E-mail" name="email" type="email" onChange={(e) => { handleChange(e) }} value={value.email} onFocus={handleUsernameError} />
                        </div>
                        {emailError === true && (
                            <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                        )}
                    </div>
                    <button className="banner_btn mt-4 candidate-btn d-flex align-items-center justify-content-center"
                        style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleLogin} disabled={loader === true ? true : false}>
                        <span>Submit</span>
                        {loader === true && (
                            <div class="spinner-border ms-3" role="status">
                                <span class="sr-only"></span>
                            </div>
                        )}
                    </button>
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
