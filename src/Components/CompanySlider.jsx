import React from 'react'
import CompanyLogo1 from '../assets/svg/company-1.png'
import CompanyLogo2 from '../assets/svg/company-2.png'
import CompanyLogo3 from '../assets/svg/company-3.png'
import { useNavigate } from 'react-router-dom'

const CompanyList = [
    {Logo:CompanyLogo1, name:"Company Name", detail: "Position for which they are hiring position for which they are hiring position for"},
    {Logo:CompanyLogo2, name:"Company Name", detail: "Position for which they are hiring position for which they are hiring position for"},
    {Logo:CompanyLogo3, name:"Company Name", detail: "Position for which they are hiring position for which they are hiring position for"},
    {Logo:CompanyLogo1, name:"Company Name", detail: "Position for which they are hiring position for which they are hiring position for"},
    {Logo:CompanyLogo2, name:"Company Name", detail: "Position for which they are hiring position for which they are hiring position for"},
]

export default function CompanySlider() {
    const navigate = useNavigate()
    return (
        <div
            className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex justify-content-evenly w-full my-5 py-5 g-3 px-5">
                {CompanyList.map((items)=>{
                    return <div className="company-card-child px-4 py-3" style={{cursor:"pointer"}} onClick={()=>{navigate('/company-info')}}>
                    <img src={items.Logo} style={{width:"50px",height:"35"}} alt=""/>
                    <h1 className="font-500" style={{fontSize: "20px"}}>{items.name}</h1>
                    <p className="font-500">{items.detail}</p>
                </div>
                })}
        </div>
    )
}
