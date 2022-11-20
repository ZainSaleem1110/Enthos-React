import React from 'react'
import CompanyListing from './companyListing'

const noOfData = [1, 2]

export default function RecommendedJob() {
    return (
            <div className="recomended-job p-sm-5 py-5 px-4 text-white">
            <h1 className="text-center mt-3" style={{fontSize: "45px"}}>Recomended Jobs</h1>
            <div className="px-sm-5 px-4 mt-3">
                <div className='px-sm-4'>
                    <div style={{ borderTop: "2px solid white" }}>
                        {noOfData.map((items) => {
                            return <CompanyListing tagBgColor="white" tagTextColor="#6BADBC" borderColor="white" applyIcon="white" cartIcon="white" mainText="white" />
                        })}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center pt-3 pb-4">
            <button className="banner_btn" style={{background: "#FFB538", color: "white"}}>See more</button>
            </div>
        </div>
    )
}
