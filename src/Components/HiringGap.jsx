import React from 'react'

export default function HiringGap({HiringData}) {
    return (
        <div>
            <div className="w-100 px-md-5 mt-4 mb-5 px-2 pb-4 d-md-flex d-none justify-content-center">
                <div className="country-card-parent" style={{ width: "85%" }}>
                    <div className="mt-5 d-flex justify-content-end" style={{ position: "relative" }}>
                        <img className="country-card-img" style={{ width: "650px", height: "545px", objectFit: "cover", borderRadius: "30px" }}
                            src={HiringData[0].Img} alt="" />
                        <div className="px-4 py-sm-0 py-4 d-flex flex-column justify-content-center country-card" style={{ position: "absolute", left: "0px", top: "80px", maxWidth: "578px", minHeight: "392px", boxShadow: "3px 0px 6px #888888", background: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[0].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[0].detail}</p>
                        </div>
                    </div>
                    <div className="mt-5" style={{ position: "relative" }}>
                        <img className="country-card-img" style={{ width: "650px", height: "545px", objectFit: "cover", borderRadius: "30px" }}
                            src={HiringData[1].Img} alt="" />
                        <div className="px-4 py-sm-0 py-4 d-flex flex-column justify-content-center country-card" style={{ position: "absolute", right: "0px", top: "80px", maxWidth: "578px", minHeight: "392px", boxShadow: "3px 0px 6px #888888", background: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[1].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[1].detail}</p>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-end" style={{ position: "relative" }}>
                        <img className="country-card-img" style={{ width: "650px", height: "545px", objectFit: "cover", borderRadius: "30px" }}
                            src={HiringData[2].Img} alt="" />
                        <div className="px-4 py-sm-0 py-4 d-flex flex-column justify-content-center country-card" style={{ position: "absolute", left: "0px", top: "80px", maxWidth: "578px", minHeight: "392px", boxShadow: "3px 0px 6px #888888", background: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[2].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[2].detail}</p>
                        </div>
                    </div>
                    <div className="mt-5" style={{ position: "relative" }}>
                        <img className="country-card-img" style={{ width: "650px", height: "545px", objectFit: "cover", borderRadius: "30px" }}
                            src={HiringData[3].Img} alt="" />
                        <div className="px-4 py-sm-0 py-4 d-flex flex-column justify-content-center country-card" style={{ position: "absolute", right: "0px", top: "80px", maxWidth: "578px", minHeight: "392px", boxShadow: "3px 0px 6px #888888", background: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[3].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[3].detail}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 px-md-5 mt-4 mb-5 px-2 pb-4 d-md-none d-flex flex-column align-items-center">
                <div className="mt-5 d-flex flex-column align-items-center" style={{ position: "relative" }}>
                    <img className="w-100" style={{ borderRadius: "30px", zIndex: 30, }}
                        src={HiringData[0].Img} alt="" />
                    <div className="px-4 py-4 d-flex flex-column justify-content-center country-card mob-country-card" style={{ maxWidth: "530px", minHeight: "250px", boxShadow: "3px 0px 6px #888888", backgroundColor: "white", borderRadius: "30px" }}>
                        <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[0].title}</h1>
                        <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[0].detail}</p>
                    </div>
                </div>
                <div className="country-card-parent">
                    <div className="mt-5 d-flex flex-column align-items-center" style={{ position: "relative" }}>
                        <img className="w-100" style={{ borderRadius: "30px", zIndex: 30, }}
                            src={HiringData[1].Img} alt="" />
                        <div className="px-4 py-4 d-flex flex-column justify-content-center country-card mob-country-card" style={{ maxWidth: "530px", minHeight: "250px", boxShadow: "3px 0px 6px #888888", backgroundColor: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[1].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[1].detail}</p>
                        </div>
                    </div>
                </div>
                <div className="country-card-parent">
                    <div className="mt-5 d-flex flex-column align-items-center" style={{ position: "relative" }}>
                        <img className="w-100" style={{ borderRadius: "30px", zIndex: 30, }}
                            src={HiringData[2].Img} alt="" />
                        <div className="px-4 py-4 d-flex flex-column justify-content-center country-card mob-country-card" style={{ maxWidth: "530px", minHeight: "250px", boxShadow: "3px 0px 6px #888888", backgroundColor: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[2].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[2].detail}</p>
                        </div>
                    </div>
                </div>
                <div className="country-card-parent">
                    <div className="mt-5 d-flex flex-column align-items-center" style={{ position: "relative" }}>
                        <img className="w-100" style={{ borderRadius: "30px", zIndex: 30, }}
                            src={HiringData[3].Img} alt="" />
                        <div className="px-4 py-4 d-flex flex-column justify-content-center country-card mob-country-card" style={{ maxWidth: "530px", minHeight: "250px", boxShadow: "3px 0px 6px #888888", backgroundColor: "white", borderRadius: "30px" }}>
                            <h1 className="country-card-header" style={{ color: "#143975", fontSize: "40px" }}>{HiringData[3].title}</h1>
                            <p className="mt-3 font-500 " style={{ color: "#143975", fontSize: "20px" }}>{HiringData[3].detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
