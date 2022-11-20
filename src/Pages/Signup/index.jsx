import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import LoginGategory from '../../Components/CandidateOrEmployer'

function index() {
    return (
        <div>
            <Navbar />
            <LoginGategory route={"signup"} />
            <div className="py-4">
                <Banner textColor="#143975" />
            </div>
            <Footer />
        </div>
    )
}

export default index
