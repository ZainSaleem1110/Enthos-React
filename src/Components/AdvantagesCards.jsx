import React from 'react'

export default function AdvantagesCards({Data}) {
    return (
        <div className="service-card d-flex flex-column justify-content-start pt-5 pb-3 px-4"
            style={{ backgroundColor: "white", boxShadow: "3px 0px 6px #888888" }}>
            <h1 className="growing" style={{ color: "#143975", fontSize: "30px" }}>{Data.title}</h1>
            <p className="w-100 font-500 mt-4" style={{ fontSize: "18px" }}>{Data.detail}</p>
        </div>

    )
}
