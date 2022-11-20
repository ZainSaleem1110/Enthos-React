import React from 'react'

export default function Banner({textColor}) {
    return (
        <div className="py-5 row gx-0 d-flex flex-column align-items-center">
            <div className="col-md-6 col-11 d-flex flex-column align-items-center" style={{color: textColor,}}>
                <p className="text-center growing font-300" style={{fontSize: "40px"}}>Enthos Talent Makes growing <br/>
                    remote
                    teams effortless</p>
                <p className="text-center font-500" style={{fontSize: "40px"}}>Ready to get Started?</p>
            </div>
            <button className="mt-4 font-500"
                style={{width: "250px",height: "50px", border: `3px solid ${textColor}`,color: textColor,background: "none",borderRadius: "25px",fontSize: "30px"}}>Contact
                Us</button>
        </div>
    )
}
