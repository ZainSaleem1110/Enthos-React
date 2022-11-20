import React from 'react'

export default function DashboardOptions({Data}) {
  return (
    <div>
        <button className="my-2 candidate-btn d-flex align-items-center justify-content-center"
                style={{background: "white",color: "black",height: "120px",fontSize: "25px", border: "2px solid #BDBDBD",width: "400px", columnGap:"15px", borderRadius: "25px"}}>
                <img src={Data.Img} alt=""/>
                <div>
                    <p className="text-center growing m-0 p-0 font-700" style={{fontSize: "30px",color: "#143975"}}>{Data.Heading}</p>
                    <p className="text-center growing m-0 p-0 font-700" style={{fontSize: "25px",color: "#FFB538"}}>{Data.Count}</p>
                </div>
            </button>
    </div>
  )
}
