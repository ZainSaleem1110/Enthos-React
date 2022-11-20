import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import ServicePage from '../Pages/ServicePage'
import Login from '../Pages/Login'
import CandidateLogin from '../Pages/Login/CandidateLogin'
import EmployLogin from '../Pages/Login/EmployLogin'
import Canada from '../Pages/Canada'
import NorthMacedonia from '../Pages/North-Macedonia'
import USA from '../Pages/USA'
import Pakistan from '../Pages/Pakistan'
import Albania from '../Pages/Albania'
import Bosnia from '../Pages/Bosnia'
import Brazil from '../Pages/Brazil'
import Signup from '../Pages/Signup'
import CandidateSignup from '../Pages/Signup/CandidateSignup'
import ForgotPass from '../Pages/ForgotPass'
import EmployerSingupStepOne from '../Pages/Signup/EmployerSignup/StepOne'
import EmployerSingupStepTwo from '../Pages/Signup/EmployerSignup/StepTwo'
import EmployerSingupStepThree from '../Pages/Signup/EmployerSignup/StepThree'
import FindTalentSignup from '../Pages/Signup/FindTalentSignup'
import CompanyInformtion from '../Pages/CompanyInfo'
import FindJob from '../Pages/FindJob'
import CandidateDashboard from '../Pages/CandidateDashboard'
import Profile from '../Pages/Profile'
import ProfileEdit from '../Pages/Profile/EditProfile'
import ChangePassword from '../Pages/Profile/ChangePass'
import EmployerDashboard from '../Pages/EmployerDashboard'

export default function index() {
    return (
        <div className="main-div">
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/services" element={<ServicePage/>}/>
                    <Route path="/candidateOrEmployer" element={<Login/>}/>
                    <Route path="/candidate-login" element={<CandidateLogin/>}/>
                    <Route path="/employer-login" element={<EmployLogin/>}/>
                    <Route path="/canada" element={<Canada/>}/>
                    <Route path="/north-macedonia" element={<NorthMacedonia/>}/>
                    <Route path="/usa" element={<USA/>}/>
                    <Route path="/pakistan" element={<Pakistan/>}/>
                    <Route path="/albania" element={<Albania/>}/>
                    <Route path="/bosnia" element={<Bosnia/>}/>
                    <Route path="/brazil" element={<Brazil/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/candidate-signup" element={<CandidateSignup/>}/>
                    <Route path="/forgot-pass" element={<ForgotPass/>}/>
                    <Route path="/employer-signup" element={<EmployerSingupStepOne/>}/>
                    <Route path="/employer-signup-step-2" element={<EmployerSingupStepTwo/>}/>
                    <Route path="/employer-signup-step-3" element={<EmployerSingupStepThree/>}/>
                    <Route path="/find-talent" element={<FindTalentSignup/>}/>
                    <Route path="/company-info" element={<CompanyInformtion/>}/>
                    <Route path="/find-job" element={<FindJob/>}/>
                    <Route path="/candidate-dashboard" element={<CandidateDashboard/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/profile/edit-profile" element={<ProfileEdit/>}/>
                    <Route path="/profile/change-pass" element={<ChangePassword/>}/>
                    <Route path="/employer-dashboard" element={<EmployerDashboard/>}/>
                </Routes>
           </BrowserRouter> 
        </div>
    )
}
