import React,{useState,useEffect} from 'react'
import Navbar from '../../../Components/Navbar'
import Banner from '../../../Components/Banner'
import Footer from '../../../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function StepOne() {
    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
        mobileNo: "",
        checkbox:false,
    })
    const [loader, setLoader] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [mobileNoError, setMobileNoError] = useState(false)
    const [checkboxError, setCheckboxError] = useState(false)

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    const handleSignup = () => {
        if (signupData.firstName === "") {
            setFirstNameError(true)
        }
        if (signupData.lastName === "") {
            setLastNameError(true)
        }
        if (signupData.email === "") {
            setEmailError(true)
        }
        if (signupData.password === "") {
            setPasswordError(true)
        }
        if (signupData.mobileNo === "") {
            setMobileNoError(true)
        }
        if(signupData.checkbox === false){
            setCheckboxError(true)
        }
        if (signupData.firstName !== "" && signupData.lastName !== "" && signupData.email !== "" && signupData.password !== "" && signupData.mobileNo !== "" && signupData.checkbox !== false) {
            setLoader(true)
            console.log(signupData, "signupData")
            SignupDataPost()
        }
    }

    const handleCheckbox = (e) => {
       const checked = e.target.checked
       setSignupData({...signupData,checkbox:checked})
    }

    useEffect(() => {
        if(loader === true){
        setTimeout(() => {
            setLoader(false)
            setSignupData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                country: "",
                mobileNo: "",
                interested: "",
                techTags: "",
                linkedInLink: "",
                checkbox: false,
            })
            navigate('/employer-signup-step-2')
        }, 2000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loader])

    const SignupDataPost = () => {
        axios.post('http://workbridgeteam.com/ad/api/public/api/register', {
            name : "adnan",
            email : "adnan44543312312@gmail.com",
            password : "abcd1234",
            first_name : "Adnan",
            last_name : "Sharif",
            country_id : "1",
            mobile : "3224534144",
            is_term_accept : 1,
            user_type : 1
        })
          .then(function (response) {
            console.log(response,"if");
          })
          .catch(function (error) {
            console.log(error,"else");
          });
    }

  return (
    <div>
        <Navbar/>
        <div class="row d-flex justify-content-center my-5">
            <div class="col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center pb-5 px-5" style={{borderBottom: "2px solid #BDBDBD"}}>
                    <div class="d-flex align-items-center w-100 mb-5 pb-5">
                        <div style={{position: "relative"}}>
                        <div class="d-flex justify-content-center align-items-center rounded-circle"
                            style={{width: "60px", height: "60px", border: "2px solid #FFB538"}}>1</div>
                            <p style={{position: "absolute", bottom: "-50px", left: "0px",width: "150px"}}>Sign up</p>
                        </div>
                            <div class="divider" style={{width:"170px",height: "2px",background: "#54A8C4"}}></div>
                            <div style={{position: "relative"}}>
                                <div class="d-flex justify-content-center align-items-center rounded-circle"
                                    style={{width: "60px", height: "60px", border: "2px solid #54A8C4"}}>2</div>
                                    <p style={{position: "absolute", bottom: "-50px", left: "-20px",width: "150px"}}>Create Profile</p>
                                </div>
                        <div class="divider" style={{width:"170px",height: "2px",background: "#54A8C4"}}></div>
                        <div style={{position: "relative"}}>
                            <div class="d-flex justify-content-center align-items-center rounded-circle"
                                style={{width: "60px", height: "60px", border: "2px solid #54A8C4"}}>3</div>
                                <p style={{position: "absolute", bottom: "-50px", left: "-30px",width: "150px"}}>Post Job Globally</p>
                            </div>
                    </div>
                <div class="h-100 w-100">
                    <h1 class="text-center success mb-3" style={{fontSize:"35px",color: "#143975"}}>Create Employer Account</h1>
                    <div className="row my-3">
                            <div className="col-sm-6 col-12">
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="First Name" name="firstName" onChange={(e) => { handleChange(e) }} onFocus={()=>{setFirstNameError(false)}} value={signupData.firstName} />
                                {firstNameError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                            <div className="col-sm-6 col-12 mt-sm-0 mt-4">
                                <input className="candidate-btn px-3 w-100 formInp" placeholder="Last Name" name="lastName" onChange={(e) => { handleChange(e) }} onFocus={()=>{setLastNameError(false)}} value={signupData.lastName} />
                                {lastNameError === true && (
                                    <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                                )}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="E-Mail" name="email" onChange={(e) => { handleChange(e) }} onFocus={()=>{setEmailError(false)}} value={signupData.email} />
                            {emailError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <input className="candidate-btn px-3 w-100 formInp" placeholder="Password" name="password" onChange={(e) => { handleChange(e) }} onFocus={()=>{setPasswordError(false)}} value={signupData.password} />
                            {passwordError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className="candidate-btn w-100 formInp mt-5 mb-3">
                            <button className="btn w-100 dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#4F4F4F",border:"none",outline:"none" }}>
                                Country
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item">Action</p>
                                <p className="dropdown-item">Another action</p>
                                <p className="dropdown-item">Something else here</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className="formInp w-100 candidate-btn d-flex justify-content-between align-items-center" style={{ color: "#4F4F4F" }}>
                                <div className="px-3 h-100 d-flex align-items-center">
                                    +995
                                </div>
                                <input className="px-3 w-100 formInp" placeholder="Mobile" style={{ border: " none", background: "transparent" }} name="mobileNo" onChange={(e) => { handleChange(e) }} onFocus={()=>{setMobileNoError(false)}} value={signupData.mobileNo} />
                            </div>
                            {mobileNoError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <div className='mt-2'>
                        <div className="w-100 px-3 d-flex align-items-center remember">
                            <input className="checkbox" type="checkbox" style={{ width: "18px", height: "18px" }} checked={signupData.checkbox} onClick={(e)=>{
                                handleCheckbox(e)
                                setCheckboxError(false)
                                }} />
                            <label for="" className="font-500 mx-2">Yes, I understand and Agree to the Terms of Service</label>
                        </div>
                        {checkboxError === true && (
                                <p className="mb-2 mt-1 px-3 font-500" style={{ color: "red", }}>Required Field.</p>
                            )}
                        </div>
                        <button className="banner_btn mt-4 candidate-btn w-100"
                            style={{ background: loader === true ? "lightgray" : "#FFB538", color: "white", width: "500px", height: "45px", fontSize: "18px", position: "relative" }} onClick={handleSignup} disabled={loader === true ? true : false}>
                            <span>Create</span>
                            {loader === true && (
                                <div class="spinner-border ms-3" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            )}
                        </button>
                        <p className="font-500 text-center mt-2" style={{ fontSize: "18px" }}>Already have account?<span>
                            <Link to="/employer-login" className="Link" style={{ color: "#54A8C4" }}> Log in</Link>
                        </span>
                        </p>
                </div>
            </div>
        </div>
        <div className="py-4 banner-content">
                <Banner textColor="white" />
            </div>
        <Footer/>
    </div>
  )
}
